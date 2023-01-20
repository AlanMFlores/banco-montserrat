const exchangeForm = document.querySelector('.form');
const dollarSellPrice = document.querySelector('.dollar-sell');
const conversionAmount = document.getElementById('conversion-amount');
const finalValue = document.getElementById('final-value');
const alertError = document.querySelector('.alert-error')

const getDolarValue = async () => {
    const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
    const dolarValue = await response.json();
    const oficialDollar = dolarValue[0].casa.venta;
    dollarSellPrice.innerHTML = oficialDollar;

    conversionAmount.addEventListener('keyup', e => {
        let amount = e.target.value;
        finalValue.value = (amount / (parseInt(oficialDollar) * 1.65)).toFixed(2);
    });

    finalValue.addEventListener('keyup', e => {
        let dollarAmount = e.target.value;
        conversionAmount.value = (dollarAmount * (parseInt(oficialDollar) * 1.65)).toFixed(2);
    });

    document.querySelector('.form-calculation').addEventListener('click', e => {
        e.preventDefault()

        if(!conversionAmount.value) {
            alertError.innerHTML = 'Debes ingresar un valor en los campos.'
            alertError.style.color = 'red';
        } else {
            e.preventDefault();
            Swal.fire({
                html: `
                    <div class="modal-mini">
                        <h2 class="modal-mini-title">Conversión</h2>
                        <p class="modal-mini-description">Para realizar una conversión de pesos argentinos a dólares, debes iniciar sesión con tu usuario y contraseña.</p>
                    </div>
                `,
                showConfirmButton: true,
                confirmButtonText: 'Volver al Conversor',
                customClass: {
                    confirmButton: 'main-btn'
                },
                buttonsStyling: false,
                padding: '16px'
            });
            alertError.style.display = 'none';
        }
    });
};

getDolarValue();



document.querySelector('.form-clear').addEventListener('click', e => {
    e.preventDefault();
    exchangeForm.reset();
});
