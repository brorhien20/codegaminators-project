const doColorChange = ({ innerHTML }) => {
  const root = document.querySelector(":root");

  root.style.setProperty(
    "--theme-primary",
    innerHTML.includes`toggle_off` ? "#1a191d" : "#dbdbdb"
  );
  root.style.setProperty(
    "--theme-secondary",
    innerHTML.includes`toggle_off` ? "#dbdbdb" : "#1a191d"
  );
};

const doButtonToggle = target => {
  target.innerHTML = target.innerHTML.includes("toggle_off")
    ? "toggle_on"
    : "toggle_off";
};

const handleThemeSwitch = ({ target }) => {
  event.preventDefault();
  event.stopImmediatePropagation();

  doButtonToggle(target);
  doColorChange(target);
};

const APP = () => {
  document
    .querySelector("#toggle")
    .addEventListener("click", handleThemeSwitch);
};

window.addEventListener("load", APP);
