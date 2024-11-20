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
      `CREATE TABLE IF NOT EXISTS ps (
        "user_id" VARCHAR(40),
        "ps_find_a_score" NUMERIC,
        "ps_find_a_time" NUMERIC,
        "ps_numbers_score" NUMERIC,
        "ps_numbers_time" NUMERIC,
        "ps_shapes_score" NUMERIC,
        "ps_shapes_time" NUMERIC,
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
    pool.query("SELECT * FROM ps ORDER BY user_id ASC", (error, results) => {
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
      pool.query("INSERT INTO ps (user_id) VALUES ($1) RETURNING *",
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

const updateParticipantPSLetterA = (body) => {
  return new Promise(function (resolve, reject) {
    const { ps_score_a, ps_time_a, user_id } = body;
    pool.query(
      "UPDATE ps SET ps_find_a_score = ($1), ps_find_a_time = ($2) WHERE user_id = $3",
      [ps_score_a, ps_time_a, user_id],
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

const updateParticipantPSNumbers = (body) => {
  return new Promise(function (resolve, reject) {
    const { ps_score_numbers, ps_time_numbers, user_id } = body;
    pool.query(
      "UPDATE ps SET ps_numbers_score = ($1), ps_numbers_time = ($2) WHERE user_id = $3",
      [ps_score_numbers, ps_time_numbers, user_id],
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

const updateParticipantPSShapes = (body) => {
  return new Promise(function (resolve, reject) {
    const { ps_score_shapes, ps_time_shapes, user_id } = body;
    pool.query(
      "UPDATE ps SET ps_shapes_score = ($1), ps_shapes_time = ($2) WHERE user_id = $3",
      [ps_score_shapes, ps_time_shapes, user_id],
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
  updateParticipantPSLetterA,
  updateParticipantPSNumbers,
  updateParticipantPSShapes,
};
