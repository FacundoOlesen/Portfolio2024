const btnEmail = document.querySelector(".btn-follow")
const dataP = document.querySelectorAll(".data-p p")
const dataLabels = document.querySelectorAll(".info p")
const menu = document.querySelectorAll(".menu-main p")
const greet = document.querySelector(".about-me h4")
const pAbout = document.querySelectorAll(".about-p p")
const figCapAbout = document.querySelector(".about-p figcaption")
const pin = document.querySelectorAll(".pin p")
const skillsName = document.querySelectorAll(".data p")
const skillsLabel = document.querySelectorAll(".label-sk")
const formDate = document.querySelector(".date")
const formTitle = document.querySelector(".form-title")
const formTitle2 = document.querySelector(".form-title2")
const figForm = document.querySelector(".fig-form")
const formTitles1 = document.querySelector(".form h4")
const formTitles2 = document.querySelector(".form h5")
const formIpts = document.querySelectorAll(".ipt label")
const get = document.querySelectorAll('[href="assets/FacundoOlesen_resume.pdf"]');
const sendValue = document.querySelector(".submit")
const expTitles = document.querySelectorAll(".timeline-cabecera h3");
const expSubtitles = document.querySelectorAll(".timeline-cabecera h4");
const expDates = document.querySelectorAll(".timeline-cabecera .fecha");
const expListItems = document.querySelectorAll(".timeline-contenido ul li");

window.addEventListener('onload', setES())

function setEN() {
    btnEmail.innerHTML = `Send
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M0 0h24v24H0z" />
                <path fill="white"
                    d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066L22 7.535z" />
                <path fill="white"
                    d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a2.999 2.999 0 0 1 2.354-1.42L5 4h14z"/>
            </g>
        </svg>`
    dataP[0].innerHTML = "Software Developer 👾"
    dataP[1].innerHTML = "Graduated from <a class='link-underlined' href='https://www.unicen.edu.ar/' target='_blank'>UNICEN</a>, Buenos Aires, Argentina."
    dataP[2].innerHTML = "Transforming ideas into code by developing web applications."
    dataLabels[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        class="w-5 h-5">
        <path fill-rule="evenodd"
            d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
            clip-rule="evenodd"></path>
        <path
            d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z">
        </path>
    </svg> Available`
    dataLabels[1].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        class="w-5 h-5">
        <path
            d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z">
        </path>
        <path
            d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z">
        </path>
    </svg><span><a class="down" href="assets/FacundoOlesen_resume.pdf" download="">Download  CV</a></span>`
    dataLabels[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        class="w-5 h-5">
        <path
            d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z">
        </path>
    </svg>October 25th`
    dataLabels[3].innerHTML = `  <svg viewBox="0 0 24 24" aria-hidden="true"
        class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1bwzh9t r-1d4mawv"
        fill="#868e96">
        <g>
            <path
                d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z">
            </path>
        </g>
    </svg>Buenos Aires, Argentina`
    menu[0].innerHTML = "About"
    menu[1].innerHTML = "Experience"
    menu[2].innerHTML = "Proyects"
    menu[3].innerHTML = "Contact"
    greet.innerHTML = "Hi! 👋"
    pAbout[0].innerHTML = "I am Facundo Olesen, a passionate programmer. Graduated with a Bachelor's degree in Software Development from <a class='link-underlined'  href='https://www.unicen.edu.ar/' target='_blank'>UNICEN</a>, Argentina."
    
    pAbout[1].innerHTML = `In 2024, I completed an internship at EDSA, where I gained hands-on experience working as a Software Developer. I'm currently a freelance software developer. Take a closer look at a recent project <a class='link-underlined'  href='https://www.estudioulloaymorel.com.ar/' target='_blank'>here.</a> <br><br>
💻 <strong>My tech stack:</strong><br>
• <strong>Back-End:</strong> Java, Spring (Boot, Cloud), Microservices, JPA, Hibernate, PHP.<br>
• <strong>Front-End & Design:</strong> JavaScript, React, HTML, CSS, Figma, UX/UI.<br>
• <strong>Data & Infrastructure:</strong> SQL, MySQL, PostgreSQL, Docker.<br>
• <strong>Others:</strong> Git, RPA, UiPath, JUnit, TestNG.
<br><br>
During my academic career, I've built a solid base in programming, data structures, and algorithms, Object-Oriented Programming (OOP), UX/UI.<br>`;

    pAbout[2].innerHTML = "Every day, I seek new opportunities to learn and grow in the field of web development. My goal is not only to apply my technical skills to innovative projects, it is also to contribute to the team with a proactive approach and creative solutions."
    
    pAbout[3].innerHTML = "I'm excited to continue evolving as a professional and be part of projects that challenge and inspire. Ready to bring my passion and skills to projects that make a difference."
    
    pAbout[4].innerHTML = "I look forward to hearing from you!"
    
    pAbout[5].innerHTML = "Stay awesome!"
    figCapAbout.innerHTML = "Facu working in some of his projects 😅"

    /*formDate.innerHTML="24 Nov 2023"*/
    formTitle.innerHTML = "Do you want to leave me a message? Fill in this form."
    formTitles1.innerHTML = "FORM"
    formTitles2.innerHTML = "Complete this form to keep in touch with me!"
    formIpts[0].innerHTML = "Name"
    formIpts[1].innerHTML = "E-mail"
    formIpts[2].innerHTML = "Message"
    get[1].href = "assets/FacundoOlesen_resume.pdf"
    sendValue.value = "Send"
    formTitle2.innerHTML = "Your message was sent successfully. I will be in touch with you soon. Bye!"
    figForm.innerHTML = "I'm delighted that you've come this far."

    // TRADUCCIÓN EXPERIENCIA A INGLÉS
    expTitles[0].innerHTML = "Software Developer";
    expSubtitles[0].innerHTML = "Freelance";
    expDates[0].innerHTML = "Mar 2025 - Present";
    
    expTitles[1].innerHTML = "Software Development Intern";
    expSubtitles[1].innerHTML = "EDSA";
    expDates[1].innerHTML = "Aug 2024 - Dec 2024";

    expListItems[0].innerHTML = "Led the full development lifecycle: From gathering requirements with the client to the production deployment of a Single Page Application (SPA).";
    expListItems[1].innerHTML = "Frontend Optimization: Developed a responsive interface using React.js and custom Hooks, achieving a 75% reduction in load time.";
    expListItems[2].innerHTML = "Component Architecture: Designed a library of reusable and modular components, facilitating future maintenance and site scalability.";
    expListItems[3].innerHTML = "Client Satisfaction: Delivered the final product strictly meeting deadlines and ensuring mobile accessibility.";
    
    expListItems[4].innerHTML = "Process Automation (RPA): Designed and implemented software bots using VB .NET and LINQ queries to automate data extraction from multiple e-commerce platforms.";
    expListItems[5].innerHTML = "Collaborated on projects applying coding best practices.";

}

function setES() {
    btnEmail.innerHTML = `Enviar
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M0 0h24v24H0z" />
            <path fill="white"
                d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066L22 7.535z" />
            <path fill="white"
                d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a2.999 2.999 0 0 1 2.354-1.42L5 4h14z"/>
        </g>
    </svg>`
    dataP[0].innerHTML = "Software Developer 👾"
    dataP[1].innerHTML = "Graduado de la <a class='link-underlined' href='https://www.unicen.edu.ar/' target='_blank'>UNICEN</a>, Buenos Aires, Argentina."
    dataP[2].innerHTML = "Transformo ideas en código mediante el desarrollo de aplicaciones web."
    dataLabels[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    class="w-5 h-5">
    <path fill-rule="evenodd"
        d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
        clip-rule="evenodd"></path>
    <path
        d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z">
    </path>
</svg> Disponible`
    dataLabels[1].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    class="w-5 h-5">
    <path
        d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z">
    </path>
    <path
        d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z">
    </path>
</svg><span><a class="down" href="assets/FacundoOlesenCV.pdf" download="">Descargar CV</a></span>`
    dataLabels[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    class="w-5 h-5">
    <path
        d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z">
    </path>
</svg> Octubre 25`
    dataLabels[3].innerHTML = `  <svg viewBox="0 0 24 24" aria-hidden="true"
    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1bwzh9t r-1d4mawv"
    fill="#868e96">
    <g>
        <path
            d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z">
        </path>
    </g>
</svg>Buenos Aires, Argentina`
    menu[0].innerHTML = "Acerca de"
    menu[1].innerHTML = "Experiencia"
    menu[2].innerHTML = "Proyectos"
    menu[3].innerHTML = "Contacto"
    greet.innerHTML = "¡Hola! 👋"
    pAbout[0].innerHTML = "Me gradué como Técnico Universitario en Desarrollo de Aplicaciones Informáticas en la <a class='link-underlined' href='https://www.unicen.edu.ar/' target='_blank'>UNICEN</a>, Argentina."
    pAbout[1].innerHTML = `En 2024 realicé una pasantía en EDSA, donde adquirí experiencia práctica como desarrollador de software. Actualmente trabajo como desarrollador de software freelance. Mirá en detalle uno de mis proyectos más recientes <a class='link-underlined' href='https://www.estudioulloaymorel.com.ar/' target='_blank'>acá.</a> <br><br>
💻 <strong>Mi Stack Técnico:</strong><br>
• <strong>Back-End:</strong> Java, Spring (Boot, Cloud), Microservicios, JPA, Hibernate, PHP.<br>
• <strong>Front-End & Diseño:</strong> JavaScript, React, HTML, CSS, Figma, UX/UI.<br>
• <strong>Datos & Infraestructura:</strong> SQL, MySQL, PostgreSQL, Docker.<br>
• <strong>Otros:</strong> Git, RPA, UiPath, JUnit, TestNG.
<br><br>
Durante mi carrera académica, he construido una sólida base en programación, estructuras de datos y algoritmos, Programación Orientada a Objetos (POO), UX/UI.<br>`;

    pAbout[2].innerHTML = "Cada día, busco nuevas oportunidades para aprender y crecer en el ámbito del desarrollo web. Mi objetivo no es solo aplicar mis habilidades técnicas en proyectos innovadores, si no también contribuir al equipo con un enfoque proactivo y soluciones creativas."
    pAbout[3].innerHTML = "Estoy emocionado por seguir evolucionando como profesional y ser parte de proyectos que desafíen e inspiren. Preparado para aportar mi pasión y habilidades a iniciativas que marquen la diferencia."
    pAbout[4].innerHTML = "¡Espero escuchar de tí!"
    pAbout[5].innerHTML = "¡Cuídate!"
    figCapAbout.innerHTML = "Facu trabajando en uno de sus proyectos. 😅"
    
    /*formDate.innerHTML="24 Nov 2023"*/
    formTitle.innerHTML = "¿Quieres dejarme un mensaje? Completá este formulario."
    formTitles1.innerHTML = "FORMULARIO"
    formTitles2.innerHTML = "Completa este formulario para mantenernos en contacto!"
    formIpts[0].innerHTML = "Nombre"
    formIpts[1].innerHTML = "E-mail"
    formIpts[2].innerHTML = "Mensaje"
    get[1].href = "assets/FacundoOlesenCV.pdf"
    sendValue.value = "Enviar"
    formTitle2.innerHTML = "Has enviado tu mensaje con éxito. Me contactaré contigo pronto. ¡Adiós!"
    figForm.innerHTML = "Estoy muy contento de que hayas llegado hasta aquí."

    // TRADUCCIÓN EXPERIENCIA A ESPAÑOL
    expTitles[0].innerHTML = "Desarrollador de Software";
    expSubtitles[0].innerHTML = "Freelance";
    expDates[0].innerHTML = "Mar 2025 - Presente";
    
    expTitles[1].innerHTML = "Pasante de Desarrollo de Software";
    expSubtitles[1].innerHTML = "EDSA";
    expDates[1].innerHTML = "Ago 2024 - Dic 2024";

    expListItems[0].innerHTML = "Lideré el ciclo completo de desarrollo: Desde la toma de requerimientos con el cliente hasta el despliegue en producción de una Single Page Application (SPA).";
    expListItems[1].innerHTML = "Optimización de Frontend: Desarrollé una interfaz responsive utilizando React.js y Hooks personalizados, logrando una reducción del 75% en el tiempo de carga.";
    expListItems[2].innerHTML = "Arquitectura de Componentes: Diseñé una biblioteca de componentes reutilizables y modulares, facilitando el mantenimiento futuro y la escalabilidad del sitio.";
    expListItems[3].innerHTML = "Satisfacción del Cliente: Entregué el producto final cumpliendo estrictamente con los plazos y asegurando la accesibilidad en dispositivos móviles.";
    
    expListItems[4].innerHTML = "Automatización de Procesos (RPA): Diseñé e implementé bots de software utilizando VB .NET y consultas LINQ para automatizar la extracción de datos de múltiples plataformas e-commerce.";
    expListItems[5].innerHTML = "Colaboración en proyectos aplicando buenas prácticas de código.";

}

let langIcons = document.querySelectorAll(".lang-icons div")
langIcons[0].onclick = function (e) {

    setES()
}
langIcons[1].onclick = function (e) {
    setEN()
}