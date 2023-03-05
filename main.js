fetch("https://api.currencyfreaks.com/latest?apikey=5b29e5aee3e94a8f943ceb48743804da")
.then((result) => {
    let mydata = result.json();
    return mydata;
})
.then((currency) => {
    let amount = document.querySelector(".amount");
    let egp = document.querySelector(".egp span");
    let sar = document.querySelector(".sar span");

    let riyal = (amount.innerHTML * currency.rates.SAR).toFixed(3);
    let pound = (amount.innerHTML * currency.rates.EGP).toFixed(3);
    sar.innerHTML = riyal;
    egp.innerHTML = pound;
});
