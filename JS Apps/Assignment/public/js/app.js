data.users.current()
    .then(function(current) {
        if (current) {
            $('#logIn').addClass("hidden");
        } else {
            $('#logOut').addClass("hidden");
        }
    });


$(".btn-nav-logout").on("click", function() {
    data.users.logout()
        .then(function() {
            toastr.success("User logout");
            document.location.reload(true);
        });
});