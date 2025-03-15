import * as config from "../../config";

export async function Upload(url) {
  const raw = JSON.stringify(url);

  let requestOptions = {
    method: "POST",
    headers: {
      Authorization: config.INTERFACE_API_KEY,
      "Content-Type": "application/json",
    },
    body: raw,
    redirect: "follow",
  };

  let resp = await fetch(`${config.API_URL}/calender`, requestOptions);
  let response = await resp.json();
  console.log("Calendar upload: ", response);
}
