// Home Particle effect
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 20
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },

  }

);

//Section change Word
// var wordcontent = document.querySelector(".home__text__red");
// var word = ["Softwa","Salam","Yeke","Uzun","Machine Leaoraldj","sadassd"];             
// var a = 0;
// var finaltext = false;
// var i = 0;
// var speed = 165;
// function type() {

//   if(finaltext || a==0){
//     if(a === word.length){
//       a=0;
//     }
//     var text = word[a];
//   }
//   document.querySelector(".home__text__red").innerHTML += text.charAt(i);
//   i++;
//   setTimeout(type,speed);

//   if(text.length+1 === i){
//     i=0;
//     a++;
//     finaltext = true;
//     document.querySelector(".home__text__red").innerHTML = '';
//   }
// }
// type();


var wordcontent = document.querySelector(".home__text__red");
var word = ["Softwa","Salam","Yeke","Uzun","Machine","sadassd"];             
var a = 0;
var finaltext = false;
var i = 0;
var speed = 3800;
var witdh = 90;


function type() {

  if(i == word.length){
    i=0;
  }



  document.querySelector(".home__text__red").innerHTML = word[i] + '<span class="textspan"></span>';
  i++;

  

  var yazdirma = setInterval(() => {

    if(witdh == 0){
      clearInterval(yazdirma);
    }
    
    witdh = witdh - 3;

    document.querySelector('.textspan').style.width = witdh + "%";

  }, 3800);

  witdh = 0;

  
  if(document.querySelector('.textspan').style.width == 0){
  console.log(document.querySelector('.textspan').style.width == 0);
    console.log(witdh);
    var sildirme = setInterval(() => {

      witdh = witdh + 3;
  
  
      document.querySelector('.textspan').style.width = witdh + "%";
  
      if(witdh == 90){
        clearInterval(sildirme);
      }
  
    }, 115);

  }
  

  setTimeout(type,speed);

}
type();



//Side Bar Menu
document.querySelectorAll(".sidebar__tag").forEach(element => {
    element.addEventListener("click",()=>{
      document.querySelector('.sidebar__menu').style.left = "-110%";
      document.querySelector('.webcontent').style.overflow = "auto";
      document.querySelector('body').style.overflow = "auto";
      var location = element.getAttribute("data-location");
      document.getElementById(location).scrollIntoView({behavior:"smooth"})
    });
});

//Resume Tabs  Menu
document.querySelectorAll('.resumetabs').forEach(element => {    
    element.addEventListener('click',()=>{
        document.querySelectorAll('.resumetabs').forEach(remove => {
            remove.classList.remove('resume__active__tabs');
        });
        element.classList.add('resume__active__tabs');
        if(element.innerHTML.toLocaleLowerCase().toString().includes('professional')){
            document.querySelector(".professional").style.display = "flex";
            document.querySelector(".experience").style.display = "none";
            document.querySelector(".interview").style.display = "none";
            document.querySelector(".education").style.display = "none";

        }

        if(element.innerHTML.toLocaleLowerCase().toString().includes('experience')){
            document.querySelector(".professional").style.display = "none";
            document.querySelector(".experience").style.display = "flex";
            document.querySelector(".interview").style.display = "none";
            document.querySelector(".education").style.display = "none";
        }

        if(element.innerHTML.toLocaleLowerCase().toString().includes('interview')){
            document.querySelector(".professional").style.display = "none";
            document.querySelector(".experience").style.display = "none";
            document.querySelector(".interview").style.display = "flex";
            document.querySelector(".education").style.display = "none";
        }

        if(element.innerHTML.toLocaleLowerCase().toString().includes('education')){
            document.querySelector(".professional").style.display = "none";
            document.querySelector(".experience").style.display = "none";
            document.querySelector(".interview").style.display = "none";
            document.querySelector(".education").style.display = "flex";
        }
        
    });
});


// Clients Tabs Menu
document.querySelectorAll('.clientstabs').forEach(element => {    
    element.addEventListener('click',()=>{
        document.querySelectorAll('.clientstabs').forEach(remove => {
            remove.classList.remove('clients__tabs__active');
        });
        element.classList.add('clients__tabs__active');
        if(element.innerHTML.toLocaleLowerCase().toString().includes('javascript')){
            document.querySelector(".tabmenu__box__one").style.display = "flex";
            document.querySelector(".tabmenu__box__two").style.display = "none";
            document.querySelector(".tabmenu__box__tree").style.display = "none";
            document.querySelector(".tabmenu__box__four").style.display = "none";
            document.querySelector(".tabmenu__box__five").style.display = "none";
            document.querySelector(".tabmenu__box__sixs").style.display = "none";
        }

        if(element.innerHTML.toLocaleLowerCase().toString().includes('product')){
            document.querySelector(".tabmenu__box__one").style.display = "none";
            document.querySelector(".tabmenu__box__two").style.display = "flex";
            document.querySelector(".tabmenu__box__tree").style.display = "none";
            document.querySelector(".tabmenu__box__four").style.display = "none";
            document.querySelector(".tabmenu__box__five").style.display = "none";
            document.querySelector(".tabmenu__box__sixs").style.display = "none";
        }

        if(element.innerHTML.toLocaleLowerCase().toString().includes('wordpress')){
            document.querySelector(".tabmenu__box__one").style.display = "none";
            document.querySelector(".tabmenu__box__two").style.display = "none";
            document.querySelector(".tabmenu__box__tree").style.display = "flex";
            document.querySelector(".tabmenu__box__four").style.display = "none";
            document.querySelector(".tabmenu__box__five").style.display = "none";
            document.querySelector(".tabmenu__box__sixs").style.display = "none";
        }

        if(element.innerHTML.toLocaleLowerCase().toString().includes('html')){
            document.querySelector(".tabmenu__box__one").style.display = "none";
            document.querySelector(".tabmenu__box__two").style.display = "none";
            document.querySelector(".tabmenu__box__tree").style.display = "none";
            document.querySelector(".tabmenu__box__four").style.display = "flex";
            document.querySelector(".tabmenu__box__five").style.display = "none";
            document.querySelector(".tabmenu__box__sixs").style.display = "none";
        }

        if(element.innerHTML.toLocaleLowerCase().toString().includes('laraver')){
            document.querySelector(".tabmenu__box__one").style.display = "none";
            document.querySelector(".tabmenu__box__two").style.display = "none";
            document.querySelector(".tabmenu__box__tree").style.display = "none";
            document.querySelector(".tabmenu__box__four").style.display = "none";
            document.querySelector(".tabmenu__box__five").style.display = "flex";
            document.querySelector(".tabmenu__box__sixs").style.display = "none";
        }

        if(element.innerHTML.toLocaleLowerCase().toString().includes('python')){
            document.querySelector(".tabmenu__box__one").style.display = "none";
            document.querySelector(".tabmenu__box__two").style.display = "none";
            document.querySelector(".tabmenu__box__tree").style.display = "none";
            document.querySelector(".tabmenu__box__four").style.display = "none";
            document.querySelector(".tabmenu__box__five").style.display = "none";
            document.querySelector(".tabmenu__box__sixs").style.display = "flex";
        }


        if(element.innerHTML.toLocaleLowerCase().toString().includes('interview')){
            document.querySelector(".tabmenu__box__one").style.display = "none";
            document.querySelector(".tabmenu__box__two").style.display = "none";
            document.querySelector(".tabmenu__box__tree").style.display = "flex";
            document.querySelector(".tabmenu__box__four").style.display = "none";
            document.querySelector(".tabmenu__box__five").style.display = "none";
            document.querySelector(".tabmenu__box__sixs").style.display = "none";
        }

        
    });
});


// scrolda ekran sixilmasi
window.addEventListener("scroll",()=>{
    if (scrollY>200) {
        document.querySelector('.top__arrow').style.visibility = 'visible';
        document.querySelector('.top__arrow').style.opacity = '1';
    }else{
        document.querySelector('.top__arrow').style.visibility = 'hidden';
        document.querySelector('.top__arrow').style.opacity = '0';
    }

});

document.querySelector('.top__arrow').addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//Side Bar Menu
document.querySelector('.fa-bars').addEventListener('click',()=>{
  console.log(document.querySelector('.sidebar__menu').style.left.length);
    if(document.querySelector('.sidebar__menu').style.left.length == 0 || document.querySelector('.sidebar__menu').style.left.length == 5){
        document.querySelector('.sidebar__menu').style.left = "0%";
        document.querySelector('.webcontent').style.overflow = "hidden";
        document.querySelector('body').style.overflow = "hidden";
    }
    else{
        document.querySelector('.sidebar__menu').style.left = "-110%";
        document.querySelector('.webcontent').style.overflow = "auto";
        document.querySelector('body').style.overflow = "auto";
    }
});
//Modal

fetch('http://127.0.0.1:5500/data.json')
.then(response => response.json())
.then(data => {

  var blogbox = document.querySelector('.blog__content');
  var blogcarts = "";

  data.data.forEach(box => {
    blogcarts += `
          <div  onclick="openmodals(this.id)" id="${box.blog_id}" class="portfolio__cart blogcart">
            <div class="portfolio__img">
                <img src="${box.blog_img}" alt="">
            </div>
            <div class="portfolio__text">
                <div class="portfolio__info">
                    <div class="category">
                        <a>${box.blog_direction}</a>
                    </div>
                    <div class="like">
                        <span>${box.blog_date}</span>
                    </div>
                </div>
                <a class="minititel">${box.blog_title} <i class="fa-solid fa-arrow-down"></i></a>
              </div>
          </div>
    
    
    `;

  });

  blogbox.innerHTML = blogcarts;

  myjson = data;
  
})
.catch(error => console.log(error))

var myjson;


function openmodals(e) {
  document.querySelector('.modal').style.display = 'flex';
  
  myjson.data.forEach(element => {
    if(element.blog_id == e){
      document.querySelector('.modal').innerHTML =  `
  
      <div class="modal__box">
          <i onclick="closemodal()" class="fa-solid fa-xmark modal__close"></i>

          <div class="modal__img">
              <img src="${element.blog_img}" alt="">
          </div>
          
          <p class="text date__modal">${element.blog_date}</p>
          <h1 class="minititel">${element.blog_title}</h1>
          <p class="text">${element.blog_direction}</p>

          <h1 class="minititel">Leave a Reply</h1>
          <form action="">
              <div class="inputs">
                  <input placeholder="Name" type="text">
                  <input placeholder="Email" type="text">
                  <input placeholder="Website" type="text">
              </div>
              <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
          </form>
      </div>
  
  `

    }
   
  });

}

function closemodal() {
  
  document.querySelector('.modal').style.display = 'none';
  
}
