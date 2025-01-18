function guessSubmitted(){
    const value = document.querySelector('input').value;
    const currentColor = document.querySelector('.color.box').style.backgroundColor;
    alert('Your Guess was ' + value + '. the correct answer is:' + currentColor);
}
function randomNumber() {
    const num = Math.ceil(Math.random() * 15);
    if(num>9){
        return 'abcdef'[num-10];
    }
    return num + '';
}
function guessRandomColor() {
    const hex = randomNumber() + randomNumber() + randomNumber();
    document.querySelector('.color-box').style.backgroundColor = '#' + hex;
}
guessRandomColor();