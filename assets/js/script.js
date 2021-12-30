var q = (el) => document.querySelector(el);
var qAll = (el) => document.querySelectorAll(el);


let 
body = q('body'),
MenuMobile = q('.menu_mobile'),
MenuLink = q('.menu-link'),
banner = q('.banner_headline div'),
menuLink_option,
span = q('#footer-content span'),
verific = MenuMobile.querySelector('span'),
bannerPrinc = q('.bg-banner'),
menuOptions = q('.menuOptions'),
bannerSelect = q('.banner_select'),
bannerOptions = q('.banner_options'),
Menu_navbarDesktop = q('.menu_navbarMobile'),
MenuOptions_open = q('.MenuOptions_open'),
MenuOptions_close = q('.MenuOptions_close'),
options = bannerOptions.querySelector('.options'),
nextPage = q('.next_page');

let logoDesktop = q('.menu_navbarMobile');


let myBody;
    setInterval(  ()=>{
        myBody = window.innerWidth;
    },  100);
let x = 700;

function  testing() {

    if(bannerSelect.classList.contains('displayNone')) {
        options.classList.remove('displayFlex');
        bannerSelect.classList.remove('displayNone');
        bannerOptions.classList.remove('topZero');
        bannerPrinc.classList.remove('positionOff');
        MenuOptions_open.classList.remove('displayNone');
        MenuOptions_close.classList.add('displayNone');
        menuOptions.classList.remove('menuOptions_Open');
    } else {
        bannerSelect.classList.add('displayNone');
        options.classList.add('displayFlex', 'heightTenVH');
        bannerOptions.classList.add('topZero');
        bannerPrinc.classList.add('positionOff');
        
        

        setTimeout(()=>{
            MenuOptions_open.classList.add('displayNone');
            MenuOptions_close.classList.remove('displayNone');
            menuOptions.classList.add('menuOptions_Open');menuOptions.style.opacity = "1";
        }, 300);
    }

}

setTimeout( ()=>{
    if(bannerSelect.classList.contains('displayNone')) {

        options.classList.remove('displayFlex');
        bannerSelect.classList.remove('displayNone');
        bannerOptions.classList.remove('topZero');
        bannerPrinc.classList.remove('positionOff');
        MenuOptions_open.classList.remove('displayNone');
        MenuOptions_close.classList.add('displayNone');
        menuOptions.classList.remove('menuOptions_Open');

    }
}, 100);


setInterval( ()=>{
    
    if(myBody <= 700) {

        menuLink_option = MenuLink.querySelector('ul').offsetHeight;

        if(span.classList.contains('indicador')) {

            span.classList.remove('indicador');
            MenuLink.classList.add('closeMenu_Mobile');
            Menu_navbarDesktop.classList.remove('menu_navbarDesktop');
        }

    } else if(myBody >= 701) {

        menuLink_option = MenuLink.querySelector('ul').offsetHeight;
        
            span.classList.add('indicador');
            MenuLink.classList.remove('closeMenu_Mobile');
            MenuLink.style.height = 'auto';
            Menu_navbarDesktop.classList.add('menu_navbarDesktop');

            if(logoDesktop.classList.contains('menu_navbarDesktop')) {

                options.classList.remove('displayFlex');
                bannerSelect.classList.remove('displayNone');
                options.classList.remove('heightTenVH');
                bannerOptions.classList.remove('topZero');
                bannerPrinc.classList.remove('positionOff');
                MenuOptions_open.classList.remove('displayNone');
                MenuOptions_close.classList.add('displayNone');
                menuOptions.classList.remove('menuOptions_Open');
                body.classList.remove('overflowHidden');
        
            }
    }

}, 100);



    

// ---------------- [ACTION:CLICK] MENU MOBILE ---------------- //
MenuMobile.addEventListener('click', ()=>{
    

    if(MenuLink.classList.contains('closeMenu_Mobile')) {
        MenuLink.classList.remove('closeMenu_Mobile');
        MenuLink.style.height = `${menuLink_option}px`;
    } else {
        MenuLink.classList.add('closeMenu_Mobile');
    }
    

})

// ---------------- [ACTION:CLICK] MENU OPTIONS ---------------- //

menuOptions.addEventListener('click', ()=>{
    if(bannerSelect.classList.contains('displayNone')) {
        options.classList.remove('displayFlex');
        bannerSelect.classList.remove('displayNone');
        bannerOptions.classList.remove('topZero');
        bannerPrinc.classList.remove('positionOff');
        MenuOptions_open.classList.remove('displayNone');
        MenuOptions_close.classList.add('displayNone');
        menuOptions.classList.remove('menuOptions_Open');
        body.classList.remove('overflowHidden');

    } else {
        bannerSelect.classList.add('displayNone');
        options.classList.add('displayFlex', 'heightTenVH');
        bannerOptions.classList.add('topZero');
        bannerPrinc.classList.add('positionOff');
        body.classList.add('overflowHidden');
        
        

        setTimeout(()=>{
            MenuOptions_open.classList.add('displayNone');
            MenuOptions_close.classList.remove('displayNone');
            menuOptions.classList.add('menuOptions_Open');menuOptions.style.opacity = "1";
        }, 300);
    }
    
    
} );

    
let nextPage_A = nextPage.querySelectorAll('.inactive');

nextPage_A.forEach((e)=>{
    e.addEventListener( 'click', (event)=>{

        event.preventDefault();
    
    } )
});