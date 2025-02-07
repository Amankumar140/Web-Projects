const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  results = document.querySelector("#results");
  if (height < 0 || height === "" || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height};`;
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight};`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      let message = "you are <b>under weight<b>";
    } else if (bmi > 18.6 && bmi < 24.9) {
      message = " you have normal range and <b>healthy<b>";
    } else {
      message = "over weight";
    }
    results.innerHTML = `<span>${bmi}</span> <br>
    <p style="color: black;">${message}</p>`;
  }
});
