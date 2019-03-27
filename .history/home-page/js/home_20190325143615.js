$(document).ready(function() {
  homeService.getCourses().then(function(courses) {
    $(".course").html(courses);
    $(".courseDetails").on("click", function() {
      getCourseDetails($(".courseDetails").attr("data-id"));
    });
  });

  let getCourseDetails = function(id) {
    // window.localStorage("curs_id", id);
    window.location.href ="file:///C:/Users/pausan/Desktop/Documenting%20my%20progress/Teaching%20project/SPEAK%20PROGRAMMING/ITSchool/detaliiCurs/views/detalii-curs.html";
  };

  $(".submit-button-footer").on("click", function() {
    //validari
    detaliiCourseService.sendEmail(sendEmailPayload()).then(function(response) {
        //validari
        openSuccessModal();
      // ne apare un mesaj de succes care se inchide in cateva secunde
    });

  var sendEmailPayload = function () {
    return {
        email: "catalin.rosu@test.ro",
        msg: "As vrea sa ma inscriu la curs insa nu stiu cum sa fac asta."
    };
}
}));
