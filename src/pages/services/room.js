import * as config from "../../config";

export async function JoinRoom(roomCode, bearer) {
  const url = `${config.API_URL}/rooms/${roomCode}/join`;
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + bearer,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  fetch(url, {
    method: "POST",
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
