console.log("Hello world!");

let PLNEUR = 0.22;
let PLNUSD = 0.25;
let PLNGBP = 0.19;
let EURPLN = 4.45;
let EURUSD = 1.11;
let EURGBP = 0.86;
let USDPLN = 4.02;
let USDEUR = 0.90;
let USDGBP = 0.78;
let GBPPLN = 5.16;
let GBPEUR = 1.16;
let GBPUSD = 1.28;

let inputSell = document.querySelector(".js-inputSell");
let inputCharge = document.querySelector(".js-inputCharge");
let selectSell = document.querySelector(".js-selectSell");
let selectCharge = document.querySelector(".js-selectCharge");

function setExchangeRate() {
  let exchange = selectSell.value + selectCharge.value;
  switch (exchange) {
    case 'PLNEUR': window.exchangeRate = PLNEUR;
      break;
    case 'PLNUSD': window.exchangeRate = PLNUSD;
      break;
    case 'PLNGBP': window.exchangeRate = PLNGBP;
      break;
    case 'EURPLN': window.exchangeRate = EURPLN;
      break;
    case 'EURUSD': window.exchangeRate = EURUSD;
      break;
    case 'EURGBP': window.exchangeRate = EURGBP;
      break;
    case 'USDPLN': window.exchangeRate = USDPLN;
      break;
    case 'USDEUR': window.exchangeRate = USDEUR;
      break;
    case 'USDGBP': window.exchangeRate = USDGBP;
      break;
    case 'GBPPLN': window.exchangeRate = GBPPLN;
      break;
    case 'GBPEUR': window.exchangeRate = GBPEUR;
      break;
    case 'GBPUSD': window.exchangeRate = GBPUSD;
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

function inputActive() {
  if (document.activeElement === inputSell) { window.inputFocus = 'sell' };
  if (document.activeElement === inputCharge) { window.inputFocus = 'charge' };
};

inputSell.addEventListener("input", () => {
  sell();
  inputActive();
});

inputCharge.addEventListener("input", () => {
  charge();
  inputActive();
});

selectSell.addEventListener("change", () => {
  if (inputFocus === 'sell') { sell(); }
  if (inputFocus === 'charge') { charge(); }
});

selectCharge.addEventListener("change", () => {
  if (inputFocus === 'sell') { sell(); }
  if (inputFocus === 'charge') { charge(); }
});