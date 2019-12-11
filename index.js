window.addEventListener('message', (e) => {
    console.log(e);
    if (e && e.data && e.data.event == 'close') window.close();
})