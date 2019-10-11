window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    const mainBlock = document.querySelector("#block");
    const actionElems = document.querySelector(".action-elems");
    const cat = document.querySelector(".cat");
    const iluminator = document.querySelector(".window");
    const iceberg = document.querySelector(".iceberg");
    const santa = document.querySelector(".santa");
    const deer = document.querySelector(".deer-2");
    const bubbles = document.querySelectorAll(".bubble");
    const torpedoes = document.querySelectorAll(".torpedoes");
    const mine = document.querySelector(".mine");
    const boom = document.querySelector(".boom");
    const freworks = document.querySelectorAll(".firework");
    const popup = document.querySelector("#pop-up");
    const iceTop = document.querySelector(".iceberg_top");
    const iceBottom = document.querySelector(".iceberg_bottom");
    const helpUp = document.querySelector("#help-up");

    // Контроль анімацій субмарини до активної фази
    let counter = 1;
    actionElems.style.setProperty("--count", counter);
    function addAnimCount(e) {
        if(e.animationName == "submarine" && e.type.indexOf("animationend") >= 0){
            actionElems.style.setProperty("--count", ++counter); 
        }
    }

    // активна фаза
    function stopSubmorine (e){
        if(e.animationName == "submarine" && e.type.indexOf("animationend") >= 0){
            // лодка йде на помічь
            actionElems.classList.add("submarine-action");
            bubbles.forEach(element => {
                element.classList.add("bubble-stop");
            });
            // торпеди в ціль
            torpedoes.forEach(element => {
                element.classList.add("torpedoes-action");
            });
            // ферверки вибухають
            freworks.forEach(element => {
                element.classList.add("firework-action");
            });
            // кіт вилазить з лодки
            cat.classList.add("cat-action");
            iluminator.classList.add("window-action");
            // фйсберг розвалюється
            iceberg.classList.add("iceberg-stop");
            iceTop.classList.add("iceberg-action_top");
            iceBottom.classList.add("iceberg-action_bottom");
            // інше
            santa.classList.add("santa-action");
            deer.classList.add("deer-action");
            mine.classList.add("mine-action");
            boom.classList.add("boom-action");
            popup.classList.add("popup-action");
        }
    }

    actionElems.addEventListener("animationend", addAnimCount);
    // клік
    mainBlock.addEventListener("click", function() {
        helpUp.classList.add("helpup-action");
        actionElems.style.setProperty("--count", counter);
        actionElems.removeEventListener("animationend", addAnimCount);
        actionElems.addEventListener("animationend", stopSubmorine); 
    });

});
