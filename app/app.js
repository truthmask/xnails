// Burger
const nav = document.getElementById('menu')
const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')

const burNav = document.getElementsByClassName('burNav')   

navOpen.addEventListener('click', function(e) {
    e.preventDefault()
    nav.classList.remove('menu')
    nav.classList.add('menu-active')
})

navClose.addEventListener('click', function(e) {
    e.preventDefault()
    nav.classList.remove('menu-active')
    nav.classList.add('menu')
})

burNav.addEventListener('click', function(e) {
    e.preventDefault()
    nav.classList.remove('menu-active')
    nav.classList.add('menu')
})



// Pop-up
// const openPopUp = document.getElementById('open_pop_up');
// const openPopUpIntro = document.getElementById('open_pop_up_intro');
// const openPopUpFooter = document.getElementById('open_pop_up_footer');
// const openPopUpComment = document.getElementById('open_pop_up_comment')

// const closePopUp = document.getElementById('pop_up_close');
// const popUp = document.getElementById('pop_up');
// const popUpComment = document.getElementById('pop_up_comment');

// openPopUp.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
// });

// closePopUp.addEventListener('click', () => {
//     popUp.classList.remove('active');
// });

// openPopUpIntro.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
// });

// openPopUpFooter.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
// });

// openPopUpComment.addEventListener('click', function(e){
//     e.preventDefault()
//     popUpComment.classList.add('active');
// })

// openPopUpFooter.addEventListener('click', function(e){
//     e.preventDefault()
//     popUp.classList.add('active');
// })



// About
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}



