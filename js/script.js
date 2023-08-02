console.log("Hello world!");

let ratePLNEUR = 0.22;
let ratePLNUSD = 0.25;
let ratePLNGBP = 0.19;
let rateEURPLN = 4.45;
let rateEURUSD = 1.11;
let rateEURGBP = 0.86;
let rateUSDPLN = 4.02;
let rateUSDEUR = 0.90;
let rateUSDGBP = 0.78;
let rateGBPPLN = 5.16;
let rateGBPEUR = 1.16;
let rateGBPUSD = 1.28;

let inputSell = document.querySelector(".js-inputSell");
let inputCharge = document.querySelector(".js-inputCharge");
let selectSell = document.querySelector(".js-selectSell");
let selectCharge = document.querySelector(".js-selectCharge");

function setExchangeRate() {
  let exchange = selectSell.value + selectCharge.value;
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
  let sellValue = +inputSell.value;
  inputCharge.value = (sellValue * exchangeRate).toFixed(2);
};

function charge() {
  setExchangeRate();
  let chargeValue = +inputCharge.value;
  inputSell.value = (chargeValue / exchangeRate).toFixed(2);
};

function setInputIndicate() {
  if (document.activeElement === inputSell) { window.inputIndicate = 'sell' };
  if (document.activeElement === inputCharge) { window.inputIndicate = 'charge' };
};

inputSell.addEventListener("input", () => {
  sell();
  setInputIndicate();
});

inputCharge.addEventListener("input", () => {
  charge();
  setInputIndicate();
});

selectSell.addEventListener("change", () => {
  inputIndicate === 'sell' ? sell() : charge();
});

selectCharge.addEventListener("change", () => {
  inputIndicate === 'sell' ? sell() : charge();
});