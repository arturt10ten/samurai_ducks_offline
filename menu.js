let start = document.getElementById('start');
let load = document.getElementById('load');
load.addEventListener('click', () => {
    location = './load.html';
    window.parent.postMessage({ 'event': 'away' })
})
let options = document.getElementById('opt');
options.addEventListener('click', () => {
    location = './options.html';
    window.parent.postMessage({ 'event': 'away' })
})
let call_us = document.getElementById('we');
call_us.addEventListener('click', () => {
    location = './we.html';
    window.parent.postMessage({ 'event': 'away' })
})
let exit = document.getElementById('exit');
exit.addEventListener('click', () => {
    window.parent.postMessage({ 'event': 'close' })
})