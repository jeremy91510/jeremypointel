var projectWrapper = document.getElementById("project");
var projects = document.querySelectorAll('[data-js=project]');

function showProject(id) {
    var project = document.getElementById(id);

    if (project) {
        window.scrollTo(0, 290);

        for (var i = 0; i < projects.length; i++) {
            projects[i].classList.add("d-none");
        }

        // Load images
        var projectImages = project.querySelectorAll('[data-src]');
        for (var i = 0; i < projectImages.length; i++) {
            projectImages[i].src = projectImages[i].getAttribute('data-src');
        }

        projectWrapper.classList.remove("d-none");
        project.classList.remove("d-none");
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
