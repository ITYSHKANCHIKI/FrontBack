const h1 = document.querySelector('h1');
h1.textContent = 'Добро пожаловать на наш сайт!';

const h2 = document.querySelector('h2');
h2.style.color = 'red';

const firstParagraph = document.querySelector('.content p');
firstParagraph.textContent = 'Это новый текст параграфа.';

const video = document.querySelector('video');
video.style.display = 'none';

const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    printData() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    },
};

function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('feedbackForm');
    formData.name = form.elements['name'].value.trim();
    formData.email = form.elements['email'].value.trim();
    formData.phone = form.elements['phone'].value.trim();
    formData.date = form.elements['date'].value;
    formData.comment = form.elements['comment'].value.trim();

    if (!formData.name || !formData.email || !formData.comment) {
        alert('Пожалуйста, заполните обязательные поля (Имя, Email, Комментарий)');
        return;
    }

    const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(formData.phone)) {
        alert('Телефон должен содержать только цифры.');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
        alert('Введите корректный e-mail.');
        return;
    }

    formData.printData();
}

const form = document.getElementById('feedbackForm');
form.addEventListener('submit', submitForm);