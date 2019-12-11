let con = document.querySelector('iframe');
let btn = document.querySelector('button');
window.addEventListener('message', (e) => {
    console.log(e);
    if (e && e.data && e.data.event == 'close') window.close();
    if (e && e.data && e.data.event == 'away') btn.classList.remove('hidden')
});
btn.addEventListener('click', () => {
    con.src = './menu.html';
    btn.classList.add('hidden')
});
btn.classList.add('hidden')