var ValidateInputs = (function() {

  var validateEmail = function(email) {
    if (email == "") {
      return "Email-ul este obligatoriu!";
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      return "Email-ul dumneavoastra nu este valid!";
    }
    return true;
  };

  validateContactMessage = function(message) {
    if (message == "") {
      return "Va rog completati mesajul!";
    }
    return true;
  };

  validateItKnowledge = function(message) {
    if (message == "") {
      return "Va rog completati sectiunea 'Cunostinte in It'!";
    }
    return true;
  };

  var validateFirstName = function(name) {
    if (name == "") {
      return "Prenumele trebuie completat.";
    }

    re = /^\w+$/;
    if (!re.test(name)) {
      return "Numele poate sa contina doar litere, numere sau underscores!";
    }

    return true;
  }

  var validateName = function(name) {
    if (name == "") {
      return "Numele trebuie completat.";
    }

    re = /^\w+$/;
    if (!re.test(name)) {
      return "Numele poate sa contina doar litere, numere sau underscores!";
    }

    return true;
  };

  var validateIndustry = function(industry) {
    if (name == "") {
      return "Te rugam sa introduci industria din care provii.";
    }

    
    // if () {
    //   return "Numele poate sa contina doar litere, numere sau underscores!";
    // }

    return true;
  };

  var validateDate = function(date) {
    if (date === "") {
      return "Data nasterii trebuie selectata.";
    }
    // var now = new Date().now;
    // if(date > now) {

    // }303 221 6493#

    var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if(!re.test(String(date).toLowerCase())) {
      return ;
    }

    return true;
  };

  var validatePhoneNumber = function(phoneNumber) {
    if(phoneNumber === "") {
        return "Te rugam sa introduci numarul de telefon.";
    }

    if(phoneNumber.length !== 10) {
        return "Te rugam sa introduci un numar de telefon valid."
    }

    var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    if (!re.test(String(phoneNumber).toLowerCase())) {
        return "Te rugam sa introduci un numar de telefon valid.";
    }

    return true;
  };
  
  var validateCheckbox = function (isChecked) {
    if(!isChecked) {
      return "Te rugam sa bifezi termenii si conditiile";
    }

    if(typeof bool !== "boolean") {
      return;
    }

    return true;
  }
  var onlyLettersAllowed = function(str) {
    var re = /^[a-zA-Z]+$/;
    if(!re.test(String(str).toLowerCase())) {
        return "Te rugam sa introduci doar litere.";
    }
    return true;
  } 

  return {
    validateEmail: email => {
        return validateEmail(email);
    },

    validateName: name => {
        return validateName(name);
    },

    validateDate: date => {
        return validateDate(date);
    },

    validatePhoneNumber: phone => {
        return validatePhoneNumber(phone);
    },

    validateContactMessage: (message) => {
        return validateContactMessage(message);
    },

    onlyLettersAllowed: str => {
        return onlyLettersAllowed(str);
    },

    validateFirstName: firstName => {
      return validateFirstName(firstName);
    },

    validateCheckbox: bool => {
      return validateCheckbox(bool);
    },

    validateIndustry: industry => {
      return validateIndustry(industry);
    },

    validateItKnowledge: knowledge => {
      return validateItKnowledge(knowledge);
    }
  };
}());
