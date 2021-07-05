document.addEventListener('DOMContentLoaded', toutMonScript);
function toutMonScript (){
    "use strict"
    const btMenu = document.getElementById('menu');
    const btCloseMenu = document.getElementById('close-aside');
    const aside = document.getElementById('first-aside');
    const snr = document.getElementById('snr');
    const baikowski = document.getElementById('baikowski');
    const poste = document.getElementById('poste');
    const aptar = document.getElementById('aptar');
    const pack = document.getElementById('pack');
    const btAbout = document.getElementById('btabout');
    const btHobbies = document.getElementById('bthobbies');
    const btProjets = document.getElementById('btprojets');
    const secAbout = document.getElementById('about-me');
    const secHobbies = document.getElementById('hobbies');
    const secProjets = document.getElementById('projets');
    const office =document.getElementById('office');
    const photo =document.getElementById('photo');
    const video =document.getElementById('video');
    const stream =document.getElementById('stream');
    const afpa = document.getElementById('afpa');
    const dueti = document.getElementById('dueti');
    const dut   = document.getElementById('dut');
    const japan = document.getElementById('japan');
    const france = document.getElementById('france');
    const online = document.getElementById('online');


    btMenu.addEventListener('click', openAside);
    btMenu.addEventListener('mouseover' ,function (){
        btMenu.style.cursor = 'pointer';
    });
    btCloseMenu.addEventListener('mouseover', function (){
        btCloseMenu.style.cursor = 'pointer';
    })
    btCloseMenu.addEventListener('click', closeAside);
    function openAside (){
        aside.style.display = "block";
        btMenu.setAttribute('class','hiddenbt');
    }
    function closeAside(){
        aside.style.display = 'none';
        btMenu.setAttribute('class','menu');
    }

    snr.addEventListener('click',showDescription);
    baikowski.addEventListener('click',showDescription);
    poste.addEventListener('click',showDescription);
    aptar.addEventListener('click',showDescription);
    pack.addEventListener('click',showDescription);


    snr.addEventListener('mouseover',mouseStyle);
    baikowski.addEventListener('mouseover',mouseStyle);
    poste.addEventListener('mouseover',mouseStyle);
    aptar.addEventListener('mouseover',mouseStyle);
    pack.addEventListener('mouseover',mouseStyle);


    dueti.addEventListener('mouseover', function (){
        this.style.cursor = 'pointer';
    })
    dut.addEventListener('mouseover', function (){
        this.style.cursor = 'pointer';
    })
    afpa.addEventListener('mouseover', function (){
        this.style.cursor = 'pointer';
    })

    office.addEventListener('mouseover', mouseOverShowDescription);
    office.addEventListener('mouseout', mouseOuthiddeDescription);

    photo.addEventListener('mouseover', mouseOverShowDescription);
    photo.addEventListener('mouseout', mouseOuthiddeDescription);

    video.addEventListener('mouseover', mouseOverShowDescription);
    video.addEventListener('mouseout', mouseOuthiddeDescription);

    stream.addEventListener('mouseover', mouseOverShowDescription);
    stream.addEventListener('mouseout', mouseOuthiddeDescription);

    btAbout.addEventListener('click', function (){
        secAbout.classList.toggle('visible');
    });
    btHobbies.addEventListener('click', function (){
        secHobbies.classList.toggle('visible');
    });
    btProjets.addEventListener('click',function (){
        secProjets.classList.toggle('visible');
    });

    dueti.addEventListener('click', function (){
        japan.classList.toggle('visible-jap');
    });
    dut.addEventListener('click', function (){
        france.classList.toggle('visible-jap');
    })
    afpa.addEventListener('click', function (){
        online.classList.toggle('visible-jap');
    })


    function showDescription (){
        this.children[1].classList.toggle('visible');
        this.children[1].style.paddingTop = '10px';
    }

    function mouseStyle (){
        this.children[0].style.cursor = 'pointer';
    }

    function mouseOverShowDescription () {
        this.children[0].setAttribute('class','visible');
    }
    function mouseOuthiddeDescription () {
        this.children[0].setAttribute('class','hidden');
    }


}