import * as config from "../../config";

export async function RegisterUser(name, email, password) {
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
  if (resp.ok) {
    // reset password

    let passwordResetReq = {
      method: "POST",
      headers: {
        Authorization: config.INTERFACE_API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: `username=${userId["user"]["id"]}&password=${password}`,
      redirect: "follow",
    };
    let passwordResetResp = await fetch(
      `${config.API_URL}/users/account/reset-password`,
      passwordResetReq
    );
    return passwordResetResp.ok;
  }
}
