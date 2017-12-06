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
          state: "required"
        },
        messages: {
        name: "please enter your first name",
        address: "please enter your address",
        city: "please enter your city",
        zip: "please enter your zip",
        state: "please enter your state"
        }
    });
});
