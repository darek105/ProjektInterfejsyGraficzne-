$(document).ready(function() {
  /* validation */
  $.validator.addMethod('regex', function(value, element, regexpr) {
      return regexpr.test(value);
  }, "Login nie poprawny");
  $("#forForLogin").validate({
      rules: {
          password: {
              required: true,
              minlength: 5
          },
          login: {
              regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              required: true
          }
      },
      messages: {
          password: {
              required: "Wpisz hasło",
              minlength: "Wpisz min 5 znakow"
          },
          login: {
              required: "Wpisz login",
              minlength: "Login za krotki"
          }
      },
      submitHandler: submitForm
  });
  /* validation */

  /* login submit */
  function submitForm() {
      window.location.href = "system.html";
  }
});
