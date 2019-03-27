$(document).ready(function() {
  // let id = window.localStorage.getItem("curs_id");
  let id = 4;
  detaliiCourseService.getCourse(id).then(function(course) {
    displayCourseDetailsInPage(course[0]);
  });

  $(".enroll-btn").on("click", function() {
      //validari
  })



  displayCourseDetailsInPage = function(course) {
    $('.detalii-curs-titlu').html(course.TITLU_CURS);
    $('.detalii-curs-motto').html(course.SUB_TITLU);
    $('nivel-curs').html(course.NIVEL);
    $('.data-start-curs').html(course.DATA_START);
    $('.durata-curs').html(course.DURATA_CURS);
    $('.numar-ore-sapt-curs').html(course.NUMAR_ORE_SAPTAMANA +" ore/saptamana");
    $('.numar-total-ore-curs').html(course.NUMAR_TOTAL_ORE + " de ore");
    $('.pret-curs-detalii').html(course.PRET);
    $('.titlu-curs-red').html(course.TITLU_CURS);
    displayTrainerSocialMedia(course.TRAINERI);
    displayTraineri(course.TRAINERI);
  }

  var displayTrainerSocialMedia = function (traineri) {
    var html = "";
    $.each(traineri, function(index, trainer) {
        html += "<div class='trainer-linkedin'>";
        html += "<p class='trainer-name'>" + trainer.NUME + " " +trainer.PRENUME + "</p>";
        html += "<i href='" + trainer.LINKEDIN + "' class='fab fa-linkedin'></i>";
        html += "</div>"
    });
    $('.row-second-elem-traineri').html(html);
  }

  var displayTraineri = function (traineri) {
    var html = "";
    $.each(traineri, function(index, trainer) {
        html += "<div class='trainer-row'>";

        html += "<div class='trainer-profile'>";
        html += "<div class='trainer-image-container'>";
        html += "<img src='"+ trainer.POZA +"' class='trainer-image' alt='Ionut Pausan Pic'>";
        html += "</div>"
        html += "<div class='trainer-name'>";
        html += "<h3>" + trainer.NUME + " " +trainer.PRENUME + "</h3>";
        html += "</div>";
        html += "</div>";

        html += "<div class='trainer-description'>";    
        html += "<h4>Descriere trainer</h4>";
        html += "<p>"+ trainer.DESCRIERE +"<br> De ce ai nevoie este de o motivatie puternica,gandire  logica si cacaturi </p>";
        html += "<div class='trainer-short-description'>";
        html += "<a href='" + trainer.LINKEDIN + "'><span>linkedin</span></a>";
        html += "<span>"+ trainer.PROFESIE +"</span>";
        html += "</div>"
        html += "</div>"

        html += "</div>"
    });
    $('.trainer-container').html(html);
  }
});
