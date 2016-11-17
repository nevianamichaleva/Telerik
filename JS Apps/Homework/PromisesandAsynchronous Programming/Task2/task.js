 $(function() {
            $("#dialog").dialog();
        });
  var d = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            window.location.href = "http://telerikacademy.com/";
        } else {
            reject('Error message');
        }
    }, 2000);
});
 d.then((data) => console.log('success:' + data));
d.catch((error) => console.log('error: ' + error));