export default function () {
  let baseUrl = location.origin;
  if (baseUrl === "http://localhost:3000") {
    baseUrl = "http://localhost:5000/api";
  } else {
    baseUrl = location.origin + "/api";
  }
  return {
    baseUrl,
  };
}
