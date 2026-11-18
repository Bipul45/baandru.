// ==========================
// Typing Effect
// ==========================

const message = `Happy National Princess Day Mere Potato ! 🫂

The most beautiful day for me 🌍💗
Happy National Princess Day meri Potato 👸🎀
My one and only Princess 👑🫶🏻.

Meri pyaari si cute si baccha  ❤️
Tum sirf meri favourite person nahi ho,
Tum meri puri duniya ho 🌍🫀
Meri har khushi ki wajah ho 🥰💕
Meri life ka sabse beautiful part ho 🦋

You are my happiness 😊💐
You are my peace 🕊️❤️
You are my favourite dream 🥺💫
You are my forever favourite Princess 👸🏻♾️

Meri jaan, hamesha aise hi muskurati rehna 😘🌹
Tumhari smile mere liye duniya ki sabse pyari cheez hai 🥰
Kabhi khud ko akela mat samajhna 🫂❤️
Main hamesha tumhari khushiyon ki dua karunga 🤞🏻💗
Aur no matter kbh kaisa sitution aayega but mai hamesha tere sath rahunga 🦋🌼
Tera support krunga or haan kalesh bhi tere se hi krunga hehehe.
Kyuki uh r my maal babe 😁😁.


Loveeeee youhh sooo muchhh meri Princess 👸🏻🌹
Meri jaanemann, meri sweet potato, mere ladoo👸👸, meri duniya 🌍🫀
Happy National Princess Day once againn 🥳🎀
Ummmmmahahhh 💋😘💋

Happy National Princess Day Mere Baccha❤️`;

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

window.onload = typeWriter;


// ==========================
// Music Play Button
// ==========================

const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function () {

    if(song.paused){
        song.play().then(()=>{
            playBtn.innerHTML="⏸ Pause Song";
        }).catch(err=>{
            console.log(err);
        });
    }else{
        song.pause();
        playBtn.innerHTML="▶ Play Song";
    }

});


// ==========================
// Scroll Reveal Animation
// ==========================

const reveals=document.querySelectorAll(".reveal");

function revealSection(){

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const revealTop=reveals[i].getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",revealSection);

revealSection();


// ==========================
// Auto Pause Music
// ==========================

song.addEventListener("ended",()=>{

playBtn.innerHTML="▶ Play Song";

});


// ==========================
// Smooth Scroll
// ==========================

document.documentElement.style.scrollBehavior="smooth";


// ==========================
// Floating Hearts
// ==========================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.opacity="0.8";
heart.style.pointerEvents="none";
heart.style.zIndex="999";

document.body.appendChild(heart);

let pos=100;

const move=setInterval(()=>{

pos--;

heart.style.top=pos+"vh";
heart.style.transform=`rotate(${pos*3}deg)`;

if(pos<-10){

clearInterval(move);

heart.remove();

}

},40);

}

setInterval(createHeart,2500);
