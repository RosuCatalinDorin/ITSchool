
$(document).ready(function() {
    var CONFIG = (function() {
    let homeHeader =  "Invatam impreuna unii de la ceilalti.";
    let homeSubHeader = "Pregateste-te pentru ziua care va veni cu noi provocari. Inscrie-te la Speak Programming si invata sa vorbesti despre prorpiul tau cod.";
    let courseHeader = "Vino să învățăm împreună!";
    let whyUsHeader = "De ce noi?";

    let whoWeAre = "Cine suntem?";
    let whoWeAreParagraph = "Suntem o echipa tanara, cu o atitudine proactiva si cu dorinta de a introduce oameni ca tine in lumea progamarii prin multa practica, pregatire de calitate si un mod de invatare interactiv.";
    let whyWeDoThis = "Motivația noastră?";
    let whyWeDoThisParagraph = "Dorinta noastra este este sa te ajutam sa obtii cariera pe care ti-o doresti. Ne focusam pe oameni si nevoile lor, aceestea fiind o parte importanta din ADN-ul nostru. Cunoastem dificultatile reprofilarii, de aceea dorim sa facem acesti pasi impreuna cu tine.";

    let howWeDoThis = "Cum te ajutăm?"
    let howWeDoThisParagraph = "Te vom ajuta sa iti setezi obiective referitoare la cariera ta. Te vom ajuta sa iti creezi o gandire analitica, bazata pe rezolvare problemelor.Vom crea o aplicatie functionala, gata de productie si te vom indruma cu atentie sa obtii cariera pe care ti-o doresti.";

    let trainerCata = "Ma bucur ca ai ales sa faci o schimbare in cariera ta, iti apreciez mult curajul de a descoperi noi orizonturi.  Sunt convins ca oricine poate invata programare, insa are nevoie de doua lucruri, rabdare si perseverenta. ";
    let trainerIon = "Sunt pasionat de domeniul tehnologiei, imi plac provocarile, imi place creativitatea oamenilor din jurul meu, si imi place sa invat toate acele lucruri care fac diferenta. Prin acest prilej te invit si pe tine sa colaboram si sa fim impreuna acea schimbare pe care ne-o dorim";

    let infoCursHeader = "Informatii curs";
    let programaCurs = "Programa curs";


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
            trainerIon: trainerIon 
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

});