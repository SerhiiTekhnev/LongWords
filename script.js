let button = document.querySelector('button[type=submit]')
button.addEventListener('click', function() {
    let InputWord = document.querySelector('form input[name=word]').value
    if(InputWord.length <= 10) {
        alert(InputWord)
    } else {
        alert(InputWord[0] + (InputWord.length-2) + InputWord[InputWord.length-1])
    }
})