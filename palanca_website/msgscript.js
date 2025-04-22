const graduationDate = new Date('2025-05-26T00:00:00');
currentDate = Date.now();
timeTillGrad = Math.round((graduationDate-currentDate)/(1000 * 60 * 60 * 24));

document.getElementById('days').innerText = (String(timeTillGrad) + ' days...');

const namelist = [
    'ALBARRACIN KARL GABRIEL D.',
    'ALCOMENDRAS XHUN EXHAEL Y.',
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
    'EBOA JOHN JOSHUA J.',
    'EMBATE DOMINIC RHOWEL A.',
    'EURAOBA DAVID CHRISTIAN D.',
    'GALAPON CHRISTIAN MELLE',
    'GALLOGO CHRISTIAN Q.',
    'GETIGAN DWAYNE JUNE X.',
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
    'ROSOLADA DASHA VEI X.',
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

const card_number = document.location.href.split('?')['1'].split('&')[0].split('=')[1];

const img_container = document.getElementById("settable-img");

img_container.setAttribute("src", "./msg_imgs/" + String(card_number) + ".webp");
img_container.setAttribute("alt", namelist[card_number - 1])

document.title = "Message for " + namelist[card_number - 1].split(' ')[0] + ", " + namelist[card_number - 1].split(' ')[1]

document.getElementById("msg-form").addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbz7mEOsksMUQBxsNUuaS0vlpzOOaQemgppHAf6y1zduF-pbYI4wt7b-QfxINKka_Iig/exec", {
        method: "POST",
        body: JSON.stringify({
            "receiver":namelist[card_number - 1],
            "sender":document.getElementById("name").value,  
            "msg":document.getElementById("msg").value
        })
        }
    )
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        alert("Message sent successfully!");
        document.getElementById("msg").value = "";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Oops! Something went wrong.");
    });
    
})