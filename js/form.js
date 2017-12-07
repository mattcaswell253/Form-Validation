$().ready(function() {
    $("#commentForm").validate({
      onfocusout: function (element) {
        $(element).valid();
      },
        rules: {
          name: "required",
          address: "required",
          city: "required",
          zip: "required",
          state: "required",
          email: "required"
        },
        messages: {
        name: "Please enter your full name",
        address: "Please enter your address",
        city: "Please enter your city",
        zip: "Please enter your zip",
        state: "Please enter your state",
        email: "Please enter your email"
        }
    });
});
