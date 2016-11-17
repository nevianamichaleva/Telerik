data.users.current()
    .then(function(current) {
        if (current === "meg100sto") {
            $('#addNewsButton').removeClass("hidden");
        } else {
            $('#addNewsButton').addClass("hidden");
        }
    });
