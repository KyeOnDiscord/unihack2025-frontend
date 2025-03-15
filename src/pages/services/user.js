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
}
export async function ResetPassword(email, password) {
  // reset password
  let requestOptions = {
    method: "POST",
    headers: {
      Authorization: config.INTERFACE_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: `username=${email}&password=${password}`,
    redirect: "follow",
  };
  console.log(requestOptions);
  let passwordResetResp = await fetch(
    `${config.API_URL}/users/account/reset-password`,
    requestOptions
  );
  console.log("abc");
  console.log(passwordResetResp);
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

export async function SetCalendar(calendar_url, bearer) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${bearer}`,
    },
    redirect: "follow",
  };

  let resp = await fetch(
    `${config.API_URL}/users/calender/?calender_ics_link=${calendar_url}`,
    requestOptions
  );
  return resp.ok;
}

export async function SetPreferences(preferences, bearer) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${bearer}`,
    },
    redirect: "follow",
  };

  let resp = await fetch(
    `${config.API_URL}/users/preferences/?preferences=${preferences}`,
    requestOptions
  );
  return resp.ok;
}
