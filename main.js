const scriptURL = 'https://script.google.com/macros/s/AKfycbzGA2KL4ImsysE8wquBPABXXoCkoweTEV-i2pQ4yNZwHV0DBx9IRC0yuFzmyohWqh3M/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(window.location.href = 'confirm.html')
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})