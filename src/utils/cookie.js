const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((cookie) => cookie.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

export { getCookie };
