// template_ls1s9q9
// service_mxqbf8l

function contact(event) {
    event.preventDefault()
emailjs
.sendForm(
    'service_mxqbf8l', 
    'template_ls1s9q9',
    event.target,
    '9Tyq8RczADoQz7FUY'
).then(() => {
    console.log('this worked1')
})
}

