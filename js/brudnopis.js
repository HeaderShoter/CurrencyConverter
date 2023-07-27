currencyCharge.addEventListener("input", () => {
  if (currencySellType.value === `PLN` && currencyChargeType.value === `EUR`) {
    currencySell.value = (+currencyCharge.value * 0.22).toFixed(2);
  }
  if (currencySellType.value === `PLN` && currencyChargeType.value === `USD`) {
    currencySell.value = (+currencyCharge.value * 0.25).toFixed(2);
  }
  if (currencySellType.value === `PLN` && currencyChargeType.value === `GBP`) {
    currencySell.value = (+currencyCharge.value * 0.19).toFixed(2);
  }
  if (currencySellType.value === `PLN` && currencyChargeType.value === `PLN`) {
    currencySell.value = (+currencyCharge.value).toFixed(2);
  }
  if (currencySellType.value === `EUR` && currencyChargeType.value === `PLN`) {
    currencySell.value = (+currencyCharge.value * 4.45).toFixed(2);
  }
  if (currencySellType.value === `EUR` && currencyChargeType.value === `USD`) {
    currencySell.value = (+currencyCharge.value * 1.11).toFixed(2);
  }
  if (currencySellType.value === `EUR` && currencyChargeType.value === `GBP`) {
    currencySell.value = (+currencyCharge.value * 0.86).toFixed(2);
  }
  if (currencySellType.value === `EUR` && currencyChargeType.value === `EUR`) {
    currencySell.value = (+currencyCharge.value).toFixed(2);
  }
  if (currencySellType.value === `USD` && currencyChargeType.value === `PLN`) {
    currencySell.value = (+currencyCharge.value * 4.02).toFixed(2);
  }
  if (currencySellType.value === `USD` && currencyChargeType.value === `EUR`) {
    currencySell.value = (+currencyCharge.value * 0.90).toFixed(2);
  }
  if (currencySellType.value === `USD` && currencyChargeType.value === `GBP`) {
    currencySell.value = (+currencyCharge.value * 0.78).toFixed(2);
  }
  if (currencySellType.value === `USD` && currencyChargeType.value === `USD`) {
    currencySell.value = (+currencyCharge.value).toFixed(2);
  }
  if (currencySellType.value === `GBP` && currencyChargeType.value === `PLN`) {
    currencySell.value = (+currencyCharge.value * 5.16).toFixed(2);
  }
  if (currencySellType.value === `GBP` && currencyChargeType.value === `EUR`) {
    currencySell.value = (+currencyCharge.value * 1.16).toFixed(2);
  }
  if (currencySellType.value === `GBP` && currencyChargeType.value === `USD`) {
    currencySell.value = (+currencyCharge.value * 1.28).toFixed(2);
  }
  if (currencySellType.value === `GBP` && currencyChargeType.value === `GBP`) {
    currencySell.value = (+currencyCharge.value).toFixed(2);
  }
});