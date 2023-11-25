function convertCurrency() {
    const usdInput = document.getElementById('usdInputfield');
    const cadInput = document.getElementById('cadInputfield');
    const usdCurrency = document.getElementById('usdCurrencydropdown').value;
    const cadCurrency = document.getElementById('cadCurrencydropdown').value;
    let calresult;
    if (usdCurrency === 'usd' && usdInput.value) {
        calresult = usdInput.value * 1.75; // consider 1 USD = 1.75 CAD 
        cadInput.value = calresult;
    } else if( cadCurrency === 'cad' && cadInput.value) {
        calresult = cadInput.value / 1.75; // consider 1 USD = 1.75 CAD
        usdInput.value = calresult;
    }


}
