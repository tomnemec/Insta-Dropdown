function triggerNav(){
    const menu = document.getElementById('menu');
    const navIcon = document.getElementById('nav-icon');

    if(menu.classList.contains('show')){
        menu.classList.remove('show');
        menu.classList.add('hide');
        navIcon.classList.remove('bi-chevron-up');
        navIcon.classList.add('bi-chevron-down');

    }else{
        menu.classList.remove('hide');
        menu.classList.add('show'); 
        navIcon.classList.remove('bi-chevron-down');
        navIcon.classList.add('bi-chevron-up');
    }
}
