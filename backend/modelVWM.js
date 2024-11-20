require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

const createTable = () => {
    return new Promise(function (resolve, reject) {
        pool.query(
            `CREATE TABLE IF NOT EXISTS vwm (
        "user_id" VARCHAR(40),
        "vwm_capacity_trial" NUMERIC,
        "size4_score_trial" NUMERIC,
        "size8_score_trial" NUMERIC,
        "size4_hit_rate_trial" NUMERIC,
        "size4_false_alarm_trial" NUMERIC,
        "size8_hit_rate_trial" NUMERIC,
        "size8_false_alarm_trial" NUMERIC,
        "correct_answers_trial" VARCHAR[],
        "user_answers_trial" VARCHAR[],
        "set_sizes_trial" NUMERIC[],
        "duration_trial" NUMERIC,
        PRIMARY KEY ("user_id")
      )`,
            (error, results) => {
                if (error) {
                    reject(error);
                    console.log(error);
                }
                resolve(results.rows);
            }
        );
    });
};

const getParticipant = () => {
    return new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM vwm ORDER BY user_id ASC", (error, results) => {
            if (error) {
                reject(error);
                console.log(error);
            }
            resolve(results.rows);
        });
    });
};

const createParticipant = (body) => {
    return new Promise(function (resolve, reject) {
        const { user_id } = body;
        pool.query("INSERT INTO vwm (user_id) VALUES ($1) RETURNING *",
            [user_id],
            (error, results) => {
                
            if (error) {
                reject(error);
                console.log(error);
            }
            resolve();
        });
    });
};

const updateParticipantVWMTrial = (body) => {
    return new Promise(function (resolve, reject) {
        const {
            vwm_score_trial,
            size4_score_trial,
            size8_score_trial,
            size4_hit_rate_trial,
            size4_false_alarm_trial,
            size8_hit_rate_trial,
            size8_false_alarm_trial,
            correct_answers_trial,
            user_answers_trial,
            set_sizes_trial,
            duration_trial,
            user_id,
        } = body;
        pool.query(
            "UPDATE vwm SET vwm_capacity_trial = ($1), size4_score_trial = ($2), size8_score_trial = ($3), size4_hit_rate_trial = ($4), size4_false_alarm_trial = ($5), size8_hit_rate_trial = ($6), size8_false_alarm_trial = ($7), correct_answers_trial = ($8), user_answers_trial = ($9), set_sizes_trial = ($10), duration_trial = ($11) WHERE user_id = $12",
            [
                vwm_score_trial,
                size4_score_trial,
                size8_score_trial,
                size4_hit_rate_trial,
                size4_false_alarm_trial,
                size8_hit_rate_trial,
                size8_false_alarm_trial,
                correct_answers_trial,
                user_answers_trial,
                set_sizes_trial,
                duration_trial,
                user_id,
            ],
            (error, results) => {
                if (error) {
                    reject(error);
                    console.log(error);
                }
                resolve(`Updated participant: ${results.rows[0]}`);
            }
        );
    });
};

module.exports = {
    createTable,
    getParticipant,
    createParticipant,
    updateParticipantVWMTrial,
};
