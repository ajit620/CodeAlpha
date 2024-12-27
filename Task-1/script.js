function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');

    if (!birthdate) {
        result.innerHTML = '<p>Please select a valid birthdate!</p>';
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    result.innerHTML = `<p>Your age is ${age} years.</p>`;

    const funFact = document.getElementById('fun-fact');
    funFact.innerHTML = `<p>Did you know? In ${birthDateObj.getFullYear()}, amazing things happened!</p>`;
}

function exportCard() {
    const container = document.querySelector('.calculator-container');
    html2canvas(container).then(canvas => {
        const link = document.createElement('a');
        link.download = 'age-calculator.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

function shareDetails() {
    if (navigator.share) {
        navigator.share({
            title: 'Pixel Age Calculator',
            text: 'Check out my age calculation!',
            url: window.location.href
        }).then(() => {
            console.log('Shared successfully!');
        }).catch(error => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Sharing is not supported on this device.');
    }
}
