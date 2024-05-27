const scriptURL = 'https://script.google.com/macros/s/AKfycbwS7udywnrnCpXmRFS5pRjoJHoenEeK2vR212BTUiERvikYAq3hpu78gQVOpdj6BPW_/exec'

const forme = document.forms['contactamepo']

forme.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(forme)})
  .catch(error => console.error('Error!', error.message))
})