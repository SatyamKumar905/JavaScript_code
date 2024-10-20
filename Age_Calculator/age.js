function calculateAge() {
    var dob = document.getElementById('dob').value;
    if (dob === "") {
        document.getElementById('result').innerHTML = "Please enter your date of birth";
        return;
    }

    var dobDate = new Date(dob);
    var today = new Date();

    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDifference = today.getMonth() - dobDate.getMonth();

    // Adjust if birthday hasn't occurred this year yet
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = "Your age is " + age + " years old";
}

