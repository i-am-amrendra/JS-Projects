function found() {
    const findTime = new Date().getTime() - window.startTime;
    const findSeconds = findTime/1000;
    alert('Found in ' + findSeconds + ' seconds');
    newGame();
}
function newGame() {
    window.startTime = new Date().getTime();
    const widthMax = document.body.clientWidth - 45;
    const heightMax = document.body.clientHeight - 50;
    const width = Math.round(Math.random() * widthMax);
    const height = Math.round(Math.random() * heightMax);
    document.querySelector('img').style.top = height + 'px';
    document.querySelector('img').style.left = width + 'px';
}
newGame();