const toggle = document.getElementById("toggle");
const toggle_on = document.getElementById("toggle-on");

toggle.addEventListener("click", () => {
  console.log(toggle_on.classList["0"]);
  if (toggle_on.classList["0"] === "toggle-on") {
    toggle_on.classList.add("toggle-off");
    toggle_on.classList.remove("toggle-on");
  } else {
    toggle_on.classList.add("toggle-on");
    toggle_on.classList.remove("toggle-off");
  }
});
