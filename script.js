console.log("Portfolio website loaded successfully!");

console.log("Portfolio website loaded successfully!");

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }
        }

    });

});


const resumeLinks = document.querySelectorAll("#Resume a");

resumeLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Resume button clicked");

    });

});