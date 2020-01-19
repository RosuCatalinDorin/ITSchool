$(document).ready(function() {
  let id = window.localStorage.getItem("curs_id");
  //let id = "4";
  detaliiCourseService.getCourse(id).then(function(course) {
    displayCourseDetailsInPage(course[0]);
  });


    // VAR GLOBALE

    let firstNameErr = $('.firstname-error-msg');
    let lastNameErr = $('.lastname-error-msg');
    let dateErr = $('.date-error-msg');
    let knowledgeErr = $('.knowledge-error-msg');
    let emailErr = $('.email-error-msg');
    let phoneErr = $('.phone-error-msg');
    let industryErr = $('.industry-error-msg');
    let messageToBeDisplayed = $(".message-after-enroll");

    // VAR GLOBALE

// START ENROLL SECTION
    $(".first-name").change(function () {
        let isFirstName = ValidateInputs.validateFirstName($(".first-name").val());

        if (typeof isFirstName === "string") {
            firstNameErr.html(isFirstName).fadeIn().addClass("red");
            return false;
        }
        firstNameErr.fadeOut();

    });

    $(".last-name").change(function () {
        let isLastName = ValidateInputs.validateName($(".last-name").val());
        if (typeof isLastName === "string") {
            lastNameErr.html(isLastName).fadeIn().addClass("red");
            return false;
        }
        lastNameErr.fadeOut();
    });

    $(".date-input").change(function () {
        let isDate = ValidateInputs.validateDate($(".date-input").val());

        if (typeof isDate === "string") {
            dateErr.html(isDate).fadeIn().addClass("red");
            return false;
        }

        dateErr.fadeOut();
    });

    $(".it-knowledge").change(function () {
        let itKnowledge = ValidateInputs.validateItKnowledge($(".it-knowledge").val());

        if (typeof itKnowledge === "string") {
            knowledgeErr.html(itKnowledge).fadeIn().addClass("red");
            return false;
        }

        knowledgeErr.fadeOut();
    });

    $(".email").change(function () {
        let isEmail = ValidateInputs.validateEmail($(".email").val());

        if (typeof isEmail === "string") {
            emailErr.html(isEmail).fadeIn().addClass("red");
            return false;
        }

        emailErr.fadeOut();
    });

    $(".phone").change(function () {
        let isPhone = ValidateInputs.validatePhoneNumber($(".phone").val());

        if (typeof isPhone === "string") {
            phoneErr.html(isPhone).fadeIn().addClass("red");
            return false;
        }
        phoneErr.fadeOut();

    });

    $(".industry").change(function () {
        let isIndustry = ValidateInputs.validateIndustry($(".industry").val());

        if (typeof isIndustry === "string") {
            industryErr.html(isIndustry).fadeIn().addClass("red");
            return false;
        }

        industryErr.fadeOut();
    });

    $(".enroll-btn").on("click", function (event) {
        event.preventDefault();
        if (validateEnrollForm()) {
            detaliiCourseService.enrollCourse(enrollCoursePayload()).then(function (response) {
                if (response.STATUS === "SUCCES") {
                    messageToBeDisplayed.html("Multumim pentru mesaj! Va vom contacta in curand!").fadeIn("slow").addClass("green");
                    setTimeout(function () {
                        messageToBeDisplayed.fadeOut();
                    }, 3000);
                    return;
                }
                 if(response.STATUS ==="EXIST"){
                    messageToBeDisplayed.html("Exista deja un cursant cu aceasta adresa de e-mail. Va rugam introduceti o adresa noua!").fadeIn("slow").addClass("green");
                    setTimeout(function () {
                        messageToBeDisplayed.fadeOut();
                    }, 3000);
                }
            });
        }
    });

    let resetErrorMessages = function (arr) {
        let len = arr.length;

        for (var i = 0; i < len; i++) {
            arr[i].fadeOut();
        }
    };

    let validateEnrollForm = function () {
        let messageErr = $(".message-after-enroll");
        let isFirstName = ValidateInputs.validateFirstName($(".first-name").val());
        let isLastName = ValidateInputs.validateName($(".last-name").val());
        let isDate = ValidateInputs.validateDate($(".date-input").val());
        let itKnowledge = ValidateInputs.validateItKnowledge($(".it-knowledge").val());
        let isEmail = ValidateInputs.validateEmail($(".email").val());
        let isPhone = ValidateInputs.validatePhoneNumber($(".phone").val());
        let isIndustry = ValidateInputs.validateIndustry($(".industry").val());
        let isEnglishLevel = ValidateInputs.onlyLettersAllowed($(".english-level").val());
        // let isChecked = ValidateInputs.validateCheckbox($(".checkbox")[0].checked);

        var errList = [firstNameErr, lastNameErr, dateErr, knowledgeErr, emailErr, phoneErr, industryErr, messageErr];

        if (typeof isFirstName === "boolean" & typeof isLastName === "boolean" & typeof isDate === "boolean" & typeof itKnowledge === "boolean" &
            typeof isEmail === "boolean" & typeof isPhone === "boolean" & typeof isIndustry === "boolean" & typeof isEnglishLevel === "boolean") {
            resetErrorMessages(errList);

            return true;
        }

        if (typeof isFirstName === "string") {
            firstNameErr.html(isFirstName).fadeIn().addClass("red");
            return false;
        }

        firstNameErr.fadeOut();

        if (typeof isLastName === "string") {
            lastNameErr.html(isLastName).fadeIn().addClass("red");
            return false;
        }

        lastNameErr.fadeOut();

        if (typeof isDate === "string") {
            dateErr.html(isDate).fadeIn().addClass("red");
            return false;
        }

        dateErr.fadeOut();

        if (typeof itKnowledge === "string") {
            knowledgeErr.html(itKnowledge).fadeIn().addClass("red");
            return false;
        }

        knowledgeErr.fadeOut();

        if (typeof isEmail === "string") {
            emailErr.html(isEmail).fadeIn().addClass("red");
            return false;
        }

        emailErr.fadeOut();

        if (typeof isPhone === "string") {
            phoneErr.html(isPhone).fadeIn().addClass("red");
            return false;
        }

        phoneErr.fadeOut();

        if (typeof isIndustry === "string") {
            industryErr.html(isIndustry).fadeIn().addClass("red");
            return false;
        }

        industryErr.fadeOut();

        if (typeof isEnglishLevel === "string") {
            messageErr.html(isEnglishLevel).fadeIn().addClass("red");
            return false;
        }

        messageErr.fadeOut();

        return true;
    }

    let enrollCoursePayload = function () {
        let dataNasterii = $(".date-input").val().split("/");
        dataNasterii = dataNasterii[2] + "-" + dataNasterii[0] + "-" + dataNasterii[1];
        return {
            // curs_id: window.localStorage.getItem("curs_id"),
            curs_id: window.localStorage.getItem("curs_id"),
            first_name: $(".first-name").val(),
            last_name: $(".last-name").val(),
            data_nasterii: dataNasterii,
            cunostinte_it: $(".it-knowledge").val(),
            email: $(".email").val(),
            telefon: $(".phone").val(),
            old_industry: $(".industry").val(),
            nivel_engleza: $(".english-level").val(),
            // accept_termeni_conditii: $(".checkbox")[0].checked
        };
    }

    //END ENROLL SECTION


    // SEND EMAIL SECTION

    $(".email-input").change(function () {
        let isEmail = ValidateInputs.validateEmail($(".email-input").val());
        let emailErrorMsg = $('.email-after-submit');
        if (typeof isEmail === "string") {
            emailErrorMsg.removeClass("green");
            emailErrorMsg.html(isEmail).fadeIn().addClass("red");
            return false;
        }

        emailErrorMsg.fadeOut();
    });

    $(".mesaj-input").change(function () {
        let isMessage = ValidateInputs.validateContactMessage($(".mesaj-input").val());
        let messageToBeDisplayed = $(".message-after-submit");

        if (typeof isMessage === "string") {
            messageToBeDisplayed.removeClass("green");
            messageToBeDisplayed.html(isMessage).fadeIn().addClass("red");
            return false;
        }

        messageToBeDisplayed.fadeOut();
    });

    $(".submit-button-footer").on("click", function (ev) {
        ev.preventDefault();
        let isMessageValid = ValidateInputs.validateContactMessage($(".mesaj-input").val());
        let isEmailValid = ValidateInputs.validateEmail($(".email-input").val());
        let messageToBeDisplayed = $(".message-after-submit");

        if (validateContactForm(isEmailValid, isMessageValid, messageToBeDisplayed)) {
            detaliiCourseService.sendEmail(sendEmailPayload()).then(function (response) {

                if (response.EMAIL === "SUCCES") {
                    messageToBeDisplayed.html("Multumim pentru mesaj! Va vom contacta in curand!").fadeIn("slow").addClass("green");
                    setTimeout(function () {
                        messageToBeDisplayed.fadeOut();
                    }, 3000);
                }
            });
        }
    });

    let validateContactForm = function (isEmailValid, isMessageValid, messageToBeDisplayed) {
        let emailErrorMsg = $('.email-after-submit');

        if (typeof isMessageValid === "boolean" & typeof isEmailValid === "boolean") {
            return true;
        }

        if (typeof isEmailValid === "string") {
            emailErrorMsg.html(isEmailValid).fadeIn().addClass("red");
            return false;
        }

        emailErrorMsg.html("").fadeOut();

        if (typeof isMessageValid === "string") {
            messageToBeDisplayed.removeClass("green");
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
    var displayCourseTechnology = function (course) {
        var usedTechElement = $('.tehnologii-folosite');
        var basicKnowledgeElement = $('.cunostinte-de-baza');
        var mindsetOfADevElement = $('.mindset-of-dev');
        // ["HTML / CSS / Java-Script", "JQuery / Ajax", "Programare orientata pe obiect", "Git", "Trello", "Figma"]
        //     ["Gandire logica", "Cunostinte minime de limba engleza"]
        //     ["Gandire analitica", "O aplicatie functionala gata de productie", "Programare prin exemple si jocuri", "Feedback pentru fiecare linie de cod", "Provocari", "INDRUMARE INTERVIURI"]
        var usedTechList = course.TEHNOLOGII_FOLOSITE;
        var basicKnowledgeList = course.CUNOSTINTE_DE_BAZA ;
        var mindsetList = course.MINDSET;

        createListsForTechSection(mindsetList, mindsetOfADevElement[0]);

        createListsForTechSection(usedTechList, usedTechElement[0]);

        createListsForTechSection(basicKnowledgeList, basicKnowledgeElement[0]);
    };

    var createListsForTechSection = function (techsName, section) {
        for (var i = 0; i < techsName.length; i++) {
            var li = document.createElement('li');
            li.innerText = techsName[i];
            section.appendChild(li);
        }
    };

    var displayCourseDetailsInPage = function (course) {
        $('.detalii-curs-titlu').html(course.TITLU_CURS);
        $('.detalii-curs-motto').html(course.SUB_TITLU);
        $('.nivel-curs').html(course.NIVEL);
        $('.data-start-curs').html(course.DATA_START);
        $('.durata-curs').html(course.DURATA_CURS);
        $('.numar-ore-sapt-curs').html(course.NUMAR_ORE_SAPTAMANA + " ore/saptamana");
        $('.numar-total-ore-curs').html(course.NUMAR_TOTAL_ORE + " de ore");
        $('.pret-curs-detalii').html(course.PRET + " EUR");
        $('.titlu-curs-red').html(course.TITLU_CURS);
        $('.descriere-curs-text').html(course.DESCRIERE);
        $('.msg-pers-targetate').html(course.MSG_PERS_TARGETATE);
        $('.info-curs-title').html("Informații despre cursul " + course.TITLU_CURS.toLowerCase().fontcolor('#e5003c'));
        $("#image1").attr("src", course.POZA_LOGO_TEH1);
        $("#image2").attr("src", course.POZA_LOGO_TEH2);
        $("#image3").attr("src", course.POZA_LOGO_TEH3);
        displayCourseTechnology(course);
        displayTrainerSocialMedia(course.TRAINERI);
        displayTraineri(course.TRAINERI);
    };


    var displayTrainerSocialMedia = function (traineri) {
        var html = "";
        $.each(traineri, function (index, trainer) {
            html += "<div class='trainer-linkedin'>";
            html += "<p class='trainer-name'>" + trainer.NUME + " " + trainer.PRENUME + "</p>";
            html += "<i href='" + trainer.LINKEDIN + "' class='fab fa-linkedin'></i>";
            html += "</div>"
        });
        $('.row-second-elem-traineri').html(html);
    };

    var displayTraineri = function (traineri) {
        var html = "";
        $.each(traineri, function (index, trainer) {
            html += "<div class='trainer-row'>";

            html += "<div class='trainer-profile'>";
            html += "<div class='trainer-image-container'>";
            html += "<img src='" + trainer.POZA + "' class='trainer-image' alt='Ionut Pausan Pic'>";
            html += "</div>";
            html += "<div class='trainer-name display-center'>";
            html += "<h3>" + trainer.NUME + " " + trainer.PRENUME + "</h3>";
            html += "</div>";
            html += "</div>";

            html += "<div class='trainer-description'>";
            html += "<h4>Descriere trainer</h4>";
            html += "<p>" + trainer.DESCRIERE + " </p>";
            html += "<div class='trainer-short-description'>";
            html += "<a href='" + trainer.LINKEDIN + "'><span>linkedin</span></a>";
            html += "<span>" + trainer.PROFESIE + "</span>";
            html += "</div>";
            html += "</div>";

            html += "</div>";
        });
        $('.trainer-container').html(html);
    }
    // // END DISPLAY COURSE PAGE
});
