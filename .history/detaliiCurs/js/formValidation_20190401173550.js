var ValidateInputs = (function() {

  var validateEmail = function(email) {
    if(!email) {
      return "Email-ul este obligatoriu!";
    }

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
    
    if(!message) {
      return "Va rog sa completatie seciunea 'mesaj'!";
    }

    if (message == "") {
      return "Va rog sa completatie seciunea 'mesaj'!";
    }
    return true;
  };

  validateItKnowledge = function(message) {
    if(!message) {
      return "Va rog completati sectiunea 'Cunostinte in It'!";
    }

    if (message == "") {
      return "Va rog completati sectiunea 'Cunostinte in It'!";
    }

    
    if(message[0] === "`" || message[0] === "<" || message[0] === "=") {
      return "Mesajul nu poate sa inceapa cu caractere special precum '`', '<' sau '='!"
    }

    return true;
  };

  var validateFirstName = function(name) {
    if(!name) {
      return "Prenumele trebuie completat.";
    }

    if (name == "") {
      return "Prenumele trebuie completat.";
    }

    re = /^\w+$/;
    if (!re.test(name)) {
      return "Prenumele poate sa contina doar litere, numere sau underscore!";
    }

    return true;
  }

  var validateName = function(name) {
    if(!name) {
      return "Numele trebuie completat.";
    }

    if (name == "") {
      return "Numele trebuie completat.";
    }

    re = /^\w+$/;
    if (!re.test(name)) {
      return "Numele poate sa contina doar litere, numere sau underscore!";
    }

    return true;
  };

  var validateIndustry = function(industry) {
    if(!industry) {
      return "Te rugam sa introduci industria din care provii.";
    }

    if (industry === "") {
      return "Te rugam sa introduci industria din care provii.";
    }

    if(industry[0] === "`" || industry[0] === "<" || industry[0] === "=") {
      return "Acest camp nu poate sa contina caractere special precum '`', '<' sau '='!"
    }

    return true;
  };

  var validateDate = function(date) {
    if(!date) {
      return "Data nasterii trebuie selectata.";
    }

    if (date === "") {
      return "Data nasterii trebuie selectata.";
    }

    return true;
  };

  var validatePhoneNumber = function(phoneNumber) {
    if(!phoneNumber) {
      return "Data nasterii trebuie selectata.";
    }

    if(phoneNumber === "") {
        return "Te rugam sa introduci numarul de telefon.";
    }

    if(phoneNumber.length !== 10) {
        return "Te rugam sa introduci un numar de telefon valid."
    }

    if (parseInt(phoneNumber) === NaN) {
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
