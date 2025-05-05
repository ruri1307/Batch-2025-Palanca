const graduationDate = new Date('2025-05-26T00:00:00');
currentDate = Date.now();
timeTillGrad = Math.round((graduationDate-currentDate)/(1000 * 60 * 60 * 24));

document.getElementById('days').innerText = (String(timeTillGrad) + ' days...');

const to_home = document.getElementsByClassName("nav-logo")[0];

to_home.addEventListener("click", function() {
    window.location = "./";
});

const cardlist = document.getElementsByClassName('card');
const hoverlist = document.getElementsByClassName('tooltip-text');
const namelist = [
    'ALBARRACIN, KARL GABRIEL D.',
    'ALCOMENDRAS, XHUN EXHAEL Y.',
    'ARSHAD, ROOHI A.',
    'BALILI, JIGS J.',
    'BARIRING, ANGELICA SHANE O.',
    'BARRO, ZHANE ERICA C.',
    'BASIO, CHRISTELLE KAYE A.',
    'BAUTISTA, ANGELO PHILIIP A.',
    'BAYA, RON HERMAN C.',
    'BOLTIADOR, RAINFIALA DAXEN D.',
    'CAINTIC, CZAR KENZO J.',
    'CAMARILLO, JAML MICHAEL S.',
    'CAÑADA, RYLLI FRANCIS C.',
    'CAÑO, MARIA ELIZA P.',
    'CARAMPATAN, ARCHY ANGAELO B.',
    'CATACUTAN, SHAWN R.',
    'CHATTO, THRESIA MAERIN L.',
    'CLARION, ALES MARIYA X.',
    'COMENDADOR, JOCHEBED D.',
    'CONCEPCION, ELVIRA ROSS R.',
    'COSIDO, JOHN POWELL C.',
    'DAÑAS, THOMAS JACOB P.',
    'DE, GUZMAN SEBASTIAN LUIS F.',
    'DEGALA, SHANEL KYLE V.',
    'DINALO, KAERYN A.',
    'DIZON, MAEVE E.',
    'DUMAYAC, JESS N.',
    'DURANA, JOHN CEDRIC C.',
    'EBOA, JOHN JOSHUA J.',
    'EMBATE, DOMINIC RHOWEL A.',
    'EURAOBA, DAVID CHRISTIAN D.',
    'GALAPON, CHRISTIAN  X.',
    'GALLOGO, CHRISTIAN Q.',
    'GETIGAN, DWAYNE JUNE X.',
    'GOCOTANO, ALEXANDRA YESHA B.',
    'HALASAN, JOEI HAVEN L.',
    'HEYROSA, LOURD OÑIN B.',
    'HUPP, JANA SOFIA E.',
    'IROY, MARIE MONTSERRAT C.',
    'JABINES, PETER PAUL A.',
    'JOSE, ZYRA CHASTE M.',
    'JUAN, ENZO JEMYL P.',
    'JUMALON, ERROL MARK T.',
    'KINDICA, YULA ISABEL G.',
    'KINDICA, YUNA MARIE G.',
    'LAGUNSAD, MARK RUSSELL A.',
    'LAUREL, SAMANTHA D.',
    'LAYESE, VIENZO TROY S.',
    'LLANTO, ZENDRICK RHYSS A.',
    'LUARDO, ARABELLA S.',
    'LUMBO, EDUARD CHRIS A.',
    'MAR, CAIRISTONA REBECCA G.',
    'MERCADO, NICOLE AIM D.',
    'MOCOY, CHIARA MARTELLA J.',
    'MONREAL, REX ANGELO T.',
    'MONTECILLO, RHEIZ JANAE P.',
    'MONTECLAR, LEIA YZABEL Y.',
    'MONTECLARO, LOUISE NIÑA B.',
    'NASIBOG, REBB JORENZ B.',
    'OFIANGA, OENMAR DEUS O.',
    'ORTIZ, ELIAS III M.',
    'PADILLA, RHEA JEANNE P.',
    'PAREDES, ALYANA YRONN W.',
    'PASU-IT, AYESHA LEA B.',
    'PATIÑO, JANA RAIZA F.',
    'PEREZ, STEVEN LEE M.',
    'PORTRIAS, JIREH CONCEPCION B.',
    'PRECILLA, ZYRELLE JOHN A.',
    'QUILANITA, JOHN ODYSSEY P.',
    'QUIMADA, DEVONNE KLAUD J.',
    'RACOMA, BHOMEL J.',
    'RIÑA, JULIA FRANCESCA C.',
    'ROSOLADA, DASHA VEI X.',
    'SAAVEDRA, JULIVER V.',
    'SAMARES, FRANCES JAMIE F.',
    'SOLENG, YEONA ELLICE L.',
    'SOLON, CURT KEVIN M.',
    'SONTOUSIDAD, ISIDRO MANUEL B.',
    'SUAN, JAYSON A.',
    'SUAZO, FRIZCHE CAIRON PAUL V.',
    'TALA, ROMEL ISAIAH I.',
    'TANGPOS, GERALDINE F.',
    'TAPE, PRINCE KYLE AEDAM G.',
    'TORRES, JERUSALEM CHRISTIAN A.',
    'VILLARIN, JOANNAH DEL G.',
    'VILLEGAS, TRISTAN JOSHUEL G.',
    'YANKIN, MARY MARGARET A.'
];

for (let index = 0; index < cardlist.length; index++) {

    const element = cardlist[index];
    const element_tooltip = hoverlist[index];

    function messageRedirect(){
        window.location = "./msg.html?card=" + encodeURIComponent(element.id.slice(4));
    }
    
    element.setAttribute("alt", namelist[index]);
    element_tooltip.innerText = namelist[index].slice(0, (namelist[index].length) - 2);
    element.addEventListener('click', messageRedirect);
}

const searchbtn = document.getElementById('search-btn');
const searchbar = document.getElementById('search-bar');

searchbar.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        search();
    }
})

function search(){
    match = ''
    index = 0;
    for (index = 0; index < namelist.length; index++){
        if (namelist[index].includes(searchbar.value.trim().toUpperCase())){
            match = searchbar.value.trim();
            break;
        }
    }
    index++;
    if (match !=''){
        document.getElementById('card' + index).scrollIntoView({
            behavior: 'smooth',     
            block: 'center'
          });
        setTimeout(() => {
           window.scrollBy({ top: 270.5, behavior: 'smooth' }); 
        }, 0);
        document.getElementsByClassName('card')[index - 1].focus();
        searchbar.value = "";
    } else if (searchbar.value.trim() != "") {
        alert('Not Found!');
    }
}

searchbtn.addEventListener('click', search);

const tutorial = document.getElementsByClassName('poppup')[0];

tutorial.addEventListener('click', function(){
    tutorial.style.display = 'none';
});

if (!localStorage.getItem('firstVisit')) {
    localStorage.setItem('firstVisit', 'false');
    tutorial.style.display = 'flex';
} 

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});