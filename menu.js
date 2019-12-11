let start = document.getElementById('start');
let load = document.getElementById('load');
let options = document.getElementById('opt');
options.addEventListener('click', () => {
    location = './options.html';
})
let call_us = document.getElementById('we');
call_us.addEventListener('click', () => {
    location = './we.html';
})
let exit = document.getElementById('exit');
exit.addEventListener('click', () => {
    window.parent.postMessage({ 'event': 'close' })
})