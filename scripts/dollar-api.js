const fetchDolarValue = async () => {
    const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    return await response.json();
}

const getDolarValue = (valueType) => {
    return async () => {
        const dolarValue = await fetchDolarValue();
        return dolarValue[0].casa[valueType];
    }
}

const getPurchaseDollar = getDolarValue('compra');
const getSaleDollar = getDolarValue('venta');

getPurchaseDollar().then(val => {
    dolarPricePurchase.innerHTML = `Compra: ${val} |`
});

getSaleDollar().then(val => {
    dolarPriceSale.innerHTML = `Venta: ${val}`
});

const dolarPricePurchase =  document.querySelector('.dolar-price--purchase');
const dolarPriceSale =  document.querySelector('.dolar-price--sale');
