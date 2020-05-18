document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    
    let interval = setInterval(function(){
        counter.innerText++;
    }, 1000);

    let minusButton = document.getElementById("minus");
    let plusButton = document.getElementById("plus");
    let pauseButton = document.getElementById("pause");
    let heartButton = document.getElementById("heart");
    let submitButton = document.getElementById("submit");
    
    minusButton.addEventListener("click", function(event){
        counter.innerText--;
    });

    plusButton.addEventListener("click", function(event){
        counter.innerText++;
    });

    pauseButton.addEventListener("click", function(event){
        if (pauseButton.innerText === "pause"){
            console.log("pausing");
            pauseButton.innerText = "resume";
            clearInterval(interval);

            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
            submitButton.disabled = true;
        } else {
            console.log("resuming")
            pauseButton.innerText = "pause";
            interval = setInterval(function(){
                counter.innerText++;
            }, 1000);

            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
            submitButton.disabled = false;
        }
    });

    heartButton.addEventListener("click", function(event){
        let likeList = document.querySelector("ul.likes");
        console.log(likeList);
    });
})
