function calculate() {
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    let total = m1 + m2 + m3;
    let percentage = total / 3;

    let grade = "";

    if (percentage >= 75)
        grade = "A";
    else if (percentage >= 60)
        grade = "B";
    else if (percentage >= 40)
        grade = "C";
    else
        grade = "Fail";

    document.getElementById("total").innerText = "Total: " + total;
    document.getElementById("percentage").innerText = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById("grade").innerText = "Grade: " + grade;
}
