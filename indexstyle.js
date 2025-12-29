function addStudent(event) {
    event.preventDefault(); // stop page refresh

    let name = document.getElementById("Name").value;
    let age = document.getElementById("Age").value;
    let course = document.getElementById("Course").value;
    let email = document.getElementById("Email").value;

    let gender = document.querySelector('input[name="Gender"]:checked').value;

    let table = document.getElementById("tabledata");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = course;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML =
        '<button class="delete-btn" onclick="deleteRow(this)">Delete</button>';

    document.getElementById("Form").reset();
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
} 