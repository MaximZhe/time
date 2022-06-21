
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

//Timer//
const deadLine = new Date();// дата окончания акции
deadLine.setDate(deadLine.getDate() + 2);
//Функция вычисляющая разницу времени
function timerResult (endtime){
    const t = Date.parse(endtime) - Date.parse(new Date());
    const day = Math.floor(t / (1000 * 60 * 60 * 24));
    const hour = Math.floor((t / (1000 * 60 * 60) % 24)); //Получаем остаток, хвостик который остается при делении. т.е например 50 часов это 2 дня и 2 часа(это остаток)
    const minute = Math.floor((t / 1000 / 60) % 60);
    const second = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'day': day,
        'hour': hour,
        'minute': minute,
        'second': second,
    };
}
//Функция проверяющая число, если меньше 10 то вперед подставляет 0
function getZero (num){
    if (num >= 0 && num < 10){
        return `0 ${num}`;
    }else{
        return num;
    }
}
//Функция добавляющая значения из объекта в нужные месте верстки
function clockTimer (selector, endtime){
    const timers = document.querySelector(selector);
    const d2 = timers.querySelector('#d');
    const h2 = timers.querySelector('#h');
    const m2 = timers.querySelector('#m');
    const s2 = timers.querySelector('#s');
    const timeInterval = setInterval (updateTimer, 1000);

    updateTimer (); //Запускаем функцию, чтобы таймер стартовал сразу и не отображались значение тайймера которые указаны изначально в верстке
    
    
    function updateTimer (){
        const t = timerResult (endtime);

        d2.innerHTML = getZero (t.day);
        h2.innerHTML = getZero(t.hour);
        m2.innerHTML = getZero(t.minute);
        s2.innerHTML = getZero(t.second);

        if ( t.total <= 0){
            clearInterval(timeInterval);
        }
    }
}

clockTimer (".timers", deadLine);


