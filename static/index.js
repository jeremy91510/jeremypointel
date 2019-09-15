var projectWrapper = document.getElementById("project");

function showProject(id) {
    var project = document.getElementById(id);

    if (project) {
        projectWrapper.classList.remove("d-none");
    } else {
        projectWrapper.classList.add("d-none");
    }
}

showProject(window.location.hash.substring(1));

if ("onhashchange" in window) {
    window.onhashchange = function () {
        showProject(window.location.hash.substring(1));
    }
} else {
    var storedHash = window.location.hash;
    window.setInterval(function () {
        if (window.location.hash != storedHash) {
            storedHash = window.location.hash;
            showProject(storedHash.substring(1));
        }
    }, 100);
}
