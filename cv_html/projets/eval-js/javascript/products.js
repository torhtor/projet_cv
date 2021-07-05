const category = [
    {
        "name":"Alimentaire",
        "slug":"alimentaire",
        subCategory:[
            {
                "name":"Apéritifs",
                "slug":"aperitifs",
            },
            {
                "name":"Huiles d'olive",
                "slug":"huile-olive",
            },
            {
                "name":"Miels",
                "slug":"miels",
            }
        ]
    },
    {
        "name":"Bien-être",
        "slug":"bien-etre",
        subCategory:[
            {
                "name":"Cheveux",
                "slug":"cheveux",
            },
            {
                "name":"Corps",
                "slug":"corps",
            },
            {
                "name":"Visage",
                "slug":"visage",
            }
        ]
    },
    {
        "name":"Vrac",
        "slug":"vrac",
        subCategory:[
            {
                "name":"Herbes aromatiques",
                "slug":"herbes-aromatiques",
            },
            {
                "name":"Infusions",
                "slug":"infusions",
            },
        ]
    }

];






const products = [
    {
        "id": 1,
        "category":"alimentaire",
        "subCategory":"aperitifs",
        "name": "Dolmades (Feuille de vigne farcie au riz) 200g",
        "description": "<p>Tendres feuilles de vigne croquantes farcies de riz aromatisées aux herbes à l’huile d’olive extra vierge.<br>Fabriqué à la main à partir d’une recette familiale et d’ingrédients frais. Ajout essentiel à tout plateau d’apéritif.<br> A déguster seul en collation ou en accompagnement d’une boisson. Un produit typique de la Grèce.</p>",
        "image":"dolmades-feuille-de-vignes-traditionelles.jpg",
        "price": 7.70
    },
    {
        "id": 2,
        "category":"alimentaire",
        "subCategory":"huiles-olive",
        "name": "Huile d’olive extra vierge 0.2 Liokarpi 500ml",
        "description": "<p>Fidèle à une tradition de transformation et de production d’huile d’olive depuis 1930, Liokarpi prend les mesures nécessaires pour s’adapter et surpasser les besoins de l’époque, grâce à la modernisation continue de ses installations et à l’amélioration constante de ses procédures et méthodes de transformation des olives .</p><p>Fidèle à une tradition de transformation et de production d’huile d’olive depuis 1930, Liokarpi prend les mesures nécessaires pour s’adapter et surpasser les besoins de l’époque, grâce à la modernisation continue de ses installations et à l’amélioration constante de ses procédures et méthodes de transformation des olives .</p>",
        "image":"Huile-olive-02-extra-500ml.jpg",
        "price": 11.90
    },
    {
        "id": 3,
        "category":"alimentaire",
        "subCategory":"miels",
        "name": "Miel de Thym 270g",
        "description": "<p>Le miel de thym «TOPLOU» est un miel de thym de haute qualité avec un arôme distinctif et doux. C’est un produit naturel, plein de saveur, avec des et des caractéristiques exceptionnelles.</p><p>Profitez de ce miel pur et non raffiné à la texture soyeuse directement produit par les abeilles vivant dans les zones les plus sauvages et les plus rugueuses des montagnes SITIA. Le miel riche et savoureux « TOPLOU» est collecté avec soin selon des méthodes traditionnelles et emballé selon des procédures d’hygiène strictes, vous offrant ses propriétés nutritionnelles uniques et saines directement à partir des ruches. Notre miel qui se distingue par son arôme, sa saveur et sa densité vous donne une énergie faible en calories tout en renforçant votre système immunitaire. « TOPLOU»le miel provient des meilleures qualités de miel de Crète en raison de la grande variété d’herbes fraîches et aromatiques, rassemblant une sélection d’oligo-éléments, de protéines et d’acides aminés bénéfiques. Un miel de première qualité d’une qualité exceptionnelle avec une superbe couleur vive, un goût doux agréable et des caractéristiques alimentaires vivifiantes</p>",
        "image":"miel-de-thym.jpg",
        "price": 8.50
    },
    {
        "id": 4,
        "category":"bien-etre",
        "subCategory":"cheveux",
        "name": "Shampoing Bio tous types de cheveux (250 ml)",
        "description": "<p>La composition aux agents nettoyants doux d’origine naturelle, rajeunit les cheveux et respecte la couche hydrolipidique de la peau.&nbsp;Enrichi en eau de rose, il stabilise l’équilibre du pH des cheveux tout en laissant de beaux cheveux odorants.&nbsp;Il est d’origine naturelle, facilement biodégradable et donc respectueux de l’environnement.</p><p>UTILISATION: Lavez vos cheveux aussi souvent que nécessaire, une fois par jour si nécessaire. Appliquez le shampoing en étalant une petite quantité sur la paume des deux mains et en appliquant uniformément sur les cheveux mouillés. Massez doucement dans les cheveux et le cuir chevelu en utilisant un mouvement circulaire pour éviter que les cheveux ne s’emmêlent. Rincer abondamment à l’eau tiède puis répéter pour optimiser l’effet nettoyant.</p>",
        "image":"shampoing-bio-dictame-ciste-eau-de-rose.jpg",
        "price": 21.00
    },
    {
        "id": 5,
        "category":"bien-etre",
        "subCategory":"corps",
        "name": "Sérum corporel Bio hydratant en profondeur (250 ml)",
        "description": "<p>Avec aloès, ciste (aladania) et ambre</p><p>Il raffermit la peau et procure une&nbsp; d’hydratation unique. Il rafraîchit et hydrate la peau en profondeur. Le sérum pour le corps à l’aloès, au ciste et à l’ambre est récompensé comme le meilleur produit de soins corporels en 2017 en Suède. Les ingrédients hydratants de l’aloès hydratent la peau, tandis que les composants antioxydants des huiles végétales contribuent à une apparence jeune et éclatante de l’épiderme. Ses ingrédients naturels sont reconnus par l’épiderme et sont immédiatement absorbés par la peau. Il ne laisse pas de traces de gras et ne colle pas.</p>",
        "image":"serum-corporel-hydratant-en-profondeur.jpg",
        "price": 32.00
    },
    {
        "id": 6,
        "category":"bien-etre",
        "subCategory":"visage",
        "name": "Crème régénératrice au mucus d’escargot",
        "description": "<p>Produit 100% naturel</p><p>70% de mucus d’escargot, ce qui en fait l’un des meilleurs produits sur le marché du fait de sa forte concentration en Allantoïne. “Vous ne pourrez plus vous en passer !”.</p>",
        "image":"creme-mucus-escargot.jpg",
        "price": 59.00
    },
    {
        "id": 7,
        "category":"vrac",
        "subCategory":"herbes-aromatiques",
        "name": "Origan Bio (20g)",
        "description": "<p>Une herbe aromatique avec une saveur intense pour accompagner vos plats, pizzas, salade de féta.</p><p>Le père de la médecine, Hippocrate, recommandait l’origan pour les problèmes oculaires ” inflammation de l’œil’, les rages de dents, les difficultés respiratoires, les rhumes et les troubles gynécologiques.</p>",
        "image":"origan.jpg",
        "price": 2.60
    },
    {
        "id": 8,
        "category":"vrac",
        "subCategory":"infusions",
        "name": "Dictame de Crète (20g)",
        "description": "<p>Les premières représentations du dictame datent de 1 500 av. J.C. dans une fresque située sur le mur d’un palais Minoen.<br>Premier antiseptique en usage externe cité dans les tablettes en linéaire B circa 1 300 av. J.-C., le dictame est connu par les peuples de l’Antiquité, de Grèce et d’Égypte (où il était exporté) pour ses vertus médicinales. La littérature médicale antique prescrit le dictame en infusion pour les maux d’estomac, les problèmes intestinaux, les grossesses à risque et les menstruations douloureuses. En utilisation externe il sert d’antiseptique et de coagulant.</p>",
        "image":"dictame.jpg",
        "price": 5.00
    },
]

// DEBUT DU SCRIPT DOMCONTENTLOADER

document.addEventListener('DOMContentLoaded', toutMonScript);
function toutMonScript() {
    "use strict";

    let nav = document.getElementById('produit');
    let section = document.getElementById('articles');
    let navMenu = document.getElementById('navpopup');
    let imgPopup = document.getElementById('imagealea');
    let ul;
    let name =[];
    let slug = [];
    let subCate= [];
    let menuPopup = document.getElementById('menupopup');
    let btMenu = document.getElementById('menu');
    let liProduit;
    let liId;
    let btAlim;
    let btBe;
    let btVrac;
    let btCloseMenu = document.getElementById('btclosemenu');
    let btRetourProduit;

//DEBUT DU TRAITEMENT DU JSON ET RECUPERATION DES DONNEES
        //la boucle va chercher les elements du json pour les integrer dans d'autres tableaux


// DEBUT DU TRAITEMENT DE LA PAGE PRODUIT
        //pour n'afficher les produits que dans la page produit.html
        if(nav === null){
    }else {
            //cette partie traite la page produit.html
            nav.insertAdjacentHTML('afterbegin', '<ul></ul>');
            let ul = document.querySelector('#articles nav > ul');
            //boucle de creation d'un li pour chaque produit.
            for (let product of products) {
                ul.insertAdjacentHTML('afterbegin', '<li></li>');//on créer autant de li qu'on a d'image dans le json
                ul.children[0].setAttribute('id', product.id); //on donne un id aux li
                ul.children[0].insertAdjacentHTML('afterbegin', '<a></a>' + '<h3>' + product.name + '<br>' + product.price + '€ </h3>');
                // on remplis le li avec un lien pour le produit et sa description
                ul.children[0].children[0].insertAdjacentHTML('afterbegin', '<img>'); // creation de la balise image
                ul.children[0].children[0].children[0].setAttribute('src', `img/products/${product.category}/${product.subCategory}/${product.image}`);
                ul.children[0].children[0].children[0].setAttribute('class', 'list');

            }//END OF FOR



        } // END OF ELSE

    // DEBUT DU TRAITEMENT DE L'AFFICHAGE DU PRODUIT EN PLEINE PAGE
    liProduit = document.querySelectorAll('#produit ul li');
    //on recupere l'id du produit sur lequel on clique pour afficher la page produit liée au porduit.
    for (let i = 0; i < liProduit.length; i++) {
        liProduit[i].addEventListener('click', function () {
            liId = liProduit[i].getAttribute('id') - 1;
            transformPage();

        });
        liProduit[i].addEventListener('mouseover', function () {
            liProduit[i].style.cursor = 'pointer';
        })
    }

    //DEBUT DE LA FONCTION D'AFFICHAGE DU PRDUIT
    function transformPage() {
        let navRemov;
        let produit;
        let image;
        let category;
        let subCaterogy;
        let price;
        let name;
        let descrpition;
        let article = products[liId];
        let quantite;
        let prixTotal;
        let span;
//on recupere les données du json qui nous interessent pour la création de la page
        for (let elements in article) {
            image = article.image;
            category = article.category;
            subCaterogy = article.subCategory;
            price = article.price;
            name = article.name;
            descrpition = article.description;
        }
        //
        navRemov = document.querySelectorAll('#articles nav');
//pour etre sur de ne pas avoir plusieurs fois la nav qui se créée
        navRemov[0].remove();
//creation des different eleements de la page produit pour l'afficher en pleine page
        section.insertAdjacentHTML('afterbegin', '<article id="produit"></article>');
        produit = document.getElementById('produit');

        produit.insertAdjacentHTML('afterbegin', '<h3>' + name + '</h3>');
        produit.insertAdjacentHTML('afterbegin', '<button id="btretour">Retour</button>');
        btRetourProduit = document.getElementById('btretour');
        produit.insertAdjacentHTML("beforeend", '<figure>' + '<img src=img/products/' + category + '/' + subCaterogy + '/' + image + '></figure>');
        produit.children[2].insertAdjacentHTML('beforeend', '<figcaption>' + name + '</figcaption>');
        produit.insertAdjacentHTML('beforeend', '<div id="detail"></div>');
        produit.children[3].insertAdjacentHTML('beforeend', descrpition);
        produit.children[3].insertAdjacentHTML('beforeend', '<form action="panier.php" id="panier"><label for="quantite">Quantité</label><input type="number" id="quantite" name="quantite"><span></span><input type="submit" value="Ajouter au panier"></form>');
        quantite = document.getElementById('quantite');
        span = produit.children[3].lastChild.children[2];
        //on insert la fonction de calcul du prix dans le span qui va aller directement dans le formulaire
        quantite.addEventListener('change', function () {
            calculPrix(span);
        });

        //fonction du calcul du prix total en fonction du nombre de produits selectionnés
        function calculPrix(span) {
            console.log(span);
            prixTotal = quantite.value * price;
            span.innerHTML = 'total ' + prixTotal + "€";

        }

        //appel du bouton retour
        btRetourProduit.addEventListener('click', function () {
            retourProduit(produit)
        });

    }//END OF FUNCTION TRANSFORMPAGE
        //TRAITEMENT RETOUR A LA FORME PRINCIPALE DE LA PAGE AVEC BT RETOUR

        function retourProduit(produit){

            //ici on recréer exactememt les memes elements que lors de l'ouverture de la page

            section.insertAdjacentHTML('afterbegin', '<nav id="produit"></nav>');
            let nav = document.getElementById('produit');
            //on supprime tous les elements créés pour affircher le produit en pleine page
            produit.remove();
            nav.insertAdjacentHTML('afterbegin', '<ul></ul>');
            let ul = document.querySelector('#articles nav > ul');
            //boucle de creation d'un li pour chaque produit.
            for (let product of products){
                ul.insertAdjacentHTML('afterbegin', '<li></li>');//on créer autant de li qu'on a d'image dans le json
                ul.children[0].setAttribute('id', product.id); //on donne un id aux li
                ul.children[0].insertAdjacentHTML('afterbegin', '<a></a>'+'<h3>'+product.name+'<br>'+product.price+'€ </h3>');
                // on remplis le li avec un lien pour le produit et sa description
                ul.children[0].children[0].insertAdjacentHTML('afterbegin', '<img>'); // creation de la balise image
                ul.children[0].children[0].children[0].setAttribute('src', `img/products/${product.category}/${product.subCategory}/${product.image}`);
                ul.children[0].children[0].children[0].setAttribute('class','list');

            }//END OF FOR
            let liProduit = document.querySelectorAll('#produit ul li');

            //on remet les ecouteurs sur les li créés
            for (let i = 0; i<liProduit.length; i++) {
                liProduit[i].addEventListener('click', function (){
                    liId =  liProduit[i].getAttribute('id')-1;
                    transformPage();

                });
                liProduit[i].addEventListener('mouseover', function (){
                    liProduit[i].style.cursor = 'pointer';
                })
            }


        }//END OF FUNCTION RETOUR PAGE PRODUIT
// END OF TRAITEMENT DE LA PAGE PRODUIT

    //  TRAITEMENT DE LA GRANDE POPUP MENU + SOUS MENU


    navMenu.insertAdjacentHTML('afterbegin','<ul>'); //creation des elements de la nav --> ul
    ul = document.querySelector('#navpopup > ul');
    ul.setAttribute('class','ul'); // attribution de la class ul au premier ul pour permettre une modification CSS plus simple

    //UTILISATION D'UNE AUTRE METHODE POUR ALLER CHERCHER LES VALEURS DE CATEGORY
    //boucle pour aller chercher les valeurs du json : category et pouvoir créer le menu a partir du fichier

    for (let key in category){
        //on recupère chaque premier object du tableau category

        for (let keyObject in category[key]){
            // ici on rempli les tableaux créés pour sortir les valeurs du json
            // les valeurs sont celles de chaque premier object avant le tableau a l'interieur de cet object
            if (keyObject == 'name'){
                name.push(category[key][keyObject]);
            }
            if (keyObject == 'slug'){
                slug.push(category[key][keyObject]);
            }

            //on boucle pour aller chercher les valeurs du tableau : sous-category dans chaque object du json : category
            if (keyObject == 'subCategory'){
                 let obj = category[key][keyObject];
                 for (let key in obj){
                     for (let keyObject in obj[key]){

                         //on obtient les valeurs a l'intérieur du tableau : sous-category
                         if (keyObject == 'name'){
                             subCate.push(obj[key][keyObject])
                         }
                     }
                 }
            }
        } //END OF FOR
    } //END OF FOR
// on reverse les tableau pour remettre dans le bon ordre les valeurs avec la methode afterbegin
    slug.reverse()
    name.reverse();
// cette boucle va créer le menu qui fera la taille du nombre d'obect dans le tableau : category --> ici 3
    for (let i =0; i<category.length; i++){
        ul.insertAdjacentHTML('afterbegin', '<li><a>'+name[i]+'</a></li>');
        ul.children[0].setAttribute('id','li'+slug[i]); // faire quelque chose contre ça
        ul.children[0].setAttribute('class', 'premierli');
        ul.children[0].insertAdjacentHTML('beforeend','<ul></ul>');
        ul.children[0].children[1].setAttribute('id', slug[i]);
        ul.children[0].children[1].setAttribute('class', 'hidden');
    }
    //ces boucles créées les sous menus de la popup
    //pour chaque sous menu il faut cibler sont ul associé et adapter au nombre de li qui seront dans le sous menu
    //ne s'adapte pas en fonction du nombre de sous catégory dans chaque object du tableau : category
    for (let i = 0; i<subCate.length-5; i++ ){
        ul.children[0].children[1].insertAdjacentHTML('afterbegin','<li><a>'+subCate[i]+'</a></li>');
    }
    for (let i = 3; i< subCate.length-2; i++){
        ul.children[1].children[1].insertAdjacentHTML('afterbegin','<li><a>'+subCate[i]+'</a></li>');
    }
    for (let i= 6; i<subCate.length; i++){
        ul.children[2].children[1].insertAdjacentHTML('afterbegin','<li><a>'+subCate[i]+'</a></li>');
    }

//FIN CREATION DU MENU ET DU SOUS MENU DE LA GRANDE POPUP

//ici on insere l'img aléatoire dans la grande popup

    function imagePopup (){
        let rangProduct;
        let image;
        let category;
        let subCaterogy;
        let price;
        let name;
        //on genere un chiffre aleatoire entre 1 et 8 qui donnera le rang de l'image qu'on va afficher aleatoirement
        rangProduct = Math.floor(Math.random() * 8);
        //on va chercher un objet du tableau products aleatoirement
        let imgAlea = products[rangProduct];
        // on change la classe pour afficher l'image
        imgPopup.setAttribute('class','imgpopup');
        imgPopup.insertAdjacentHTML('afterbegin','<img>');

        //on boucle dans l'objet aleatoirement selectionné pour sortir les elements qui nous interesse pour afficher l'image et une legende a l'image
        for (let product in imgAlea){
            image = imgAlea.image;
            category = imgAlea.category;
            subCaterogy =imgAlea.subCategory;
            price = imgAlea.price;
            name = imgAlea.name;
        }
        imgPopup.children[0].setAttribute('src','img/products/'+category+'/'+subCaterogy+'/'+image);
        //on y inserse une legende avec le nom et le prix du produit en allant le chercher de la meme maniere que l'image
        imgPopup.insertAdjacentHTML("beforeend", '<figcaption>'+name+'</figcaption>'+'<p>'+'<br>'+price+'€ </p>');

    } // FIN DE LA FONCTION QUI APPELLE UNE IMAGE ALEATOIREMENT


// creation des fonctions qui appellent le menu, le ferme
    btMenu.addEventListener('click', function (){
        showMenu();
        imagePopup();
    })
    btMenu.addEventListener('mouseover',function (){
        btMenu.style.cursor = "pointer";
    })
    function showMenu(){
        menuPopup.setAttribute('class', 'showpopup');

    }
    btCloseMenu.addEventListener('click', function (){
        closeMenu();
    });
    btCloseMenu.addEventListener('mouseover',function (){
        btCloseMenu.style.cursor = "pointer";
    })
    // fonction qui va fermer la popup et tout remettre a zero pour réouverture de la popup
    function closeMenu(){
        //ici on supprime l'image créée a l'ouverture de la popup ainsi que tous ses enfants (un par un pas trouvé mieux)
        imgPopup.setAttribute('class','hidden');
        imgPopup.children[0].remove();
        imgPopup.children[0].remove();
        imgPopup.children[0].remove();
//remise a zero des class de li
        menuPopup.setAttribute('class','hiddenpopup');
        ul.children[0].setAttribute('class','premierli');
        ul.children[0].children[1].setAttribute('class','hidden');
        ul.children[1].setAttribute('class','premierli');
        ul.children[1].children[1].setAttribute('class','hidden');
        ul.children[2].setAttribute('class','premierli');
        ul.children[2].children[1].setAttribute('class','hidden');
    }


//creation d'une variable pour chaque category presentes dans le menu pour activer les sous menus au click
    btAlim = document.getElementById('lialimentaire');
    btBe = document.getElementById('libien-etre');
    btVrac= document.getElementById('livrac');
    btAlim.addEventListener('click', clickAlim);
    btBe.addEventListener('click', clickBe);
    btVrac.addEventListener('click', clickVrac);
// quand on click sur la premiere category affiche le sous menu de la category et fait disparaitre les autres sous menus
function clickAlim(){
    imgPopup.setAttribute('class','hidden');
    ul.children[0].setAttribute('class','active');
    ul.children[0].children[1].setAttribute('class','deuxieme-ul');
    ul.children[1].setAttribute('class','premierli');
    ul.children[1].children[1].setAttribute('class','hidden');
    ul.children[2].setAttribute('class','premierli');
    ul.children[2].children[1].setAttribute('class','hidden');
}
// de meme pour la deuxieme category
function clickBe(){
    imgPopup.setAttribute('class','hidden');
    ul.children[0].setAttribute('class','premierli');
    ul.children[0].children[1].setAttribute('class','hidden');
    ul.children[1].setAttribute('class','active');
    ul.children[1].children[1].setAttribute('class','deuxieme-ul');
    ul.children[2].setAttribute('class','premierli');
    ul.children[2].children[1].setAttribute('class','hidden');
}
// de meme pour la troisieme
function clickVrac(){
    imgPopup.setAttribute('class','hidden');
    ul.children[0].setAttribute('class','premierli');
    ul.children[0].children[1].setAttribute('class','hidden');
    ul.children[1].setAttribute('class','premierli');
    ul.children[1].children[1].setAttribute('class','hidden');
    ul.children[2].setAttribute('class','active');
    ul.children[2].children[1].setAttribute('class','deuxieme-ul');
    }


//FIN DE TRAITEMENT DE LA GRANDE POPUP




}//END OF TOUTMONSCRIPT // END OF SCRIPT






