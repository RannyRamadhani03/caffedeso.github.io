//Toggle class Active
const NavbarNav = document.querySelector
('.Navbar-Nav');

//Ketika Menu List di klik
document.querySelector('#menulist').

onclick = () => {
 NavbarNav.classList.toggle('active');
};

//Klik luar sidebar menghilangkan menulist
const menulist = document.querySelector
('#menulist');

document.addEventListener('click', function(e) {
    if(!menulist.contains(e.target) && !NavbarNav.contains(e.target)) {
        NavbarNav.classList.remove('active')
    }
});