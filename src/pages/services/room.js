import * as config from "../../config";

export async function joinRoom(roomCode, bearer) {
  const url = `${config.API_URL}/rooms/${roomCode}/join`;
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + bearer,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  await fetch(url, {
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

export async function createRoom(roomName, bearer) {
  const url = `${config.API_URL}/rooms`;
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + bearer,
    "Content-Type": "application/json",
  };
  const raw = JSON.stringify({
    name: roomName,
  });

  await fetch(url, {
    method: "POST",
    headers: headers,
    body: raw,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function getRooms(bearer) {
  const url = `${config.API_URL}/rooms/my-rooms`;
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + bearer,
  };

  const resp = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  
  if (resp.ok) {
    return await resp.json();
  }
}

export async function leaveRoom(roomId, bearer) {
  const url = `${config.API_URL}/rooms/${roomId}/leave`;
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + bearer,
  };

  const resp = await fetch(url, {
    method: "POST",
    headers: headers,
  });
  
  if (resp.ok) {
    return await resp.json();
  }
}
