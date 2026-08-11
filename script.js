
document.querySelectorAll("[data-copy-ip]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const ip = btn.dataset.copyIp;
    try {
      await navigator.clipboard.writeText(ip);
      const label = btn.querySelector(".copy-label");
      const old = label.textContent;
      label.textContent = "COPIED!";
      setTimeout(() => label.textContent = old, 1400);
    } catch {
      window.prompt("Copy the server IP:", ip);
    }
  });
});

const target = new Date("2026-08-16T00:00:00+05:00").getTime();
function updateCountdown(){
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  document.getElementById("days").textContent = String(d).padStart(2,"0");
  document.getElementById("hours").textContent = String(h).padStart(2,"0");
  document.getElementById("minutes").textContent = String(m).padStart(2,"0");
  document.getElementById("seconds").textContent = String(s).padStart(2,"0");
}
if(document.getElementById("countdown")){
  updateCountdown();
  setInterval(updateCountdown,1000);
}
