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
    let likeList = document.querySelector(".likes");
    let commentList = document.getElementById("list");
    
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
        let obj = document.getElementById(`${counter.innerText}`);
        obj ? obj.children[0].innerText++ :
        likeList.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    });

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        let comment = document.getElementById("comment-input").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.getElementById("comment-form").reset();
    });
})
