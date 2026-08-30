/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 900);

});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".navbar nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Close mobile menu */

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================
   COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(
            counter.getAttribute("data-target")
        );

        let current = 0;

        const increment = Math.max(
            1,
            Math.ceil(target / 50)
        );

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target;

                return;
            }

            counter.innerText = current;

            requestAnimationFrame(update);
        };

        update();

    });

}


/* Detect universe section */

const universe = document.querySelector(".universe");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

            }

        });

    },

    {
        threshold: .3
    }

);

observer.observe(universe);


/* =========================
   PARALLAX HERO
========================= */

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const heroBg =
        document.querySelector(".hero-bg");

    if (heroBg) {

        heroBg.style.transform =
            `translateY(${scroll * .25}px)`;

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".creator-card, .content-card, .merch-card"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: .1
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});
