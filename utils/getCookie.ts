export function getCookie() {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (cookiePair[0] === "ms-id") return cookiePair[1];
    else return null;
  }
  return null;
}
