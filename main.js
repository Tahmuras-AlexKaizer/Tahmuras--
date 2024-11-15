function updateValue(value) {
  const range = document.getElementById("priceRange");
  const max = range.max;
  const percent = (value / max) * 100;
  range.style.background = `linear-gradient(to right, #f7752a 0%, #f7752a ${percent}%, #ddd ${percent}%, #ddd 100%)`;
  document.getElementById("valueDisplay").textContent = `0 — ${parseInt(
    value
  ).toLocaleString("ru-RU")} ₽`;
}
