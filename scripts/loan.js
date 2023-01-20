const loanRequest = document.querySelector('.form-loan-request');
const loanAmount = document.getElementById('loan-amount');
const loanForm = document.getElementById('loan-form');
const loanAmountSpecs = document.querySelector('.loan-amount-specs');
const feeButtons = document.querySelectorAll('.fees-btn');
const modal = document.querySelector('.sb-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const feeValue = document.querySelector('.fee-value');
const paymentAmount = document.querySelector('.payment-amount');
const inputs = {
    modalName: document.getElementById('sb-modal-name'),
    modalLastName: document.getElementById('sb-modal-lastname'),
    modalNumber: document.getElementById('sb-modal-dni'),
    modalTelNumber: document.getElementById('sb-modal-telephone'),
    modalEmail: document.getElementById('sb-modal-email')
  };

const loanFormula = (loanAmount, feeQuantity) => (loanAmount * 0.154) / (1 - (Math.pow(1.154, -feeQuantity)));


loanAmount.addEventListener('input', () => {
    if (loanAmount.value < 1000 || loanAmount.value > 1000000) {
        loanAmountSpecs.innerHTML = 'El monto del préstamo debe ser superior a $1.000 y menor a $1.000.000';
        loanAmountSpecs.style.color = 'red';
        feeValue.innerHTML = `-`;
        paymentAmount.innerHTML = `-`;
    } else {
        loanAmountSpecs.innerHTML = '¡Tenés $1.000.000 disponibles!';
        loanAmountSpecs.style.color = '#E16428';
    }

    feeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            feeButtons.forEach(btn => btn.classList.contains('fee-selected') && btn.classList.remove('fee-selected'));
            e.target.classList.toggle('fee-selected');

            if (loanAmount.value < 1000 || loanAmount.value > 1000000) {
                feeValue.innerHTML = `-`;
                paymentAmount.innerHTML = `-`;

            } else {
                const feeAmount = loanFormula(loanAmount.value, e.target.innerHTML);
                const totalPaymentAmount = feeAmount * e.target.innerHTML;
                feeValue.innerHTML = `$${feeAmount.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
                paymentAmount.innerHTML = `$${totalPaymentAmount.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            }
        });
    });
})

loanRequest.addEventListener('click', (e) => {
    e.preventDefault();

    if (loanAmount.value < 1000 || loanAmount.value > 1000000) {
        loanRequest.setAttribute('disabled');
    }

    modal.classList.add('show-modal');
    modalOverlay.classList.add('show-modal');

});

modal.querySelector('.sb-modal-close').addEventListener('click', () => {
    modal.classList.remove('show-modal');
    modalOverlay.classList.remove('show-modal');
});

modal.querySelector('.sb-modal-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const alertError = document.querySelector('.alert-error');
    let formValid = true;

    function checkInputs() {
        let isValid = true;
        for (let input in inputs) {
            if (!inputs[input].value) {
                isValid = false;
            }
        }
        if (isValid) {
            alertError.style.display = 'none';
        }
    }

    for (let input in inputs) {
        if (!inputs[input].value) {
            inputs[input].classList.add('input-error');
            formValid = false;
        } else {
            inputs[input].classList.remove('input-error');
            alertError.style.display = 'none';
        }
    }

    for (let input in inputs) {
        inputs[input].addEventListener('input', () => {
            if (inputs[input].value) {
                inputs[input].classList.remove('input-error');
                checkInputs();
            }
        });
    }

    if (!formValid) {
        alertError.textContent = 'Debes completar todos los campos';
        alertError.style.display = 'block';
        return;
    }

    modal.classList.remove('show-modal');
    modalOverlay.classList.remove('show-modal');

    loanForm.reset();

    Swal.fire({
        html: `<div class="modal-mini">
            <h2 class="modal-mini-title">Solicitud Enviada</h2>
            <p class="modal-mini-description">Nos estaremos comunicando con vos por medio de los datos de contacto, para brindarte más detalles de tu préstamo.</p>
        </div>`,
        showConfirmButton: true,
        confirmButtonText: 'Volver al Simulador',
        customClass: {
            confirmButton: 'main-btn'
        },
        buttonsStyling: false,
        padding: '16px'
    });
});
