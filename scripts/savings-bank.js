const savingsBankBtn = document.querySelectorAll('.savings-bank-btn');
const savingsBankForm = document.getElementById('savings-bank-form')
const closeModal = document.querySelector('.sb-modal-close');
const requestSavingsBank = document.querySelector('.sb-modal-btn');
const modal = document.querySelector('.sb-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const inputs = {
  modalName: document.getElementById('sb-modal-name'),
  modalLastName: document.getElementById('sb-modal-lastname'),
  modalNumber: document.getElementById('sb-modal-dni'),
  modalTelNumber: document.getElementById('sb-modal-telephone'),
  modalEmail: document.getElementById('sb-modal-email')
};

savingsBankBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show-modal');
        modalOverlay.classList.add('show-modal');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    modalOverlay.classList.remove('show-modal');
});

requestSavingsBank.addEventListener('click', (e) => {
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

    savingsBankForm.reset()

  Swal.fire({
    html: `
    <div class="modal-mini">
      <h2 class="modal-mini-title">Solicitud Enviada</h2>
      <p class="modal-mini-description">Nos estaremos comunicando con vos por medio de los datos de contacto, para brindarte más detalles de tu caja de ahorro gratuita.</p>
    </div> `,
    showConfirmButton: true,
    confirmButtonText: 'Volver al Sitio',
    customClass: {
      confirmButton: 'main-btn'
    },
    buttonsStyling: false,
    padding: '16px'
  });
});
