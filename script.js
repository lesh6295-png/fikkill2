let min = 32405311;
let max = 33732367;
var items = Array(
// массив
    "алинка топ тян",
    "добавь попольше черновиков",
    "Чонгуки будут?",
    "8hoursking и его ужин здесь t.me/perdub_0",
    "купи уа",
    "вам фикбук починили, а вы жалуетесь",
    "здоровый человек такое писать не будет",
    "кайфуешь, да?",
    "ну купи уа",
    "perdub + mochalka + 8hoursking + носки + matb = <3",
    "ребята бтс имба?", "блять ты купишь уа или как???",
    "ун чин чан чо",
    "8hoursking любит саое дело",
    "какао какао)",
    "блэкхол в костика",
    "Прости, если трахнул. С уважение, 8hoursking",
    "Чонгук съел тэхена",
    "Костик, мы не кусаемся",
    "алинка топ тян",
    "nyc-pd - ГОВНО!!!", "David Stuart - лучший",
    "сегодня на ужин хуй",
    "все в телегу - t.me/perdub_0",
    "ну купи уа((((",
    "смотреть черновики без смс и регистрации",
    "если я насру под дверь SIA Breakpoint - это террористический акт?",
    "хочу пиццу",
    "ты всё еще не купил уа? а мы тут уязвимости для тебя чинили(",
    "такие вы смешные в тг фикбука",
    "го спам",
    "чонгука держат в заложниках и заставляют делать всё с уважением",
    "сделать гайд для разрабов брэйкпоинта, как за один блок кода закрыть дыру в сайте?",
    "Бессмысленно закрывать одну дыру в сайте, когда у тебя еще в допе три... да и не закрыли они ничего",
    "кайфуем - t.me/ehrsk",
    "t.me/ehrsk - заходите люди поиграть с фикбуком",
    "t.me/ehrsk - это я",
    "t.me/perdub_0 - а это пердуб"

);

//функции

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//рабочая часть


while (true) {
    try{
let fi = rnd(min,max);
let part_id = rnd(min, max);
for(let i=1;i<=2; i++) {
    var item = items[Math.floor(Math.random()*items.length)];
    var item2 = items[Math.floor(Math.random()*items.length)];
    fetch("https://ficbook.net/ajax/public_beta", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not ABrand\";v=\"24\", \"Google Chrome\";v=\"110\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://ficbook.net/readfic/9786712/25193434",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "selected_text=8hoursking на месте&context=" + item + "&comment=" + item2 +  "&fanfic_id=" + fi + "&part_id="+ part_id +"&type=1",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }); 
}
await sleep(400)
    }
    catch{continue;}
}
