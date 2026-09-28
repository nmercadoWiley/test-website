let clicks = 0;
const counter = document.getElementById("counter");

document.getElementById("clickBtn").addEventListener("click", () => {
  clicks++;
  counter.textContent = `Clicks: ${clicks}`;
});
