fetch(
  "https://api.currencyfreaks.com/latest?apikey=61e4096229e8484498e538185d33e9dc"
)
  .then((result) => {
    return result.json();
  })
  .then((c) => {
    let amount = document.querySelector(".amount");
    let egprice = document.querySelector(".egp span");
    let sarprice = document.querySelector(".sar span");
    egprice.innerHTML = Math.round(amount.innerHTML * c.rates["EGP"]);
    sarprice.innerHTML = Math.round(amount.innerHTML * c.rates["SAR"]);
  });
