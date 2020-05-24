let count = setInterval(addSecond, 1000);
let seconds = 0;
let counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let like = document.getElementById("heart");
let likes = document.getElementsByClassName("likes");
let likeList = likes[0];
let pause = document.getElementById("pause");
let submitButton = document.getElementById("submit");
let comments = document.getElementById("list");

function addSecond() {
    seconds++;
    counter.innerText = seconds;
};

function minusSecond() {
    seconds--;
    counter.innerText = seconds;
};

function addLikes() {
    let li = document.createElement('li')
    li.innerText = `${counter.innerText} liked 1 time`
    likeList.appendChild(li)
};


plus.addEventListener("click", addSecond);

minus.addEventListener("click", minusSecond);

like.addEventListener("click", addLikes);

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let comment = document.getElementById("comment-input").value
    comments.innerHTML += `${comment}<br>`
});

pause.addEventListener("click", function(event){
    if (pause.innerText === "pause") {
        pause.innerText = "resume"
        clearInterval(count)

        plus.disabled = true;
        minus.disabled = true;
        like.disabled = true; 
        submitButton.disabled = true;
    }
    else {
       count = setInterval(addSecond, 1000)
       pause.innerText = "pause"

       plus.disabled = false;
        minus.disabled = false;
        like.disabled = false; 
        submitButton.disabled = false;
    }
})





