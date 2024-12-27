function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');
    if (!birthdate) {
        result.innerHTML = '<p>Please select a valid birthdate!</p>';
        return;
    }
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    result.innerHTML = `<p>Your age is ${age} years.</p>`;
    const funFact = document.getElementById('fun-fact');
    funFact.innerHTML = `<p>Did you know? In ${birthDateObj.getFullYear()}, amazing things happened!</p>`;
}
document.addEventListener("DOMContentLoaded", () => {
    const calculatorContainer = document.querySelector(".calculator-container");
    const toggleGlowButton = document.createElement("button");
    toggleGlowButton.textContent = "Toggle Glow Effect";
    toggleGlowButton.classList.add("button-85");
    toggleGlowButton.style.marginTop = "20px";
    toggleGlowButton.addEventListener("click", () => {
        calculatorContainer.classList.toggle("glow-active");
    });
    calculatorContainer.appendChild(toggleGlowButton);
});
