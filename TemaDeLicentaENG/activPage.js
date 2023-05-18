/* DODATI DA OSTANE BOJA KAD KKLIKNESS NA DUGME U MENIJU */

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLenght = menuItem.length
for (let i = 0; i < menuLenght; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active"
    }
}




/* PENTRU LINCURI DE LIMBI STRAINE */
const limbiStraine = document.querySelectorAll('.limbi-straine a');
const windowPathname = window.location.pathname;

limbiStraine.forEach(limbiStr => {
    const href = limbiStr.getAttribute('href');

    if (href) {
        const navLinkPathname = href.split('/').pop();

        if ((windowPathname === navLinkPathname) || (windowPathname === '/Dashboard.html' && navLinkPathname === '/')) {
            limbiStr.classList.add('active');
        }
    }
});

