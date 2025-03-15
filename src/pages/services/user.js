import Link from "next/link";
import * as config from "../../config";

export async function RegisterUser(name, email) {
  const raw = JSON.stringify({
    name: name,
    email: email,
    hashed_password: "",
  });

  let requestOptions = {
    method: "POST",
    headers: {
      Authorization: config.INTERFACE_API_KEY,
      "Content-Type": "application/json",
    },
    body: raw,
    redirect: "follow",
  };

  let resp = await fetch(`${config.API_URL}/users`, requestOptions);
  let userId = await resp.json();
  console.log("user id is: " + userId);
  alert("A verification email was sent to your inbox, please click it");
}
export async function ResetPassword(email, password) {
  // reset password
  let passwordResetReq = {
    method: "POST",
    headers: {
      Authorization: config.INTERFACE_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: `username=${email}&password=${password}`,
    redirect: "follow",
  };
  let passwordResetResp = await fetch(
    `${config.API_URL}/users/account/reset-password`,
    passwordResetReq
  );
  return passwordResetResp.ok;
}
export async function LoginUser(email, password) {
  console.log("Logging in the user...");
  let loginReq = {
    method: "POST",
    headers: {
      Authorization: config.INTERFACE_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: `username=${email}&password=${password}`,
    redirect: "follow",
  };
  let resp = await fetch(`${config.API_URL}/token`, loginReq);
  if (resp.ok) {
    let data = await resp.json();
    localStorage.setItem("JWT_TOKEN", data.access_token);
    window.location.href = "/home";
  } else {
    alert("Login credentials incorrect");
    return false;
  }
}

export async function me(token) {
  console.log("Getting user's info...");
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + token },
    redirect: "follow",
  };

  let resp = await fetch(`${config.API_URL}/users/me`, requestOptions);
  if (resp.ok) {
    return await resp.json();
  } else {
    throw "Invalid Token";
  }
}

//("ResetPassword in here");
// export async function ResetPassword(email) {
//   const url = `${config.API_URL}/users/account/reset-password`;
//   const headers = {
//     Accept: "application/json",
//     Authorization: config.INTERFACE_API_KEY,
//     "Content-Type": "application/x-www-form-urlencoded",
//   };

//   const data = new URLSearchParams({
//     grant_type: "password",
//     username: email,
//     password: "abc",
//     scope: "",
//     client_id: "string",
//     client_secret: "string",
//   });

//   fetch(url, {
//     method: "POST",
//     headers: headers,
//     body: data,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Success:", data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

export async function FindRoom(roomId) {
  const url = `${config.API_URL}/rooms/${roomId}`;
  const headers = {
    Accept: "application/json",
    Authorization: config.INTERFACE_API_KEY,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  fetch(url, {
    method: "GET",
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
