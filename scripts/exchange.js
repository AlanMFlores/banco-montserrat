/* ----- ----- Moneda Extranjera ----- ----- */

/* ----- Section ----- */

const exchangeForm = document.querySelector('.form');

/* ----- Buttons ----- */
const conversionBtn = document.querySelector('.form-calculation');
const clearFormBtn = document.querySelector('.form-clear');


/* ----- Inputs ----- */
const conversionAmount = document.getElementById('conversion-amount');
const finalValue = document.getElementById('final-value');

/* ----- Valor del Dolar ----- */
const dolarValue = 298.65;

const conversionFormula = (amount) => {
    const valueConverted = amount / dolarValue;
    return valueConverted;
}

conversionAmount.addEventListener('keyup', (e) => {
    let amount = e.target.value;
    let convertedAmount = conversionFormula(amount);
    finalValue.value = convertedAmount.toFixed(2);
})

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
