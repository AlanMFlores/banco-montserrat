const interestRate = 0.208;

const getEarnedInterest = (capital, termDays) => (capital * (interestRate * termDays)) / 100;

const getTotalAmount = (capital, earnedInterest) => Number(capital) + Number(earnedInterest);

document.querySelector('.form-calculation').addEventListener('click', (e) => {
    e.preventDefault();
    const capital = document.getElementById('capital-amount').value;
    const termDays = document.getElementById('term-days').value;
    const capitalAmountSpecs = document.querySelector('.capital-amount-specs');
    const termDaysSpecs = document.querySelector('.term-days-specs');
    const earnedInterest = getEarnedInterest(capital, termDays);
    const totalAmount = getTotalAmount(capital, earnedInterest);
    let showResults = true;

    if(capital < 1000 || capital > 10000000) {
        capitalAmountSpecs.innerHTML = 'El monto debe ser mayor a $1.000 y menor a $10.000.000';
        capitalAmountSpecs.style.color = 'red'
        showResults = false;
    } else {
        capitalAmountSpecs.innerHTML = '(Monto mínimo $1000 - máximo: $10.000.000)'
        capitalAmountSpecs.style.color = '#363333'
    }

    if(termDays < 30 || termDays > 365) {
        termDaysSpecs.innerHTML = 'Los días deben ser mayores a 30 y menores a 365'
        termDaysSpecs.style.color = 'red'
        showResults = false;
    } else {
        termDaysSpecs.innerHTML = '(Mínimo 30 días - máximo 365 días)'
        termDaysSpecs.style.color = '#363333'
    }

    if(showResults) {
        document.querySelector('.capital-result').innerHTML = `$${capital.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        document.querySelector('.term-days-result').innerHTML = `${termDays} días`;
        document.querySelector('.earned-interest-result').innerHTML = `$${earnedInterest.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        document.querySelector('.total-amount-result').innerHTML = `$${totalAmount.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        document.querySelector('.fixed-term-result').style.display = 'block';
    }

});

document.querySelector('.form-clear').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.form').reset();
    document.querySelector('.capital-result').innerHTML = '-';
    document.querySelector('.term-days-result').innerHTML = '-';
    document.querySelector('.earned-interest-result').innerHTML = '-';
    document.querySelector('.total-amount-result').innerHTML = '-';
    document.querySelector('.fixed-term-result').style.display = 'none';
});

document.querySelector('.constitute-fixed-term').addEventListener('click', () => {
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


// const interestRate = 0.208;

// const getEarnedInterest = (capital, termDays) => (capital * (interestRate * termDays)) / 100;

// const getTotalAmount = (capital, earnedInterest) => Number(capital) + Number(earnedInterest);

// document.querySelector('.form-calculation').addEventListener('click', (e) => {
//     e.preventDefault();
//     const capital = document.getElementById('capital-amount').value;
//     const termDays = document.getElementById('term-days').value;
//     const earnedInterest = getEarnedInterest(capital, termDays);
//     const totalAmount = getTotalAmount(capital, earnedInterest);
//     document.querySelector('.capital-result').innerHTML = `$${capital.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
//     document.querySelector('.term-days-result').innerHTML = `${termDays} días`;
//     document.querySelector('.earned-interest-result').innerHTML = `$${earnedInterest.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
//     document.querySelector('.total-amount-result').innerHTML = `$${totalAmount.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
//     document.querySelector('.fixed-term-result').style.display = 'block';
// });

// document.querySelector('.form-clear').addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('.form').reset();
//     document.querySelector('.capital-result').innerHTML = '-';
//     document.querySelector('.term-days-result').innerHTML = '-';
//     document.querySelector('.earned-interest-result').innerHTML = '-';
//     document.querySelector('.total-amount-result').innerHTML = '-';
//     document.querySelector('.fixed-term-result').style.display = 'none';
// });

// document.querySelector('.constitute-fixed-term').addEventListener('click', () => {
//     Swal.fire({
//         html: `
//         <div class="modal-mini">
//             <h2 class="modal-mini-title">Constituir Plazo Fijo</h2>
//             <p class="modal-mini-description">Para constituir un plazo fijo en pesos en tu cuenta, debes iniciar sesión con tu usuario y contraseña.</p>
//         </div> `,
//         showConfirmButton: true,
//         confirmButtonText: 'Volver al Simulador',
//         customClass: {
//             confirmButton: 'main-btn'
//         },
//         buttonsStyling: false,
//         padding: '16px'
//     })
// })