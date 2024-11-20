export async function createParticipantPS(user_id) {
  const response = await fetch("http://localhost:3001/ps", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id }),
  });

  const res = await response.text();
  return res;
}

export async function createParticipantVWM(user_id) {
  const response = await fetch("http://localhost:3001/vwm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id }),
  });

  if (!response.ok) {
    // We can do better error parsing than this but it works for now
    throw new Error("Duplicate participant!");
  }

  const res = await response.text();
  return res;
}