console.log("Hello world!");
{
  const inputSellElement = document.querySelector(".js-inputSell");
  const inputChargeElement = document.querySelector(".js-inputCharge");
  const selectSellElement = document.querySelector(".js-selectSell");
  const selectChargeElement = document.querySelector(".js-selectCharge");

  const setExchangeRate = () => {
    const ratePLNEUR = 0.23;
    const ratePLNUSD = 0.25;
    const ratePLNGBP = 0.20;
    const rateEURPLN = 4.33;
    const rateEURUSD = 1.09;
    const rateEURGBP = 0.86;
    const rateUSDPLN = 3.97;
    const rateUSDEUR = 0.92;
    const rateUSDGBP = 0.79;
    const rateGBPPLN = 5.05;
    const rateGBPEUR = 1.17;
    const rateGBPUSD = 1.27;
    const exchange = selectSellElement.value + selectChargeElement.value;
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

  const sell = () => {
    setExchangeRate();
    const sellValue = +inputSellElement.value;
    inputChargeElement.value = (sellValue * exchangeRate).toFixed(2);
  };

  const charge = () => {
    setExchangeRate();
    const chargeValue = +inputChargeElement.value;
    inputSellElement.value = (chargeValue / exchangeRate).toFixed(2);
  };

  const setInputIndicate = () => {
    if (document.activeElement === inputSellElement) { window.inputIndicate = 'sell' };
    if (document.activeElement === inputChargeElement) { window.inputIndicate = 'charge' };
  };

  inputSellElement.addEventListener("input", () => {
    sell(), setInputIndicate();
  });

  inputChargeElement.addEventListener("input", () => {
    charge(), setInputIndicate();
  });

  selectSellElement.addEventListener("change", () => {
    inputIndicate === 'sell' ? sell() : charge();
  });

  selectChargeElement.addEventListener("change", () => {
    inputIndicate === 'sell' ? sell() : charge();
  });
}