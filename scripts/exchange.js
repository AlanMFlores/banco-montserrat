/* ----- ----- Moneda Extranjera ----- ----- */

/* ----- Dolar API ----- */

const getDolarValue = async () => {
    const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolarValue = await response.json();
    const oficialDollar = dolarValue[0].casa.venta;
    return oficialDollar
}

getDolarValue()
    .then(val => {
        dollarSellPrice.innerHTML = val

        const conversionFormula = (amount) => {
            const valueConverted = amount / (parseInt(val) * 1.65);
            return valueConverted;
        }

        conversionAmount.addEventListener('keyup', (e) => {
            let amount = e.target.value;
            let convertedAmount = conversionFormula(amount);
            finalValue.value = convertedAmount.toFixed(2);
        })
    }
)

/* ----- Section ----- */

const exchangeForm = document.querySelector('.form');
const dollarSellPrice = document.querySelector('.dollar-sell')

/* ----- Buttons ----- */
const conversionBtn = document.querySelector('.form-calculation');
const clearFormBtn = document.querySelector('.form-clear');


/* ----- Inputs ----- */
const conversionAmount = document.getElementById('conversion-amount');
const finalValue = document.getElementById('final-value');

/* ----- Valor del Dolar ----- */

conversionBtn.addEventListener('click', (e) => {
    e.preventDefault()
    Swal.fire({
        html: `
        <div class="modal-mini">
            <h2 class="modal-mini-title">Conversión</h2>
            <p class="modal-mini-description">Para realizar una conversión de pesos argentinos a dólares, debes iniciar sesión con tu usuario y contraseña.</p>
        </div> `,
        showConfirmButton: true,
        confirmButtonText: 'Volver al Conversor',
        customClass: {
            confirmButton: 'main-btn'
        },
        buttonsStyling: false,
        padding: '16px'
    })
})

clearFormBtn.addEventListener('click', (e) => {
    e.preventDefault()
    exchangeForm.reset();
})

