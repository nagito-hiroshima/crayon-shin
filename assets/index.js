function kureyon() {
    let Area = document.getElementById("Area");
    let Area2 = document.getElementById("Area2");
    let Vlue = document.getElementById("text");
    let inputValue = Vlue.value;
    let words = inputValue.split('　');


    if (words[1] != undefined) {
        words[1] = words[1].replace("ぞ", "ゾ");
        Area.innerHTML = words[0];
        Area2.innerHTML = words[1];
        Area3.innerHTML = "";

    } else {
        words[0] = words[0].replace("ぞ", "ゾ");
        Area3.innerHTML = words[0];
        Area2.innerHTML = "";
        Area.innerHTML = "";
    }
}


function se() {
    $('.Area').css('font-size', '85px');
    let text = document.querySelector('#text')
    var music = new Audio('https://nagito.work/crayon-shin/assets/タイトル.mp3');
    music.play();
    // 発言を作成
    const uttr = new SpeechSynthesisUtterance(text.value + "っ！")
        // 速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5)

    if (text.value.length >= 15) {
        $('.Area').css('font-size', '70px');
        console.log("aaaa")
        uttr.rate = 1.3
        if (text.value.length >= 25) {
            $('.Area').css('font-size', '60px');
        }
    }

    // 発言を再生 (発言キューに発言を追加)
    $('.Area').fadeIn();
    $('.Areas').fadeIn();
    setTimeout(function() {
        speechSynthesis.speak(uttr)
        setTimeout(function() {
            $('.Area').fadeOut();
            $('.Areas').fadeOut();
        }, 4500);
    }, 500);

}