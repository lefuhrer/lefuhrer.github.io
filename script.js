const navbarButtons = document.querySelectorAll(".nav-item");
//Aşağıdaki satırlarda bütün butonların id'leri tanımlanıyor.
//Bu id'leri kullanarak butonlara tıklanma olayı yapılıyor.
const navbarProjectsButton = document.getElementById("projects");
const navbarAboutButton = document.getElementById("about");
const navbarMainButton = document.getElementById("main");
const navbarSkillsButton = document.getElementById("skills");
const navbarEducationButton = document.getElementById("education");


const mainSection = document.querySelector(".hero");
const infoSection = document.querySelector(".info-sec");
const aboutSection = document.querySelector(".about");
const skillsSection = document.querySelector(".skills");
const projectsSection = document.querySelector(".projects");
const educationSection = document.querySelector(".education");

const sections = document.querySelectorAll(".section");

//Aşağıdaki emptier fonksiyonu tüm butonlardan active sınıfını kaldırıyor.
function emptier() {
    sections.forEach(section => section.style.display = "none");
    navbarButtons.forEach(nav => nav.classList.remove("active")); // Tüm butonlardan active sınıfını kaldır
}

//Aşağıdaki sectionActions objesi tıklanan butonun id'sine göre ilgili bölümü gösteriyor.
const sectionActions = {
    'about': () => {
        $(infoSection).fadeOut(500);
        $(aboutSection).fadeIn(1500);
    },
    'main': () => {
        $(infoSection).fadeIn(1000);
        $(mainSection).fadeIn(1000);
    },
    'projects': () => {
        $(infoSection).fadeOut(500);
        $(projectsSection).fadeIn(1500);
    },
    'skills': () => {
        $(infoSection).fadeOut(500);
        $(skillsSection).fadeIn(1500);
    },
    'education': () => {
        $(infoSection).fadeOut(500);
        $(educationSection).fadeIn(1500);
    }
};

//Aşağıdaki satır tüm butonlara tıklanma olayı ekliyor.
navbarButtons.forEach(button => {
    button.addEventListener("click", () => {
        emptier();
        
        const action = sectionActions[button.id];
        if (action) {
            action();
        }
        
        button.classList.add("active");
    });
});
