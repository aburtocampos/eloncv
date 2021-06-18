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
        name: "kikeaburto.0",
        icon: "fab fa-twitter",
        url: "https://www.twitter.com/kikeaburto.0"
      },
      {
        name: "Mi Blog",
        icon: "fas fa-globe",
        url: "https://aburtocampos.blogspot.com"
      }
    ],
    workexperience: [{
        companyname: "Accedo Technologies",
        position: "Web Designer",
        place: "Managua, Nic.",
        date: "01/2018",
        description: "Pixel perfect, Transfer PSD mock-ups to HTML5, use of Bootstrap, and Css rules, Responsive designs, Wordpress editions, etc.",
        current: true
      },
      {
        companyname: "Concentrix",
        position: "Chat & Email Advisor",
        place: "Managua, Nic.",
        date: "02/2017",
        description: "Answer emails and chats to customers from UK and USA regarding Tech issues with their mobile devices and app store management.",
        current: false
      },
      {
        companyname: "Sitel",
        position: "Email Advisor",
        place: "Managua, Nic.",
        date: "01/2016",
        description: "Answer emails and chats to customers from USA regarding an specific product and deliveries.",
        current: false
      },
      {
        companyname: "Manuel Hernandez High School",
        position: "Substitute Teacher",
        place: "Carazo, Nic.",
        date: "02/2015",
        description: "Provide assistance and taugh to students from a local High School in the assigments of Math and English.",
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
