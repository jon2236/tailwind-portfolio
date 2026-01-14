const navigations = [
    {name: "Inicio", link: "#inicio"},
    {name: "Formación", link: "#formacion"},
    {name: "Experiencia", link: "#experiencia"},
    {name: "Sobre mí", link: "#sobre-mi"}
];

const navDesktopItems = document.getElementById("nav-desktop-items");

navigations.forEach(item =>(
    navDesktopItems.innerHTML += `
    <li>
    <a href="${item.link}">${item.name}</a>
    </li>
`
))


const redes = [
    {link: "https://www.linkedin.com/in/jonatanqdev", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>`},
    {link: "https://github.com/jon2236", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>`},
    {link: "https://www.youtube.com/@JoNaXKaY", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>`}
]

const misRedes = document.getElementById("mis-redes")

redes.forEach(item =>(
    misRedes.innerHTML += `
    <li>
    <a class="[&>svg]:size-7 md:[&>svg]:size-10" href="${item.link}">${item.icon}</a>
    </li>
    `
))


const academicExperiences = [
    {
    title: "Tecnicatura en Programación - Primer año - UTN",
    institution: "UTN-FRA (Universidad Tecnológica Nacional)",
    location: "Argentina, Buenos Aires, Avellaneda",
    date: "2024",
    description:
    "Adquirí los fundamentos de la programación y los conceptos iniciales de la Programación Orientada a Objetos (POO).",
    technologies: ["Python", "Java"]
    },
    {
    title: "Tecnicatura en Programación - Segundo año - UTN",
    institution: "UTN-FRA (Universidad Tecnológica Nacional)",
    location: "Argentina, Buenos Aires, Avellaneda",
    date: "2025",
    description: "Adquirí los fundamentos como Desarrollador Web, aplicando conocimientos para el desarrollo de interfaces y para la creación de aplicaciones del lado del servidor.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"]
    }
];

const professionalExperiences = [
    {
    title: "Soporte Técnico & QA",
    institution: "Arvato Services — Microsoft partner",
    location: "Estados Unidos · Canadá · México",
    date: "2008 – 2012",
    description:
        "Experiencia profesional en soporte técnico para productos Microsoft, evolucionando de Tier 1 a Tier 2 y posteriormente QA. Diagnóstico de hardware y software, emisión de órdenes de reparación y control de calidad de procesos.",
    technologies: [
        "Soporte Técnico T1 / T2",
        "QA",
        "Diagnóstico de Hardware",
        "Procesos IT",
        "Trabajo en equipos internacionales"
        ]
    }
]

const iconLocation = `
    <svg xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24">
    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
    </svg>
    `;

const iconCalendar = `
    <svg class="w-4 h-4 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24">
    <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1zm13 7H4v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9z"/>
    </svg>
    `;


function ExperienceCard(exp) {
    return `
        <div class="border-2 border-y-gray-900 max-w-md w-full p-4 px-5 sm:px-0">

            <h1 class="text-teal-50 font-bold text-xl mb-2">
                ${exp.title}
            </h1>

            <p class="text-gray-500 text-lg mb-2">
                ${exp.institution}
            </p>

            <div class="flex flex-wrap gap-6 mt-6">
                <p class="flex items-center gap-2 text-gray-500">
                    ${iconLocation}
                    <span>${exp.location}</span>
                </p>

                <p class="flex items-center gap-2 text-gray-500">
                    ${iconCalendar}
                    <span>${exp.date}</span>
                </p>
            </div>

            <p class="text-teal-50 mt-4 max-w-prose">
                ${exp.description}
            </p>

            <div class="flex flex-wrap gap-4 mt-4">
                ${exp.technologies.map(
                    tech => `<span class="text-[#5146eb] text-lg">${tech}</span>`
                ).join("")}
            </div>

        </div>
    `;
}


const academicContainer = document.getElementById("academic-cards");

academicExperiences.forEach(exp => {
    academicContainer.innerHTML += ExperienceCard(exp);
});



const professionalContainer = document.getElementById("professional-cards");

professionalExperiences.forEach(exp => {
    professionalContainer.innerHTML += ExperienceCard(exp);
});



const sendButton = document.getElementById("sendMessage");

sendButton.addEventListener("click", () => {
    const message = document.getElementById("message").value;

    if(!message.trim()) {
        alert("Por favor escribí un mensaje.");
        return;
    }

    const email = "joq2236@outlook.com";
    const subject = "Te contacto desde tu portfolio"
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});