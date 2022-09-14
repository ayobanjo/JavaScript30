const inputs = document.querySelectorAll(".controls input");
const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const base = document.querySelector("#base");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
