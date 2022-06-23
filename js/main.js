
setInterval (() => {
    let h = document.querySelector("#hours");
    let m = document.querySelector("#minutes");
    let s = document.querySelector("#seconds");
    
    let hh = document.querySelector("#hh");
    let mm = document.querySelector("#mm");
    let ss = document.querySelector("#ss");

    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    

    let hDot = document.querySelector(".h_dot");
    let mDot = document.querySelector(".m_dot");
    let sDot = document.querySelector(".s_dot");



    /* Добавляем 0  если значение меньше 10 */

    hours = (hours < 10) ? `0${hours}` : `${hours}`;
    min = (min< 10) ? `0${min}` : `${min}`;
    sec = (sec < 10) ? `0${sec}` : `${sec}`;

    /*Выводим время на страницу  */

    h.innerHTML = `${hours} <br> Hours`;
    m.innerHTML = `${min} <br> Minutes`;
    s.innerHTML = `${sec} <br> Seconds`;
    

    hh.style.strokeDashoffset = 440 - (440 * hours) / 24;
    mm.style.strokeDashoffset = 440 - (440 * min) / 60;
    ss.style.strokeDashoffset = 440 - (440 * sec) / 60;

    hDot.style.transform =`rotate(${hours * 15}deg)`;
    mDot.style.transform =`rotate(${min * 6}deg)`;
    sDot.style.transform =`rotate(${sec * 6}deg)`;
});

//Timers

let date = new Date();
date = date.setDate(date.getDate() + 2);
let d = document.querySelector("#d");
let h = document.querySelector("#h");
let m = document.querySelector("#m");
let s = document.querySelector("#s");

function couts() {
    let now = new Date();
    let news = date - now;
    let day = Math.floor(news / 1000 / 60 /60 / 24);
    day = day.toString().split("");
    let hor = Math.floor(news / 1000 / 60 /60 ) % 24;
    hor = hor.toString().split("");
    let mi = Math.floor(news / 1000 / 60) % 60;
    mi = mi.toString().split("");
    let se = Math.floor(news / 1000) % 60;
    se = se.toString().split("");

    function Zero (num){
        if(num.length < 2){
            num[1] = num[0];
            num[0] = 0;
            return `<span>${num[0]}</span> <span>${num[1]}</span>`
        }else{
            return `<span>${num[0]}</span> <span>${num[1]}</span>`
        }
    }
    d.innerHTML = Zero(day);
    h.innerHTML = Zero(hor);
    m.innerHTML = Zero(mi);
    s.innerHTML = Zero(se);
}

couts ();

setInterval(couts, 1000);




