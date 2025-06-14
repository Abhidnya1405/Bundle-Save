const radios = document.querySelectorAll('input[name="bundle"]');
const totalSpan = document.getElementById("total");
const optionBoxes = document.querySelectorAll(".option");

function updateSelection() {
optionBoxes.forEach((box) => box.classList.remove("active"));

radios.forEach((radio) => {
    if (radio.checked) {
    const price = parseFloat(radio.dataset.price);
    totalSpan.textContent = `DKK ${price.toFixed(2)}`;
    radio.closest(".option").classList.add("active");
    }
});
}

radios.forEach((radio) => {
    radio.addEventListener("change", updateSelection);
});

updateSelection();
