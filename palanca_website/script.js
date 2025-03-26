const graduationDate = new Date('2025-05-26T00:00:00');
currentDate = Date.now()
timeTillGrad = Math.round((graduationDate-currentDate)/(1000 * 60 * 60 * 24))

document.getElementById('counter').innerText = (String(timeTillGrad) + ' days...');

const cardlist = document.getElementsByClassName('card');
const namelist = [
    'ALBARRACIN KARL GABRIEL D.',
    'ALCOMENDRAS, XHUN EXHAEL Y.',
    'ARSHAD ROOHI A.',
    'BALILI JIGS J.',
    'BARIRING ANGELICA SHANE O.',
    'BARRO ZHANE ERICA C.',
    'BASIO CHRISTELLE KAYE A.',
    'BAUTISTA ANGELO PHILIIP A.',
    'BAYA RON HERMAN C.',
    'BOLTIADOR RAINFIALA DAXEN D.',
    'CAINTIC CZAR KENZO J.',
    'CAMARILLO JAML MICHAEL S.',
    'CAÑADA RYLLI FRANCIS C.',
    'CAÑO MARIA ELIZA P.',
    'CARAMPATAN ARCHY ANGAELO B.',
    'CATACUTAN SHAWN R.',
    'CHATTO THRESIA MAERIN L.',
    'CLARION ALES MARIYA',
    'COMENDADOR JOCHEBED D.',
    'CONCEPCION ELVIRA ROSS R.',
    'COSIDO JOHN POWELL C.',
    'DAÑAS THOMAS JACOB P.',
    'DE GUZMAN SEBASTIAN LUIS F.',
    'DEGALA SHANEL KYLE V.',
    'DINALO KAERYN A.',
    'DIZON MAEVE E.',
    'DUMAYAC JESS N.',
    'DURANA JOHN CEDRIC C.',
    'EBOA JOHN JOSHUE J.',
    'EMBATE DOMINIC RHOWEL A.',
    'EURAOBA DAVID CHRISTIAN D.',
    'GALAPON CHRISTIAN MELLE',
    'GALLOGO CHRISTIAN Q.',
    'GETIGAN DWAYNE JUNE',
    'GOCOTANO ALEXANDRA YESHA B.',
    'HALASAN JOEI HAVEN L.',
    'HEYROSA LOURD OÑIN B.',
    'HUPP JANA SOFIA E.',
    'IROY MARIE MONTSERRAT C.',
    'JABINES PETER PAUL A.',
    'JOSE ZYRA CHASTE M.',
    'JUAN ENZO JEMYL P.',
    'JUMALON ERROL MARK T.',
    'KINDICA YULA ISABEL G.',
    'KINDICA YUNA MARIE G.',
    'LAGUNSAD MARK RUSSELL A.',
    'LAUREL SAMANTHA D.',
    'LAYESE VIENZO TROY S.',
    'LLANTO ZENDRICK RHYSS A.',
    'LUARDO ARABELLA S.',
    'LUMBO EDUARD CHRIS A.',
    'MAR CAIRISTONA REBECCA G.',
    'MERCADO NICOLE AIM D.',
    'MOCOY CHIARA MARTELLA J.',
    'MONREAL REX ANGELO T.',
    'MONTECILLO RHEIZ JANAE P.',
    'MONTECLAR LEIA YZABEL Y.',
    'MONTECLARO LOUISE NIÑA B.',
    'NASIBOG REBB JORENZ B.',
    'OFIANGA OENMAR DEUS O.',
    'ORTIZ ELIAS III M.',
    'PADILLA RHEA JEANNE P.',
    'PAREDES ALYANA YRONN W.',
    'PASU-IT AYESHA LEA B.',
    'PATIÑO JANA RAIZA F.',
    'PEREZ STEVEN LEE M.',
    'PORTRIAS JIREH CONCEPCION B.',
    'PRECILLA ZYRELLE JOHN A.',
    'QUILANITA JOHN ODYSSEY P.',
    'QUIMADA DEVONNE KLAUD J.',
    'RACOMA BHOMEL J.',
    'RIÑA JULIA FRANCESCA C.',
    'ROSOLADA DASHA VEI',
    'SAAVEDRA JULIVER V.',
    'SAMARES FRANCES JAMIE F.',
    'SOLENG YEONA ELLICE L.',
    'SOLON CURT KEVIN M.',
    'SONTOUSIDAD ISIDRO MANUEL B.',
    'SUAN JAYSON A.',
    'SUAZO FRIZCHE CAIRON PAUL V.',
    'TALA ROMEL ISAIAH I.',
    'TANGPOS GERALDINE F.',
    'TAPE PRINCE KYLE AEDAM G.',
    'TORRES JERUSALEM CHRISTIAN A.',
    'VILLARIN JOANNAH DEL G.',
    'VILLEGAS TRISTAN JOSHUEL G.',
    'YANKIN MARY MARGARET A.'
];

for (let index = 0; index < cardlist.length; index++) {

    const element = cardlist[index];

    function messageRedirect(){
        console.log(element.id);
        window.location = "./msg.html";
    }

    element.addEventListener('click', messageRedirect);
}

const searchbtn = document.getElementById('searchbtn');
const searchbar = document.getElementById('searchbar');
function search(){
    match = ''
    index = 0;
    for (index = 0; index < namelist.length; index++){
        if (namelist[index].includes(searchbar.value.toUpperCase())){
            match = searchbar.value;
            break;
        }
    }
    index++;
    if (index != 0 && match !=''){
        window.location.hash = 'card' + String(index);
    } else {
        alert('Not Found!');
    }
}

searchbtn.addEventListener('click', search);

