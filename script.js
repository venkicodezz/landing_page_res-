let menu_icon = document.getElementById("menu");
menu_icon.addEventListener('click', show);


let list = document.getElementById('show-list')
let icon = document.getElementById('menu')
let iclose = document.getElementById('menu-close')


function show() {


    if (list.style.display == 'block') {
        list.style.display = 'none'
        icon.style.display = 'block'



    } else {
        list.style.display = 'block'


    }



}