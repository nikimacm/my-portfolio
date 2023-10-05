// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top:${y}px;left:${x}px`;
    mouseDot.style.cssText = `top:${y}px;left:${x}px`;
};
// End of Mouse Circle

// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
const z = 100;

const animateCircles = (e, x, y) => {
    if (x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if (x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }

    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;
    } else if (y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`;
    }

    mX = e.clientX;
    mY = e.clientY;
};
// End of Animated Circles

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x, y);
    animateCircles(e, x, y);
});

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
});

//Main Button
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach((btn) => {
    let ripple;

    btn.addEventListener("mouseenter", (e) => {

        const left = e.clientX - e.target.getBoundingClientRect().left;
        const top = e.clientY - e.target.getBoundingClientRect().top;

        ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        btn.prepend(ripple);
    });

    btn.addEventListener("mouseleave", () => {
        btn.removeChild(ripple);
    });
});

// End of Main Button

// About Me Text
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTextContent =
    "Software Developer and UX/UI Designer- A fusion of creativity and code. I'll turn your ideas into beautifully functional realities. A stunning website, a mobile app with a delightful user experience, or a custom software solution. Bring your vision to life.";
Array.from(aboutMeTextContent).forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener('mouseenter', (e) => {
        e.target.style.animation = "aboutMeTextAnim 10s infinite";
    });
});

// End of About me Text 

// Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
        project.firstElementChild.style.top = `-${
            project.firstElementChild.offsetHeight - project.offsetHeight
        }px`;
    });

    project.addEventListener("mouseleave", () => {
        project.firstElementChild.style.top = "2rem";
    });

    // Big Project Image
    project.addEventListener("click", () => {
        const bigImgWrapper = document.createElement("div");
        bigImgWrapper.className = "project-img-wrapper";
        container.appendChild(bigImgWrapper);

        const bigImg = document.createElement("img");
        bigImg.className = "project-img";
        const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
        bigImg.setAttribute("src", `${imgPath}-big.jpg`);
        bigImgWrapper.appendChild(bigImg);
    });

    // End of Big Project Image
});

// End of Projects