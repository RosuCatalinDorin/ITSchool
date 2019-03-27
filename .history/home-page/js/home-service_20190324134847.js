var homeService = (function(params) {
  "use strict";
  // GENERATE UI

  var listCourses = function(courses) {
    var html = "<ul>";
    $.each(courses, function(index, course) {
      html += "<li>";
      html += "<span class='id'>" + article.id + "</span>";
      html += "<span class='title'>" + article.title + "</span>";
      html +=
        '<button data-id="' +
        article.id +
        '" class="show-details">Edit</button>';
      html +=
        '<button data-id="' + article.id + '" class="delete">Delete</button>';
      html += "</li>";
    });
    html += "</ul>";
    return html;
  };

  return {
    getCourses: () => {
      return setAxiosCall()
        .getCoursesDAL()
        .then(function(response) {
          return response;
        });
    },

    createNote: data => {
      return setAxiosCall()
        .createNoteDAL(data)
        .then(function(response) {
          return response;
        });
    }
  };
})(params);
