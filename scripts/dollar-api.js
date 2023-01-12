/* ----- Dolar API ----- */

const getPurchaseDollar = async () => {
    const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolarValue = await response.json();
    const oficialPurchaseDollar = dolarValue[0].casa.compra;
    return oficialPurchaseDollar;
}

const getSaleDollar = async () => {
    const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolarValue = await response.json();
    const oficialSaleDollar = dolarValue[0].casa.venta;
    return oficialSaleDollar;
}

getPurchaseDollar().then(
    val => dolarPricePurchase.innerHTML = `Compra: ${val} |`
)

getSaleDollar().then(
    val => dolarPriceSale.innerHTML = `Venta: ${val}`
)

/* ----- Dolar Prices ----- */

const dolarPricePurchase =  document.querySelector('.dolar-price--purchase');
const dolarPriceSale =  document.querySelector('.dolar-price--sale');

