export async function createTablePS() {
  const response = await fetch("http://localhost:3001/table-ps", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const res = await response.text();
  //console.log("Created table ps.");
  return res;
}

export async function createTableVWM() {
  const response = await fetch("http://localhost:3001/table-vwm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const res = await response.text();
  //console.log("Created table vwm.");
  return res;
}
