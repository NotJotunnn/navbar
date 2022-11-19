const inBtnOn = document.getElementById('btnOn');
inBtnOn.classList.add('non-visible')
inBtnOn.classList.toggle('non-visible')

function changeMenuState() {
    const menu = document.getElementById('menu');
    const btn = document.getElementById('bars');
    const inBtnOff = document.getElementById('btnOff');

    menu.classList.toggle('deselect');
    btn.classList.toggle('shift');

    inBtnOn.classList.toggle('non-visible');
    inBtnOff.classList.toggle('non-visible');
}