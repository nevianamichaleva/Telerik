if (data.users.current()) {
    $('#logIn').addClass("hidden");
} else {
    $('#logOut').addClass("hidden");
}

$(".btn-nav-logout").on("click", function() {
    data.users.logout()
        .then(function() {
            toastr.success("User logout");
            document.location.reload(true);
        });
});