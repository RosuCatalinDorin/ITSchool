$(document).ready(function() {
  let id = window.localStorage.getItem("curs_id");
  detaliiCourseService.getCourse(id).then(function(course) {
    displayCourseDetailsInPage(course[0]);
  });

// START ENROLL SECTION

  $(".enroll-btn").on("click", function() {
    if(validateEnrollForm()) {
      $('.form-submit-msg');
      detaliiCourseService.enrollCourse(enrollCoursePayload()).then(function(response) {
      });
    }
  });

  let validateEnrollForm = function() {
    
    let messageToBeDisplayed = $(".message-after-enroll");

    let isFirstName = ValidateInputs.validateFirstName($(".first-name").val());
    let isLastName = ValidateInputs.validateName($(".last-name").val());
    let isDate = ValidateInputs.validateDate($(".date-input").val());
    let itKnowledge = ValidateInputs.validateItKnowledge($(".it-knowledge").val());
    let isEmail = ValidateInputs.validateEmail($(".email").val());
    let isPhone = ValidateInputs.validatePhoneNumber($(".phone").val());
    let isIndustry = ValidateInputs.validateIndustry($(".industry").val());
    let isEnglishLevel = ValidateInputs.onlyLettersAllowed($(".english-level").val());
    let isChecked = ValidateInputs.validateCheckbox($(".checkbox")[0].checked)

    if(typeof isFirstName === "boolean" & typeof isLastName === "boolean" & typeof isDate === "boolean" & typeof itKnowledge === "boolean" &
      typeof isEmail === "boolean" & typeof isPhone === "boolean" & typeof isIndustry === "boolean" & typeof isEnglishLevel === "boolean" &
      typeof isChecked === "boolean"){ 

        return true; 
    }

    if(typeof isFirstName === "string") {
      messageToBeDisplayed.html(isFirstName).fadeIn().addClass("red");
      return false;
    }

    if(typeof isLastName === "string") {
      messageToBeDisplayed.html(isLastName).fadeIn().addClass("red");
      return false;
    }

    if(typeof isDate === "string") {
      messageToBeDisplayed.html(isDate).fadeIn().addClass("red");
      return false;
    }

    if(typeof itKnowledge === "string") {
      messageToBeDisplayed.html(itKnowledge).fadeIn().addClass("red");
      return false;
    }

    if(typeof isEmail === "string") {
      messageToBeDisplayed.html(isEmail).fadeIn().addClass("red");
      return false;
    }

    if(typeof isPhone === "string") {
      messageToBeDisplayed.html(isPhone).fadeIn().addClass("red");
      return false;
    }

    if(typeof isIndustry === "string") {
      messageToBeDisplayed.html(isIndustry).fadeIn().addClass("red");
      return false;
    }
    
    if(typeof isEnglishLevel === "string") {
      messageToBeDisplayed.html(isEnglishLevel).fadeIn().addClass("red");
      return false;
    }

    if(typeof isChecked === "string") {
      messageToBeDisplayed.html(isChecked).fadeIn().addClass("red");
      return false;
    }
  }

  let enrollCoursePayload = function() {
    return {
        curs_id: 4,
        first_name: $(".first-name").val(),
        last_name: $(".last-name").val(),
        data_nasterii: $(".date-input").val(),
        cunostinte_it: $(".it-knowledge").val(),
        email: $(".email").val(),
        telefon: $(".phone").val(),
        old_industry: $(".industry").val(),
        nivel_engleza: $(".english-level").val(),
        accept_termeni_conditii: $(".checkbox")[0].checked 
    };
  }

  //END ENROLL SECTION


  // SEND EMAIL SECTION

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
    if(typeof isMessageValid === "boolean" & typeof isEmailValid === "boolean"){ 
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
  }

  var sendEmailPayload = function () {
    return {
        email: $(".email-input").val(),
        msg: $(".mesaj-input").val()
    };
  }

// END SEND EMAIL

// START DISPLAY COURSE PAGE

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
  // // END DISPLAY COURSE PAGE
});
