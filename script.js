let selectedFood = "";

function goTo(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  alert("Non non non 😭 Clique plutôt sur OUI 💕");
});

function chooseFood(food) {
  selectedFood = food;

  const date = document.getElementById("dateInput").value || "le jour que tu veux";
  const time = document.getElementById("timeInput").value;

  document.getElementById("summary").innerHTML =
    `Notre date : <b>${date}</b><br>
     Heure : <b>${time}</b><br>
     Food : <b>${selectedFood}</b>`;

  goTo("final");
}