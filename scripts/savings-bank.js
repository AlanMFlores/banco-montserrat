/* ----- ----- Caja de Ahorro ----- ----- */

/* ----- Buttons ----- */
const savingsBankBtn = document.querySelectorAll('.savings-bank-btn');
const closeModal = document.querySelector('.sb-modal-close')
const requestSavingsBank = document.querySelector('.sb-modal-btn');

/* ----- Elements ----- */
const modal = document.querySelector('.sb-modal');
const modalOverlay = document.querySelector('.modal-overlay')

/* ----- Inputs ----- */

const modalName = document.getElementById('sb-modal-name');
const modalLastName = document.getElementById('sb-modal-lastname');
const modalNumber = document.getElementById('sb-modal-dni');
const modalTelNumber = document.getElementById('sb-modal-telephone');
const modalEmail = document.getElementById('sb-modal-email');


savingsBankBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show-modal')
        modalOverlay.classList.add('show-modal')
    })
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal')
    modalOverlay.classList.remove('show-modal')
})

requestSavingsBank.addEventListener('click', (e) => {
    e.preventDefault()



    modal.classList.remove('show-modal')
    modalOverlay.classList.remove('show-modal')

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
    })

})