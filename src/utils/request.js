export default function request(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}
