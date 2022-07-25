// template_ls1s9q9
// service_mxqbf8l

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible"
emailjs
.sendForm(
    'service_mxqbf8l', 
    'template_ls1s9q9',
    event.target,
    '9Tyq8RczADoQz7FUY'
).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible"
}).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The email service is temporarily unavailable. Please contact me directly on codingriley@gmail.com"
    );
})
}