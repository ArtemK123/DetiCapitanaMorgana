export default function isUserAuthenticated() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return !!isLoggedIn && isLoggedIn === "true";
}