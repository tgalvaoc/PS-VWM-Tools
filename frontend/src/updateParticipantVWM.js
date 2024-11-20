
export function updateParticipantVWMTrial(
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
  user_id
) {
  fetch("http://localhost:3001/VWM/vwm_score_trial", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
    }),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      // alert(data);
    });
}

