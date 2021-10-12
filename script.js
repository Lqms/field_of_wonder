let letters = [];
let attempts = 10;
document.querySelector("#check").disabled = true;
document.querySelector("#letter").disabled = true;
document.querySelector("#word").disabled = true;


document.querySelector("#start").onclick = function () {
    words = ['веник', 'букашка', 'лента', 'вертолет', 'борода', 'шприц', 'пальма', 'табло', 'зимовка', 'посох', 'ацетон', 'купюра', 'кирпич', 'белка', 'башмак', 'кнопка', 'лак', 'конверт', 'веер', 'сюрприз', 'ключ', 'пелёнка', 'пингвин', 'корона', 'желе', 'самолёт', 'цыплёнок', 'чернила', 'хвост', 'приемник', 'секунда', 'поролон', 'коньки', 'свеча', 'фольга', 'керосин', 'рюмка', 'джинн', 'ириска', 'волна', 'локатор', 'пюре', 'этикетка', 'пиявка', 'ручей', 'стрелка', 'кувшин', 'стог', 'тыква', 'волан', 'крепость', 'валенки', 'вихрь', 'ласты', 'банк', 'драчун', 'антрекот', 'наушники', 'самокат', 'водопад', 'ярмарка', 'сушка', 'Китай', 'звонок', 'студия', 'прививка', 'пила', 'заря', 'пружина', 'карась', 'степь', 'танго', 'яйцо', 'вагон', 'майка', 'снегопад', 'район', 'конура', 'лилия', 'ступенька', 'пробка', 'десерт', 'ралли', 'карантин', 'вулкан', 'утюг', 'муравей', 'сальто', 'дупло', 'размер', 'кочан', 'клюква', 'мотор', 'писк', 'сметана', 'розетка', 'линейка', 'подвал', 'лесник', 'парус'];
    rand = Math.floor(Math.random() * words.length);
    word = words[rand];

    letters = [];
    attempts = 10;
    document.querySelector("#myletters").innerHTML ="";

    document.querySelector("span").innerHTML = attempts;
    document.querySelector("#word").value = "";
    document.querySelector("#letter").disabled = false;
    document.querySelector("#check").disabled = false;
    document.querySelector("#start").disabled = true;
    for (let i = 0; i < word.length; i++) {

        console.log(word[i]);
        document.querySelector("#word").value = document.querySelector("#word").value + "*";

        document.querySelector("#letter").value = "";
        document.querySelector("#letter").focus();
    }
};

document.querySelector("#check").onclick = function () {
    let letter = document.querySelector("#letter").value;
    let out = "";
    let win = true;
    let myletters = document.querySelector("#myletters").value;

    document.querySelector("#myletters").innerHTML = document.querySelector("#myletters").innerHTML + letter + " ";



    letters.push(letter);
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (letters.indexOf(char) != -1) {
            out = out + char;
        } else {
            win = false;
            out = out + "*";

        }
    }
    if (word.indexOf(letter) == -1) {
        attempts = attempts - 1;
        document.querySelector("span").innerHTML = attempts;

    }

    if (attempts == 0) {

        document.querySelector("#letter").disabled = true;
        document.querySelector("#check").disabled = true;
        document.querySelector("#start").disabled = false;
        alert("Слово было: " + word);


    }

    if (win == true) {
        document.querySelector("#letter").disabled = true;
        document.querySelector("#check").disabled = true;
        document.querySelector("#start").disabled = false;
        alert("ViVon!");
    }

    console.log(letters);
    document.querySelector("#word").value = out;
    document.querySelector("#letter").value = "";
    document.querySelector("#letter").focus();



};
