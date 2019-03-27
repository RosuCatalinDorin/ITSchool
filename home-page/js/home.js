$(document).ready(function() {
  homeService.getCourses().then(function(courses) {
    $(".course1").html(courses);
 /*   $(".courseDetails").on("click", function() {
      debugger;
      getCourseDetails($(".courseDetails").attr("data-id"));
    });*/

  });

   getCourseDetails = function(id) {
      localStorage.setItem("curs_id", id);
    // REF PUT TO A CONFIG FILE
    window.location.href ="../detaliiCurs/views/detalii-curs.html";
  };


  // START SEND EMAIL SECTION
  $(".submit-button-footer").on("click", function() {
    let isMessageValid = ValidateInputs.validateContactMessage($(".mesaj-input").val());
    let isEmailValid = ValidateInputs.validateEmail($(".email-input").val());
    let messageToBeDisplayed = $(".message-after-submit");

    if(validateContactForm(isEmailValid, isMessageValid, messageToBeDisplayed)) {
      detaliiCourseService.sendEmail(sendEmailPayload()).then(function(response) {
        if(response.EMAIL === "SUCCES"){
          messageToBeDisplayed.html("Multumim pentru mesaj! Atentie la span!").fadeIn("slow").addClass("green");
          setTimeout(function(){ messageToBeDisplayed.fadeOut(); }, 3000);
        }
      });
    }
  });

  let validateContactForm = function(isEmailValid, isMessageValid, messageToBeDisplayed) {
    let emailErrorMsg = $('.email-after-submit');

    if(typeof isMessageValid === "boolean" && typeof isEmailValid === "boolean"){
      return true; 
    }
    
    if(typeof isEmailValid === "string") {
      emailErrorMsg.html(isEmailValid).fadeIn().addClass("red");
      return false;
    }

    emailErrorMsg.html("").fadeOut();

    if(typeof isMessageValid === "string") {
      messageToBeDisplayed.html(isMessageValid).fadeIn().addClass("red");
      return false;
    }
  };

  var sendEmailPayload = function () {
    return {
        email: $(".email-input").val(),
        msg: $(".mesaj-input").val()
    };
  }
// END SEND EMAIL SECTION
});
