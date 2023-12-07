window.addEventListener('DOMContentLoaded', function(){
    let div = document.getElementById("version_easter_egg");
    div.addEventListener('click', function (evt) {
        if (evt.detail === 3) {
            window.location.href = "horloge.html";
        }
    });
});
