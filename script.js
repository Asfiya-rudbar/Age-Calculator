function getDate() {
    const dobInput = document.getElementById('InputDoB').value;
    const currentDateInput = document.getElementById('curdate').value;

    if (!dobInput || !currentDateInput) {
        alert('Enter both Date of Birth and Current Date.');
        return;
    }

    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    
    document.getElementById('Age').textContent = `Your age is ${age} years.`;
}