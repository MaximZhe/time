
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

let dateNewAction = 5;
let dateAction = new Date();
dateAction = dateAction.setDate(dateAction.getDate()+ 1); // Указываем сколько дней будет идти акция


let d1 = document.querySelector("#d");
let h1 = document.querySelector("#h");
let m1 = document.querySelector("#m");
let s1 = document.querySelector("#s");
let timers = document.querySelector(".timers");

// Рекурсивный способ вызова
let start = setTimeout( function couts () {
    let now = new Date(); // Дата которая сегодня
    let news = dateAction - now; // Разница в миллисекундах между актуальной датой и датой окончания акции
    
    
    let day = Math.floor(news / 1000 / 60 /60 / 24); // Остаток дней
    day = day.toString().split("");
    let hor = Math.floor(news / 1000 / 60 /60 ) % 24; // Остаток часов
    hor = hor.toString().split("");
    let mi = Math.floor(news / 1000 / 60) % 60; // Лстаток минут
    mi = mi.toString().split("");
    let se = Math.floor(news / 1000) % 60; // Остаток секунд
    se = se.toString().split("");
    
    
   
    //Функция подставляющая значение 0 если значение меньше 10
    function Zero (num){
        if(num.length < 2){
            num[1] = num[0];
            num[0] = 0;
            return `<span>${num[0]}</span> <span>${num[1]}</span>`;
        }else if (news< 0){
            num[0] = 0;
            num[1] = 0;
            return `<span>${num[0]}</span> <span>${num[1]}</span>`;
        }else{
            return `<span>${num[0]}</span> <span>${num[1]}</span>`;
        }
    }

    
    // Выводим значения на страницу
    d1.innerHTML = Zero(day);
    h1.innerHTML = Zero(hor);
    m1.innerHTML = Zero(mi);
    s1.innerHTML = Zero(se);
    
    start = setTimeout (couts,1000);
},1000);





