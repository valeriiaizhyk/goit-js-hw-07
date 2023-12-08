const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", updateGreeting);

function updateGreeting() {
  const name = nameInput.value.trim();
  nameOutput.textContent = name || "Anonymous";
}
