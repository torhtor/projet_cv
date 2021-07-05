///// ce script traite le formulaire de la page contact
document.addEventListener('DOMContentLoaded', toutMonScript);
function toutMonScript(){
    "use strict";
    const form = document.forms['form-formation'];
    let popupErreur = document.getElementById('erreur');
    let btClose = document.getElementsByTagName('i');
    let com = document.getElementById('commentaire');
    const maxCara = 150;

    //debut de la fonction qui va controler le formulaire
    form.addEventListener('submit',checkForm);
    function checkForm (evt){
        const message = [];
        const mail = document.getElementById('email');
        let erreur;
        let tel;
        let errTel =0;
        let elementForm;
        let btRadioChecked =0;
        let nbCheckbox= 0;
        let box = 0;
        let age;
        const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*$/;

            for (let i = 0; i < form.elements.length; i++) {
                elementForm = form.elements[i];
                elementForm.setAttribute('class', 'valide'); // cette class entoure en vert les champs qui sont bien remplis.


                if (elementForm.type == 'radio' && elementForm.checked) { // quand on coche un btRadio il prend la valeur 1
                    btRadioChecked = 1;
                }
                if (elementForm.type == "tel"){ // on récupère le numero de tel pour le controler avec la regex
                    tel = elementForm.value;
                    if (!telRegex.test(tel)){
                        errTel++;
                    }
                }
                if (elementForm.type == 'number'){ // on test l'age en récuperant la valeur donnée
                    age = elementForm.value;
                }
                if (elementForm.type == 'checkbox'){
                    nbCheckbox++;
                    if (elementForm.checked){
                        box++;
                    }
                }
                try { //ce try dans la boucle regarde tous les champs de texte vide
                    if (elementForm.value == '') throw 1;
                    if (errTel > 0) throw 2;
                    if (age <0 || age > 150) throw 3; // l'age est controlé pour etre compris entre 0 et 150 ans. sinon l'age n'est pas valide

                } catch (error) {
                    switch (error) {
                        case 1:
                            elementForm.setAttribute('class', 'erreur'); // on donne une bordure rouge aux champs vides
                            erreur = "il faut remplir le champs"+ " " + elementForm.name;
                            message.push(erreur);
                            break;
                        case 2: erreur = "le numéro de telephone n'est pas valide";
                            message.push(erreur);
                            errTel = 0; //reinitialisation du compte d'erreur pour stopper la boucle
                            break;
                        case 3 : erreur = "l'age n'est pas valide"
                            message.push(erreur);
                            age = 0; //reinitialisation de l'age pour stopper la boucle
                            break;
                        default:
                    } // end of switch
                }//end of catch
            }// end of for
        try{ // ici on test si au moins un bouton radio a ete coché et si l'email est validé sans boucler dessus
            if (nbCheckbox > 0 && box == 0) throw 4;
            if (btRadioChecked < 1) throw 10;
            if (!emailRegex.test(mail.value)) throw 2;
        } catch (error){
                switch (error){
                    case 2 : erreur = "le mail n'est pas valide";
                        message.push(erreur);
                    break;
                    case 4 : erreur = "il faut choisir une passion";
                        message.push(erreur);
                        break;
                    case 10 : erreur = "il faut selectionner un niveau";
                        message.push(erreur);
                    break;
                    default:
                }
        }
            finally { // ici toutes les erreurs du formulaires vont etre combinées dans une popup qui s'ouvrira au click.
                if (message.length > 0){
                    popupErreur.setAttribute('class', 'popup');
                } else {
                    popupErreur.setAttribute('class', 'hidden');
                }

            for (let i=0; i<message.length; i++){ // on boucle sur tous les elements du tableau d'erreur pour les rajouter dans la popup
                popupErreur.children[1].insertAdjacentHTML('afterbegin', '<p>'+message[i]+'</p>');
            }

        }
        evt.preventDefault();
    } //end function checkForm
    // fonction nombre de cara restant dans la partie commentaire
    com.addEventListener('keyup', function (evt){
        limiteCara(evt, maxCara);
    });
    com.insertAdjacentHTML('afterend', '<p id="com">'); // on insere une balise p apres le textarea

    function limiteCara(evt, maxCara){ //parametre maxCara va definir le nombre toléré de caractères
        let p = document.getElementById('com');
        let nbFrappe = com.value.length;
        let caraRestant = maxCara - nbFrappe
        let nbCaraRestant = "il vous reste "+ caraRestant + "caractère(s)";
        if (nbFrappe > maxCara){
            com.value = com.value.substring(0, maxCara);
        }
        p.innerHTML = nbCaraRestant; // on insere dans la balise p le nombre de cara restant
    } // end of function

    // fonction pour fermer la popup
    btClose[8].addEventListener('click', function (){
        closePopup();
    });
    btClose[8].addEventListener("mouseover", function (){
        btClose[8].style.cursor = "pointer";
    });
    function closePopup(){
        popupErreur.setAttribute('class', 'hidden');// "hidden" class par defaut de la div popup
        popupErreur.children[1].innerHTML = '<p>'; // réinitialise les messages dans la popup
    }
}//end of function end of script