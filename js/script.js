console.log("Hello world!");

let sellValue = document.querySelector(".js-sellValue");
let chargeValue = document.querySelector(".js-chargeValue");
let sellType = document.querySelector(".js-sellType");
let chargeType = document.querySelector(".js-chargeType");

sellValue.addEventListener("input", () => {
  if (sellType.value === chargeType.value) {
    chargeValue.value = (+sellValue.value).toFixed(2);
  }
  if (sellType.value === `PLN` && chargeType.value === `EUR`) {
    chargeValue.value = (+sellValue.value * 0.22).toFixed(2);
  }
  if (sellType.value === `PLN` && chargeType.value === `USD`) {
    chargeValue.value = (+sellValue.value * 0.25).toFixed(2);
  }
  if (sellType.value === `PLN` && chargeType.value === `GBP`) {
    chargeValue.value = (+sellValue.value * 0.19).toFixed(2);
  }
  if (sellType.value === `EUR` && chargeType.value === `PLN`) {
    chargeValue.value = (+sellValue.value * 4.45).toFixed(2);
  }
  if (sellType.value === `EUR` && chargeType.value === `USD`) {
    chargeValue.value = (+sellValue.value * 1.11).toFixed(2);
  }
  if (sellType.value === `EUR` && chargeType.value === `GBP`) {
    chargeValue.value = (+sellValue.value * 0.86).toFixed(2);
  }
  if (sellType.value === `USD` && chargeType.value === `PLN`) {
    chargeValue.value = (+sellValue.value * 4.02).toFixed(2);
  }
  if (sellType.value === `USD` && chargeType.value === `EUR`) {
    chargeValue.value = (+sellValue.value * 0.90).toFixed(2);
  }
  if (sellType.value === `USD` && chargeType.value === `GBP`) {
    chargeValue.value = (+sellValue.value * 0.78).toFixed(2);
  }
  if (sellType.value === `GBP` && chargeType.value === `PLN`) {
    chargeValue.value = (+sellValue.value * 5.16).toFixed(2);
  }
  if (sellType.value === `GBP` && chargeType.value === `EUR`) {
    chargeValue.value = (+sellValue.value * 1.16).toFixed(2);
  }
  if (sellType.value === `GBP` && chargeType.value === `USD`) {
    chargeValue.value = (+sellValue.value * 1.28).toFixed(2);
  }
});

chargeValue.addEventListener("input", () => {
  if (sellType.value === chargeType.value) {
    sellValue.value = (+chargeValue.value).toFixed(2);
  }
  if (sellType.value === `PLN` && chargeType.value === `EUR`) {
    sellValue.value = (+chargeValue.value / 0.22).toFixed(2);
  }
  if (sellType.value === `PLN` && chargeType.value === `USD`) {
    sellValue.value = (+chargeValue.value / 0.25).toFixed(2);
  }
  if (sellType.value === `PLN` && chargeType.value === `GBP`) {
    sellValue.value = (+chargeValue.value / 0.19).toFixed(2);
  }
  if (sellType.value === `EUR` && chargeType.value === `PLN`) {
    sellValue.value = (+chargeValue.value / 4.45).toFixed(2);
  }
  if (sellType.value === `EUR` && chargeType.value === `USD`) {
    sellValue.value = (+chargeValue.value / 1.11).toFixed(2);
  }
  if (sellType.value === `EUR` && chargeType.value === `GBP`) {
    sellValue.value = (+chargeValue.value / 0.86).toFixed(2);
  }
  if (sellType.value === `USD` && chargeType.value === `PLN`) {
    sellValue.value = (+chargeValue.value / 4.02).toFixed(2);
  }
  if (sellType.value === `USD` && chargeType.value === `EUR`) {
    sellValue.value = (+chargeValue.value / 0.90).toFixed(2);
  }
  if (sellType.value === `USD` && chargeType.value === `GBP`) {
    sellValue.value = (+chargeValue.value / 0.78).toFixed(2);
  }
  if (sellType.value === `GBP` && chargeType.value === `PLN`) {
    sellValue.value = (+chargeValue.value / 5.16).toFixed(2);
  }
  if (sellType.value === `GBP` && chargeType.value === `EUR`) {
    sellValue.value = (+chargeValue.value / 1.16).toFixed(2);
  }
  if (sellType.value === `GBP` && chargeType.value === `USD`) {
    sellValue.value = (+chargeValue.value / 1.28).toFixed(2);
  }
});
