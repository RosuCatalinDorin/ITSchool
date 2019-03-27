$(document).ready(function() {
  // let id = window.localStorage.getItem("curs_id");
  let id = 4;
  detaliiCourseService.getCourse(id).then(function(course) {
    displayCourseDetailsInPage(course[0]);
  });

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
    var html = "<div class='card-deck'>";
    $.each(courses, function(index, course) {
        <div class="trainer-linkedin">
        <p class="trainer-name">Rosu Catalin</p>
        <i href="https://www.linkedin.com/in/ro%C8%99u-c%C4%83t%C4%83lin-dorin-872322112/" class="fab fa-linkedin"></i>
    </div>
    });
    html += "</div>";
    return html;
  }
});
