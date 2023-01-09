/* ----- ----- Plazo Fijo ----- ----- */

/* ----- Sections ----- */
const form = document.querySelector('.form');
const fixedTermResult = document.querySelector('.fixed-term-result')

/* ----- Inputs ----- */
const capital = document.getElementById('capital-amount');
const termDays = document.getElementById('term-days');

/* ----- Buttons ----- */
const calculate = document.querySelector('.form-calculation');
const clear = document.querySelector('.form-clear');
const constituteFixedTerm = document.querySelector('.constitute-fixed-term');

/* ----- Results ----- */

const capitalDisplay = document.querySelector('.capital-result')
const termDaysDisplay = document.querySelector('.term-days-result')
const earnedInterestDisplay = document.querySelector('.earned-interest-result');
const totalAmountDisplay = document.querySelector('.total-amount-result')

/* ----- Operations ----- */

const interestRate = 0.208;

const getEarnedInterest = (capital, termDays) => {
    const earnedInterest = (capital * (interestRate * termDays)) / 100;
    return earnedInterest;
} 

const getTotalAmount = (capital, earnedInterest) => {
    const totalAmount = Number(capital) + Number(earnedInterest);
    return totalAmount;
}

const simulateFixedTerm = () => {
    let capitalResult = capital.value.toLocaleString('en');
    let termDaysResult = termDays.value;
    let earnedInterest = getEarnedInterest(capitalResult, termDaysResult);
    let totalAmount = getTotalAmount(capitalResult, earnedInterest);

    capitalDisplay.innerHTML = `$${capitalResult}`;
    termDaysDisplay.innerHTML = `${termDaysResult} días`;
    earnedInterestDisplay.innerHTML = `$${earnedInterest.toFixed(2)}`;
    totalAmountDisplay.innerHTML = `$${totalAmount.toFixed(2)}`;
}

const clearFixedTerm = () => {
    form.reset()
    capitalDisplay.innerHTML = '-';
    termDaysDisplay.innerHTML = '-';
    earnedInterestDisplay.innerHTML = '-';
    totalAmountDisplay.innerHTML = '-';
}


calculate.addEventListener('click', (e) => {
    e.preventDefault()

    simulateFixedTerm();

    fixedTermResult.style.display = 'block'

})

clear.addEventListener('click', (e) => {
    e.preventDefault()

    clearFixedTerm()

    fixedTermResult.style.display = 'none';
})

constituteFixedTerm.addEventListener('click', () => {
    Swal.fire({
        html: `
        <div class="modal-mini">
            <h2 class="modal-mini-title">Constituir Plazo Fijo</h2>
            <p class="modal-mini-description">Para constituir un plazo fijo en pesos en tu cuenta, debes iniciar sesión con tu usuario y contraseña.</p>
        </div> `,
        showConfirmButton: true,
        confirmButtonText: 'Volver al Simulador',
        customClass: {
            confirmButton: 'main-btn'
        },
        buttonsStyling: false,
        padding: '16px'
    })
})