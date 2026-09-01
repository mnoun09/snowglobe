const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "Have a sweet treat, you deserve it!",
  "Keep up the great work!",
  "You're doing amazing!",
  "Believe in yourself!",
  "Stay jolly and keep going!",
  "Don't forget to leave a little sparkle wherever you go!",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  message.textContent = "Shaking the globe...";
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});