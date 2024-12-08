document.getElementById("orderForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var nameRegex = /^[А-Яа-яЁёA-Za-z\s]{3,}$/;
    if (!nameRegex.test(name)) {
        alert("Введите корректное имя (не менее 3 символов, только буквы)");
        event.preventDefault(); 
    }

    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Введите корректный e-mail");
        event.preventDefault();
    }

    var phone = document.getElementById("phone").value;
    var phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
        alert("Введите корректный номер телефона в формате +7 (999) 999-99-99");
        event.preventDefault();
    }
});

function showModal() {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];

    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }

    span.click();

    var inputFields = document.getElementsByClassName("guest");
    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
    }

    var textarea = document.getElementById("comment");
    textarea.value = "";
}

var modal = document.getElementById("modal");


span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block"; 
}


function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; 
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

