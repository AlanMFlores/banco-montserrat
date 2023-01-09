/* ----- ----- Préstamos Personales ----- ----- */

/* ----- Buttons ----- */

const loanRequest = document.querySelector('.form-loan-request');
const loanAmount = document.getElementById('loan-amount');
const feeButtons = document.querySelectorAll('.fees-btn');
const closeModal = document.querySelector('.sb-modal-close')
const modalLoanRequest = document.querySelector('.sb-modal-btn')

/* ----- Elements ----- */
const modal = document.querySelector('.sb-modal');
const modalOverlay = document.querySelector('.modal-overlay')
const feeValue = document.querySelector('.fee-value');
const paymentAmount = document.querySelector('.payment-amount');

/* ----- Fórmula Préstamo ----- */

const loanFormula = (loanAmount, feeQuantity) => {
    const fee = (loanAmount * 0.154) / (1 - (Math.pow(1.154, -feeQuantity)))
    return fee;
}

feeButtons.forEach(button => {
    
    button.addEventListener('click', (e) => {
        e.preventDefault();

        feeButtons.forEach(button => {
            button.classList.contains('fee-selected') && button.classList.remove('fee-selected')
        })
        
        e.target.classList.toggle('fee-selected');
        
        let loanAmountCalc = loanAmount.value;
        let feeQuantityCalc = e.target.innerHTML;

        let feeAmount = loanFormula(loanAmountCalc, feeQuantityCalc);

        let totalPaymentAmount = feeAmount * feeQuantityCalc;

        feeValue.innerHTML = `$${feeAmount.toFixed(2)}`
        paymentAmount.innerHTML = `$${totalPaymentAmount.toFixed(2)}`

    })
})

loanRequest.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add('show-modal');
    modalOverlay.classList.add('show-modal');
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    modalOverlay.classList.remove('show-modal');
})

modalLoanRequest.addEventListener('click', (e) => {
    e.preventDefault()

    modal.classList.remove('show-modal');
    modalOverlay.classList.remove('show-modal');
    
    Swal.fire({
        html: `
        <div class="modal-mini">
            <h2 class="modal-mini-title">Solicitud Enviada</h2>
            <p class="modal-mini-description">Nos estaremos comunicando con vos por medio de los datos de contacto, para brindarte más detalles de tu préstamo.</p>
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