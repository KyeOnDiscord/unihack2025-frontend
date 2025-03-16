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

export async function displayRoom(roomId, bearer) {
  const url = `${config.API_URL}/rooms/${roomId}/calenders`;
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + bearer,
  };
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    if (resp.ok) {
      let answer = await resp.json();
      return answer;
    }
  } catch {
    console.log("something went wrong..");
  }
}

export async function getSuggestion(users, eventTime, bearer) {
  console.log(users);
  const userIds = Object.keys(users)
    .map((id) => `user_ids=${encodeURIComponent(id)}`)
    .join("&");

  const url = `${
    config.API_URL
  }/rooms/preference?${userIds}&event_time=${encodeURIComponent(eventTime)}`;
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + bearer,
  };
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    if (resp.ok) {
      let answer = await resp.json();
      console.log(answer);
      return answer;
    }
  } catch {
    console.log("something went wrong..");
  }
}
