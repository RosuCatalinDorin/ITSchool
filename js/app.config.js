
$(document).ready(function() {
    var CONFIG = (function() {
    let homeHeader =  "Învățăm împreună unii de la ceilalți.";
    let homeSubHeader = "Pregătește-te pentru ziua care va veni cu noi provocări. Înscrie-te la Speak Programming și învață să vorbești despre prorpiul tău cod.";
    let courseHeader = "Vino să învățăm împreună!";
    let whyUsHeader = "De ce noi?";

    let whoWeAre = "Cine suntem?";
    let whoWeAreParagraph = "Suntem o echipă tânară, cu o atitudine proactivă și cu dorința de a introduce oameni ca tine în lumea programării prin multă practică, pregătire de calitate și un mod de învățare interactiv.";
    let whyWeDoThis = "Motivația noastră?";
    let whyWeDoThisParagraph = "Dorința noastră este sa te ajutăm să obții cariera pe care ti-o dorești. Ne focusăm pe oameni și nevoile lor, acestea fiind o parte importantă din ADN-ul nostru. Cunoaștem dificultățile reprofilării, de aceea dorim să facem acești pași împreună cu tine.";

    let howWeDoThis = "Cum te ajutăm?";
    let howWeDoThisParagraph = "Te vom ajuta să îți setezi obiective referitoare la cariera ta. Te vom ajuta să îți creezi o gândire analitică, bazată pe rezolvarea problemelor. Vom crea o aplicație funcțională, gata de producție și te vom îndruma cu atenție să obții cariera pe care ți-o dorești.";

    let trainerCata = "Mă bucur că ai ales să faci o schimbare în cariera ta și îți apreciez mult curajul de a descoperi noi orizonturi.  Sunt convins ca oricine poate învăța programare, însă are nevoie de doua lucruri, răbdare și perseverență.";
    let trainerIon = "Programarea este ca o joacă, nu te poți plictisi de ea pentru ca in fiecare zi înveți ceva nou. Prin acest prilej te invit să colaborăm și să fim, împreună, acea schimbare pe care ne-o dorim.";

    let colaboratori = "Cu cine vei colabora?";


    let infoCursHeader = "Informații curs";
    let programaCurs = "Programă curs";


    return {
        homeHeader: {
            homeHeader: homeHeader,
            homeSubHeader: homeSubHeader,
            courseHeader: courseHeader,
            whyUsHeader: whyUsHeader,
            whoWeAre: whoWeAre,
            whoWeAreParagraph: whoWeAreParagraph,
            whyWeDoThis: whyWeDoThis,
            whyWeDoThisParagraph: whyWeDoThisParagraph,
            howWeDoThis: howWeDoThis,
            howWeDoThisParagraph: howWeDoThisParagraph ,
            trainerCata: trainerCata,
            trainerIon: trainerIon,
            colaboratori:colaboratori
        },

        detaliiCurs: {
            infoCursHeader: infoCursHeader,
            programaCurs: programaCurs
        }
    };
  }($));
  $('.home-main-header').html(CONFIG.homeHeader.homeHeader);
  $('.home-main-sub-header').html(CONFIG.homeHeader.homeSubHeader);
  $('.courseHeader').html(CONFIG.homeHeader.courseHeader);

  $('.why-us-header').html(CONFIG.homeHeader.whyUsHeader);
  $('.whoWeAre').html(CONFIG.homeHeader.whoWeAre);
  $('.descriere-who-we-are').html(CONFIG.homeHeader.whoWeAreParagraph);
  $('.whyWeDoThis').html(CONFIG.homeHeader.whyWeDoThis);

  $('.descriere-why').html(CONFIG.homeHeader.whyWeDoThisParagraph);

  $('.howWeDoThis').html(CONFIG.homeHeader.howWeDoThis);
  $('.howWeDoThisParagraph').html(CONFIG.homeHeader.howWeDoThisParagraph);
  
  $('.trainerCata').html(CONFIG.homeHeader.trainerCata);
  $('.trainerIon').html(CONFIG.homeHeader.trainerIon);
  $('.colaboratori').html(CONFIG.homeHeader.colaboratori);



});