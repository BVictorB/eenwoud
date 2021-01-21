// Trees
import beuk from './images/trees/beuk.png'
import denneboom from './images/trees/denneboom.png'
import gatalpa from './images/trees/gatalpa.png'
import ginkobiloba from './images/trees/ginkobiloba.png'
import noorseesdoorn from './images/trees/noorseesdoorn.png'
import olijfboom from './images/trees/olijfboom.png'
import populier from './images/trees/populier.png'
import rodebeuk from './images/trees/rodebeuk.png'
import treurbeuk from './images/trees/treurbeuk.png'
import zomereik from './images/trees/zomereik.png'

// Pictures
import han1 from './images/pictures/han1.png'
import han2 from './images/pictures/han2.png'
import geert1 from './images/pictures/geert1.png'
import geert2 from './images/pictures/geert2.png'
import marco1 from './images/pictures/marco1.jpg'
import marco2 from './images/pictures/marco2.jpg'
import marian1 from './images/pictures/marian1.jpg'
import marian2 from './images/pictures/marian2.jpg'
import popko1 from './images/pictures/popko1.jpg'
import popko2 from './images/pictures/popko2.jpg'
import marieke1 from './images/pictures/marieke1.jpg'
import marieke2 from './images/pictures/marieke2.jpg'
import lotte1 from './images/pictures/lotte1.jpeg'
import lotte2 from './images/pictures/lotte2.jpeg'
import katrien1 from './images/pictures/katrien1.jpg'
import katrien2 from './images/pictures/katrien2.jpg'
import gonul1 from './images/pictures/gonul1.jpg'
import gonul2 from './images/pictures/gonul2.jpg'

// Audio
import audioPopko from './audio/popko.mp3'
import audioLotte from './audio/lotte.mp3'
import audioMarian from './audio/marian.mp3'
import audioMarco from './audio/marco.mp3'


const randomNumber = (limit) => Math.random() * limit

const trees = [
  {
    tree: 'zomereik',
    emotion: 'nostalgie',
    name: 'Han Oomen',
    text: `De boom is 'onze boom'; de boom waar ik als kind, samen met mijn ouders en zusjes, vele warme dagen heb gespeeld en vertoefd. Als kind ervaar je hoe fijn en bijzonder zo'n (wijdvertakte) boom is -je klimt erin, je verstopt je erin, je schuilt eronder-, maar je realiseert je dat allemaal niet of amper, dat gebeurt pas later, als je erop terugkijkt. Daarnaast: het is een eik, karakteristiek voor het Brabantse zandlandschap, waar ik me thuis voel.`,
    text2: `Ik draag deze boom voor, omdat hij door zijn vorm én ligging bij uitstek een speel- en vertoefboom is  Dat spelen beschreef ik zo-even al enigszins. Het vertoeven heeft alles te maken met de plaats waar de boom staat: op (zacht) zand, met (prachtig) uitzicht op de rest van de (reliëfrijke, half open) zandverstuiving. Het voelt er als puur natuur, hoewel de verstuiving de afgelopen eeuwen vermoedelijk door de mens veroorzaakt. Deze boom, die kan zijn aangeplant om verstuiving van dorpen te voorkomen, lijkt te zijn gebruikt voor hakhout, waardoor meerdere stammen ontstonden. Zo verknoopt de boom jeugdsentiment, Brabantse natuur en cultuur.`,
    image: zomereik,
    pictures: [han1, han2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62],
    province: 'Noord-Brabant',
    treeAge: 100,
    personAge: 56,
    expectedAge: 600
  },
  {
    tree: 'rode beuk',
    emotion: 'geschiedenis',
    name: 'Geert van Pelt',
    text: `Sinds 5 jaar woon ik in het Rooi Hartenpark, achter het voormalige klooster van de Rooi Harten, zoals ze in Tilburg werden genoemd. Het klooster werd in 1892 gesticht en in 1890 zijn daar drie rode beuken geplant. Samen hebben ze de opkomst en de neergang van de orde meegemaakt. Deze bomen zie ik vrijwel dagelijks en vormen een prachtig trio met een bijzondere uitstraling.`,
    text2: `Ik draag deze drie bomen voor omdat ze al 130 jaar onafscheidelijk zijn en het lijkt me bijzonder om hun nakomelingen in het Eenwoud te laten opgroeien.`,
    image: rodebeuk,
    pictures: [geert1, geert2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [5.06, 51.55],
    province: 'Noord-Brabant',
    treeAge: 130,
    personAge: 80,
    expectedAge: 600
  },
  {
    tree: 'populier',
    emotion: 'plezier',
    name: 'Marco Lichtenberg',
    text: `Dit is de appelboom in onze tuin. We hebben nog nooit gesnoeid en elk jaar geeft hij/zijn ons meer appels. Deze appels gebruiken we om een appeltaart van te maken en om appel-partjes te drogen. Het leuke is dat de druivenrank die naast deze boom tegen een muur omhoog groeit, elk jaar z'n best doet om in de appelboom te groeien. En elk jaar lukt dat weer.`,
    text2: `Voor ons is deze boom een teken, dat de natuur haar eigen weg wel vindt, ook zonder dat de mens ingrijpt.`,
    image: populier,
    pictures: [marco1, marco2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [5.06, 51.55],
    province: 'Noord-Brabant',
    treeAge: 50,
    personAge: 49,
    expectedAge: 600,
    audio: audioMarco
  },
  {
    tree: 'beuk',
    emotion: 'liefde',
    name: 'Marian van Ast',
    text: `Het is een beukenboom die ik geplant heb op deze plek, naast een bankje. Deze boom is een plek om naar toe te gaan voor mij en mijn partner en mijn cadeaukinderen. Ik wil dat de liefde die groeit voor hun zichtbaar wordt in de groei van deze beukenboom.
    Dit zal dan ook als ik er niet meer ben een gedenkplaats zijn voor hun. Het planten heb ik samen met hun gedaan en we gaan hier geregeld heen om de groei te volgen. Het is een hele mooie stille plek op de Veluwe die voor mijzelf van grote betekenis was toen ik zelf ook 20 was, net zo oud als mijn jongens nu zijn. Ik heb daar in die tijd veel gewandeld en paardgereden. In die periode van mijn leven ben ik erg veel in het bos geweest en is het iedere keer weer een thuisgevoel als ik daar terug kom. Ik noem het soms ook wel " mijn bos" .
    Daarom is dit een heel persoonlijk verhaal waarin ik hopelijk nog veel jaarringen zelf mag gaan bewonderen.`,
    text2: `Ik denk dat dit wel een boom met een persoonlijk verhaal is.`,
    image: beuk,
    pictures: [marian1, marian2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [5.06, 51.55],
    province: 'Noord-Brabant',
    treeAge: 1,
    personAge: 57,
    expectedAge: 600,
    audio: audioMarian
  },
  {
    tree: 'treurbeuk',
    emotion: 'plezier',
    name: 'Popko Cuperus',
    text: `Van deze monumentale groene treurbeuk word ik altijd heel vrolijk . Ik ken hem al 53 jaar en zie hem bijna wekelijks . Het blijft een overweldigende ervaring om er onder te staan , omringd door de hangende takken en bladeren . Je staat er dan in een door de boom afgesloten ruimte waarin de kleur en lichtinval , afhankelijk van het weer en het seizoen , altijd anders is .`,
    text2: `Deze groene treurbeuk ( Fagus sylvatica Pendula voor de liefhebbers ) mag in geen enkel woud ontbreken.`,
    image: treurbeuk,
    pictures: [popko1, popko2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [6.1, 52.04],
    province: 'Gelderland',
    treeAge: 200,
    personAge: 61,
    expectedAge: 600,
    audio: audioPopko
  },
  {
    tree: 'populier',
    emotion: 'plezier',
    name: 'Marieke van Ooijen',
    text: `Onder de perenboom bij Tapperij van Ooijen

    Meneer Spieker geboren in 1880 vertelde ooit dat de boom er al stond toen hij geboren werd en destijds al een oude dikke boom was. De boom is dus volgens de verhalen van vroeger zeker al 150 jaar oud.
    De karakteristieke boom staat op de gezellige binnenplaats van de kroeg die 3 generaties in onze familie was, Tapperij van Ooijen. De familie is gehecht aan de boom. Er zijn vele dingen verandert in de loop der jaren, maar de boom bleef staan.
    Mijn vader kwam uit een groot gezin met 8 kinderen. Elk jaar moest er geholpen worden om de peren van de boom te halen. Dat ging vroeger nog niet zo makkelijk met een hoogwerker zoals tegenwoordig.
    Volgens de wijsheid van mijn oom Willem (gepensioneerd tuinman) is het een olifantspeer, maar op google of in de encyclopedie is niets te vinden over deze peer. Zegt dit wat over de wijsheid van mijn oom of over de oudheid van de peer. Wij weten het niet. Het is dus interessant om hier in te duiken.
    De olifantspeer is overigens niet lekker om rauw te consumeren. Na een week wordt de peer meelderig en is dan niet meer lekker. Deze peer is wel geschikt om te drogen en wekken.
    Mijn vader heeft al eens aan mijn oom Willem gevraagd of hij de bloesem niet kapot kon sproeien want peren die met de kermis, de drukste dagen in het jaar van de kroeg, naar beneden vallen, dat is natuurlijk niet de bedoeling. Ook heeft hij weleens een advertentie in plaatselijke krant geplaatst: Gratis peren ophalen. Mensen wisten niet dat ze ze zelf nog moesten plukken en haakten af dus toen waren was mijn vader er nog niet vanaf voor de kermis. Jaren later werd de binnenplaats tijdens de kermis met zeilen overkapt en daarmee was het probleem van de regen en de zon opgelost maar ook van de vallende peren.                                
    Vele liefdes zijn ontstaan onder de perenboom tijdens de vele feestdagen, feestjes, terras. Mijn vader zei altijd als de perenboom kon horen waren er veel verhalen bewaard gebleven.
    Mijn oom Willem heeft al enten van de boom gemaakt. Maar omdat mijn eigen tuin niet geschikt is om een perenboom mooi groot te laat groeien is een plek in het Eenwoud bos geweldig alternatief om de geschiedenis te laten voortleven.
    Mijn vader heeft 47 jaar met hart en ziel de kroeg gerund. Hij was de beste kroeg baas die er is. In september 2019 is de kroeg verkocht en is dus fysiek geen onderdeel meer van onze familie. Ruim een half jaar daarna is heel spijtig mijn vader overleden. Ik had hem nog zo graag fluitend onder de perenboom zien zitten genietend van zijn rust.  
    
    De perenboom staat er nog steeds en blijft er staan op een unieke historische plek in het centrum van Lichtenvoorde.
    Nieuwe generaties gaan nieuwe herinneringen maken onder de perenboom bij van Ooijen………
    
    `,
    text2: `De boom neemt een belangrijke plek in in onze familie , neemt veel verhalen met zich mee en brengt bovenal mensen samen. Een stuk geschiedenis in Lichtenvoorde dat herinnert moet blijven worden.`,
    image: populier,
    pictures: [marieke1, marieke2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [6.57, 51.98],
    province: 'Gelderland',
    treeAge: 150,
    personAge: 39,
    expectedAge: 600
  },
  {
    tree: 'olijfboom',
    emotion: 'liefde',
    name: 'Lotte van Dieren',
    text: `Ik heb deze boom als klein olijfje ruim 10 jaar geleden gekocht in Lochem samen met mijn nu overleden moeder. Voor op het dakterras bij mijn eerste eigen appartement in Amsterdam. De boom is daarna mee verhuisd naar de volgende benedenwoning in Amsterdam en daarna naar mijn huidige woning in Lochem. Terug naar 'onze roots' en op dat moment heb ik haar in de volle grond geplaatst. Als icoon voor 'thuis'. Na een jaar of twee settelen in de nieuwe omgeving is zijn 'ontploft' en mooier dan ooit. Zij floreert in alle opzichten, wat ook te zien is aan de hoeveelheid vruchten die zij draagt. Het voelt als een weerspiegeling van mijn eigen ontwikkeling, waarbij na het overlijden van mijn moeder 3 jaar geleden het verdriet zorgde voor persoonlijke ontwikkeling. Op de krachtige basis die er lag vanuit mijn jeugd. Ik voel me krachtig en levend. En maak steeds vaker keuzes waarbij ik floreer. Iedere keer als ik naar buiten kijk en mijn prachtige olijf zie besef ik me wat een geluk ik heb gehad en heb in mijn leven. ♥️`,
    text2: `Omdat zij voor mij staat voor het leven. Ik merk dat familie en vrienden die bij mij komen net zo genieten van de kracht en pracht van deze boom. Ik vind het een bijzonder mooi idee dat nog zoveel anderen gedurende hele lange tijd ook van haar (nazaten) kunnen genieten. `,
    image: olijfboom,
    pictures: [lotte1, lotte2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [6.39, 52.16],
    province: 'Gelderland',
    treeAge: 15,
    personAge: 40,
    expectedAge: 600,
    audio: audioLotte
  },
  {
    tree: 'gatalpa',
    emotion: 'geluk',
    name: 'Katrien van’t Hooft',
    text: `Deze boom staat bij onze buurman, dat is dus de eigenaar van de boom. Hij staat op de plek van de
    kas van Valkenheide, in Maarsbergen. Valkenheide is een landgoed dat ruim 100 jaar geleden is
    opgericht voor de opvang van moeilijk opvoedbare jongeren. Zij kregen hier een strenge opvang en
    leerden ook een vak, zo waren er allerlei plekken op het terrein voor timmerman, schoenmaker,
    metselaar, boer etc. Ze verbouwden hun eigen eten ook op het terrein en deze kas was daar een
    onderdeel van.
    Toe wij hier kwamen wonen (in 2011) was de kas leeg en het terrein verwaarloosd.  Sinds een jaar of
    zes is Jan van der Hoorn hier komen wonen, en heeft de kas en de kwekerij weer in ere herstelt. Hij
    verbouwt bijzondere tuinplanten op biologische wijze, het heet Sujaplant. Voor meer info over
    Valkenheide, zie de wiki pagina het museum Valkenheide. Het terrein heeft een rijke geschiedenis en
    is nog steeds in gebruik – sinds kort vooral voor gehandicapten.`,
    text2: `Wij zijn erg gelukkig op deze prachtige plek waar mooie natuur en sociale verbondenheid bij elkaar
    komen. In de zomer is de boom een plaatje in het grotere geheel, waar wij dagelijks langs lopen.
    Vooral door de mooie vorm, de bladeren en de bloemen. En heeft mooie eigenschappen, zoals
    vliegen- en muggen werend. Waardoor het heerlijk is om eronder te verblijven. De boom heeft ook
    een prachtige schors met allemaal hoekjes en gaatjes. Daar heeft de  buurman dus een kleine
    Boeddha in gezet. Het is de boom waar hij altijd onder uitrust van zijn werk op de kwekerij, en bij
    warm weer in de zomer slaapt hij er ook onder. Soms drinken we een kop koffie onder de boom.
    Ik denk dat hij prachtig zou passen in het Eenwoud. Vooral als hij ruimte krijgt om te groeien en niet
    gesnoeid wordt. Dan kan een iedere daar onder`,
    image: gatalpa,
    pictures: [katrien1, katrien2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [5.41, 52.04],
    province: 'Utrecht',
    treeAge: 80,
    personAge: 64,
    expectedAge: 600
  },
  {
    tree: 'zomereik',
    emotion: 'kalmerend',
    name: 'Gonul Hettema-Fidan',
    text: `"Mijn V-boom", gelegen in het Mheenpark in Apeldoorn, en ik hebben elkaar vlak na de corona-uitbraak leren kennen. Ik had last van heimwee en kon vanwege de corona-maatregelen niet even naar Turkije gaan, waar ik geboren en getogen ben.

    Ik ben altijd bezig geweest met het onderwerp "thuisgevoel". Toen ik mijn V-boom, een Nederlandse eik, voor de eerste keer tegen kwam, stond ik stil en stelde mezelf spontaan de vraag: "Wat voor keuzes maak je in het leven? Ga je linksaf of rechtsaf? Ben je Turk of Nederlander. Wat ben je eigenlijk? Moet je een keuze maken?"
    
    Ik voelde een sterke verbinding met de boom, alsof hij mijn gids was. Ik keek naar zijn majestueuze takken en stam - zo indrukwekkend! Langzaam kwam ik tot het inzicht dat ik geen keuze hoef te maken, niet de ene boven de andere identiteit hoef te stellen, maar dat het gaat over het accepteren dat ik al meerdere identiteiten heb, als meerdere takken aan een boom. Ik ben die boom die zich overal in de natuur thuis voelt, zijn wortels meeneemt en tegelijkertijd nieuwe wortels ontwikkelt. Ik ben er en ik mag er zijn.`,
    text2: `De rust in mijzelf en het me één voelen met de natuur - wat ik vanuit mijn kindertijd heel goed ken - kwamen langzaam terug. Ik koester mijn relatie met mijn "gids" en de overeenkomst in ons verhaal. Daarom draag ik deze boom voor voor het prachtige project 'Eenwoud'. `,
    image: zomereik,
    pictures: [gonul1, gonul2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [5.98, 52.22],
    province: 'Gelderland',
    treeAge: 90,
    personAge: 48,
    expectedAge: 600
  }
]

export default trees