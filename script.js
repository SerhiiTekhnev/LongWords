let button = document.querySelector('button[type=submit]')
button.addEventListener('click', function() {
    let InputWord = document.querySelector('form input[name=word]').value
    let a = InputWord.split("")
    if(a.length <= 10) {
        alert(InputWord)
    } else {
        alert(a[0] + (a.length-2) + a[a.length-1])
    }
})