console.log("Hello world!");

let ratePLNEUR = 0.23;
let ratePLNUSD = 0.25;
let ratePLNGBP = 0.19;
let rateEURPLN = 4.44;
let rateEURUSD = 1.10;
let rateEURGBP = 0.86;
let rateUSDPLN = 4.05;
let rateUSDEUR = 0.91;
let rateUSDGBP = 0.78;
let rateGBPPLN = 5.17;
let rateGBPEUR = 1.16;
let rateGBPUSD = 1.28;

let inputSellElement = document.querySelector(".js-inputSell");
let inputChargeElement = document.querySelector(".js-inputCharge");
let selectSellElement = document.querySelector(".js-selectSell");
let selectChargeElement = document.querySelector(".js-selectCharge");

function setExchangeRate() {
  let exchange = selectSellElement.value + selectChargeElement.value;
  switch (exchange) {
    case 'PLNEUR': window.exchangeRate = ratePLNEUR;
      break;
    case 'PLNUSD': window.exchangeRate = ratePLNUSD;
      break;
    case 'PLNGBP': window.exchangeRate = ratePLNGBP;
      break;
    case 'EURPLN': window.exchangeRate = rateEURPLN;
      break;
    case 'EURUSD': window.exchangeRate = rateEURUSD;
      break;
    case 'EURGBP': window.exchangeRate = rateEURGBP;
      break;
    case 'USDPLN': window.exchangeRate = rateUSDPLN;
      break;
    case 'USDEUR': window.exchangeRate = rateUSDEUR;
      break;
    case 'USDGBP': window.exchangeRate = rateUSDGBP;
      break;
    case 'GBPPLN': window.exchangeRate = rateGBPPLN;
      break;
    case 'GBPEUR': window.exchangeRate = rateGBPEUR;
      break;
    case 'GBPUSD': window.exchangeRate = rateGBPUSD;
      break;
    default: window.exchangeRate = 1;
  }
};

function sell() {
  setExchangeRate();
  let sellValue = +inputSellElement.value;
  inputChargeElement.value = (sellValue * exchangeRate).toFixed(2);
};

function charge() {
  setExchangeRate();
  let chargeValue = +inputChargeElement.value;
  inputSellElement.value = (chargeValue / exchangeRate).toFixed(2);
};

function setInputIndicate() {
  if (document.activeElement === inputSellElement) { window.inputIndicate = 'sell' };
  if (document.activeElement === inputChargeElement) { window.inputIndicate = 'charge' };
};

inputSellElement.addEventListener("input", () => {
  sell();
  setInputIndicate();
});

inputChargeElement.addEventListener("input", () => {
  charge();
  setInputIndicate();
});

selectSellElement.addEventListener("change", () => {
  inputIndicate === 'sell' ? sell() : charge();
});

selectChargeElement.addEventListener("change", () => {
  inputIndicate === 'sell' ? sell() : charge();
});