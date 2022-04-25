const app = new Vue({
  el: "#app",
  data: {
    contact: [{
        name: "eabucam@gmail.com",
        icon: "fas fa-envelope",
        url: "mailto:eabucam@gmail.com"
      },
      {
        name: "88503574",
        icon: "fab fa-whatsapp",
        url: "tel:50588503574"
      },
      {
        name: "76092930",
        icon: "fab fa-whatsapp",
        url: "tel:50576092930"
      },
      {
        name: "Jinotepe, Carazo",
        icon: "fas fa-map-marker-alt",
        url: ""
      },
      {
        name: "aburtoCampos",
        icon: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/aburtoCampos"
      },
      {
        name: "Mi Blog",
        icon: "fas fa-globe",
        url: "https://aburtocampos.blogspot.com"
      }
    ],
    workexperience: [{
        companyname: "Media Sparehead Inc.",
        position: "Web Designer",
        place: "Managua, Nic.",
        date: "2022",
        description: "Design, edit web site, data-entry tasks, Responsive designs, Wordpress editions, and some graphic design tasks.",
        current: true
      },
      {
        companyname: "Accedo Technologies",
        position: "Web Designer / Developer",
        place: "Managua, Nic.",
        date: "2018 - 2022",
        description: "Design, edit web site, data-entry tasks, quality analyst methodology, contracts analysis and product management among other tasks, using ReactJS basic, .Net , C# and SQL tools. Transfer PSD mock-ups to HTML5, use of Bootstrap, and Css rules, Responsive designs, Wordpress editions, etc.",
        current: false
      },
      {
        companyname: "Concentrix",
        position: "Chat & Email Advisor",
        place: "Managua, Nic.",
        date: "02/2017",
        description: "Technical assistant and product invoice reviews via emails and chats regarding Tech issues with their mobile devices and app store management.",
        current: false
      },
      {
        companyname: "Sitel",
        position: "Customer Service Representative",
        place: "Managua, Nic.",
        date: "2016",
        description: "Booking Specialist for American hotels and resorts and data entry tasks.",
        current: false
      },
      {
        companyname: "Manuel Hernandez High School",
        position: "Substitute Teacher",
        place: "Carazo, Nic.",
        date: "2015",
        description: "Provide assistance and taught to students from a local High School in the assigments of Math and English.",
        current: false
      },
    {
        companyname: "Academia de Ingles",
        position: "English Teacher Part Time",
        place: "Carazo, Nic.",
        date: "2012",
        description: "Taught basic English to young and adult people as second language.",
        current: false
      },
      {
        companyname: "INSUES Granada",
        position: "Computer Science Teacher",
        place: "Granada, Nic.",
        date: "2009",
        description: "Taught basic computer knowledge to young and adult people.",
        current: false
      }
    ],
    education: [{
        title: "Major in English Teacher",
        date: "",
        entity: "UNAN Managua",
        current: true
      },
      {
        title: "Information System Engineering",
        date: "2015",
        entity: "UNAN Managua",
        current: false
      }

    ],
    achievement: [{
        title: "Major in English Teacher",
        date: "2012"
      },
      {
        title: "Information System Engineering",
        date: "2015"
      }

    ],
    lang: [{
      title: ["Spanish", "English", "French", "German", "Chinese"],
      level: ["Basic", "Intermediate", "Advanced", "Native"]
    }],
    interests: [{
        icon: "fas fa-book-reader",
        title: "Reading"
      },
      {
        icon: "fas fa-glasses",
        title: "Netflix"
      },
      {
        icon: "fab fa-tumblr",
        title: "TikTok"
      },
      {
        icon: "fab fa-twitter",
        title: "Twitter"
      },
      {
        icon: "fas fa-gamepad",
        title: "Video Games"
      },
      {
        icon: "fas fa-tv",
        title: "Documentaries"
      },
      {
        icon: "fas fa-film",
        title: "Cinema"
      }

    ]
  }
});


const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
let idx = 0;

function run() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx * 180}px)`;
  setTimeout(run, 2000);

}
run();
