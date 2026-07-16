/* ==========================================
   Smooth Portfolio Script
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------
       Active Navigation Link
    ------------------------------- */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });




    /* -------------------------------
       Fade Animation
    ------------------------------- */

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";

            }

        });

    }, {

        threshold: 0.15

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.7s";

        observer.observe(card);

    });

});



/* ==========================================
   Scroll To Top Button
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



/* ==========================================
   Top Button Style
========================================== */

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0ea5e9";
topButton.style.color = "white";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";
topButton.style.zIndex = "999";



/* ==========================================
   Console Message
========================================== */

console.log("Portfolio Loaded Successfully 🚀");
