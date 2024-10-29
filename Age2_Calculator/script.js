function calculateAge() {
    const dob = document.getElementById("dob").value;
    const yearsElement = document.getElementById("years");
    const monthsElement = document.getElementById("months");
    const daysElement = document.getElementById("days");

    if (!dob) {
        yearsElement.textContent = "-";
        monthsElement.textContent = "-";
        daysElement.textContent = "-";
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    yearsElement.textContent = years;
    monthsElement.textContent = months;
    daysElement.textContent = days;
}

