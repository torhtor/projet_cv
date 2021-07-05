///// ceci est le script qui agira sur toutes les pages avec la création du bouton permetant le retour top,
///// la mise en position fixe du menu, une popup publicitaire, la determination aleatoire de l'image du slider


//DEBUT DU SCRIPT DOMCONTENTLOADED

document.addEventListener('DOMContentLoaded', toutMonScript);
function toutMonScript(){
    "use strict";
    let btTop = document.getElementById('bttop');
    let pub = document.getElementById('pub');
    let btClose = document.getElementsByTagName('i');
    let btNePlusRecevoir = document.getElementById('finpub');
    let slider = document.getElementById('slider');
    let numberSlider;
    let headerImg = ['header1', 'header2', 'header3'];
    let btResponsive = document.getElementById('menutel');
    let primaryNav = document.getElementById('primary-nav');


   window.addEventListener('scroll' ,function (){
        boutonTop();
        menuFixed();
    });
   //CREATION DU BOUTON RETOUR HAUT DE PAGE

    function boutonTop() {
        let monDocument = document.documentElement;
        let posVerticalScroll =monDocument.scrollTop;
        //le bouton top prend la class fixed créée en CSS qui le rendra visible a partir du début du scroll
        if (posVerticalScroll > 160){ //160 --> disparition du logo + titre
            btTop.setAttribute('class', 'fixed');
        }
        else {
            btTop.setAttribute('class', 'haut');
            //retour a la class par défaut du bouton.
        }
        // /!\ la class "fixed" doit etre gérer en media queries aussi !!!
        }  // FIN DE LA FONCTION BOUTON TOP

    //DEBUT DU TRAITEMENT DE LA PRIMARY NAV EN LA FIXANT QUAND LE SLIDER DISPARAIT
    function menuFixed(){
        //on recupere les coordonnées du scroll pour fixer le menu apres le slider
        let menu = document.getElementById('primary-nav');
        let main = document.getElementsByTagName('main');
        let monDocument = document.documentElement;
        let posVerticalScroll =monDocument.scrollTop;
        if (posVerticalScroll > 546){ // taille du slider
            menu.setAttribute('class', 'menu-fixed');
            main[0].style.paddingTop = "94px"; // pour compenser le fait que le menu sorte du flux
        }
        else {
            menu.removeAttribute('class','menu-fixed');
            main[0].style.padding ="30px";
        }
    }//FIN FONCTION

    //GESTION DE LA POPUP PUBLICITAIRE

    function popUp () {
        pub.setAttribute('class','popup');
        let nbPub = sessionStorage.getItem('pub');
        let plusPub = localStorage.getItem('pub');
        if (nbPub == 1 || plusPub == 1){ //sessionStorage ou localStorage pour stocker l'apparition de la pub.
            pub.setAttribute('class','hidden'); //pour empecher la popup de revenir dans la page apres l'avoir fermée une fois
        }
    }
    //apres 5s on appelle la fonction popup
    setTimeout(popUp,5000);
    // la fonction pour fermer la popup
    btClose[5].addEventListener('click', function (){
        closePopup();
        nePlusRecevoir();
    });
    btClose[5].addEventListener("mouseover", function (){
        btClose[5].style.cursor = "pointer";
    });
    function closePopup(){
        pub.setAttribute('class', 'hidden');// "hidden" class par defaut de la div popup
        sessionStorage.setItem('pub','1');
    }
    //fonction pour ne plus recevoir de publicité sur ce site
    function nePlusRecevoir (){
        if (btNePlusRecevoir.checked){
            localStorage.setItem('pub', "1");
        }
    }
//// FIN DE GESTION DE LE POPUP


//// DEBUT GESTION DU HEADER ALEATOIRE

    function changeSlider (headerImg) {
//on obtient la balise img dans le children[1]
        if (slider === null){

        } else{
            slider = slider.children[1];
            numberSlider = Math.floor(Math.random() * 3); //on obtient un chiffre aléatoire entre 0et 2 pour déterminer quel rang du tableau on garde pour le header
            slider.setAttribute('src','img/header/'+headerImg[numberSlider]+'.jpg');
            }
    }
    changeSlider(headerImg);
//// FIN DE LA GESTION DU HEADER

    //// GESTION DU BOUTON POUR AFFICHER LE MENU EN RESPONSIVE
btResponsive.addEventListener('click',function (){
    showMenu()
});
function showMenu(){
    primaryNav.classList.toggle('menuhidden');

}



}