const counterId = document.getElementById("counter")
const pause = document.getElementById("pause")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const list = document.getElementById("list")
const submitButton = document.getElementById("submit")
const commentForm = document.getElementById("comment-form")
const commentList = document.getElementById("list")
const buttonDiv = document.querySelector("div")

const resetButton = document.createElement("button")
resetButton.setAttribute("id", "reset")
resetButton.innerText = "reset"
buttonDiv.appendChild(resetButton)

// As a user, I should see the timer increment every second once the page has loaded.
let counter = 0; 
let booleanValue = true;

let timer = setInterval(function() {
     if(booleanValue){
        counterId.innerText = counter
        counter += 1;
     }
    },1000)
   
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

plus.addEventListener(`click`, function(){
    counter += 1
    counterId.innerText = parseInt(counterId.innerText) + 1;
});

minus.addEventListener(`click`, function(){
    counter -= 1
    counterId.innerText = parseInt(counterId.innerText) - 1;
});

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

heart.addEventListener(`click`, function(e){
    let likes = document.querySelector(".likes")
   if(document.getElementById(`Li${counter}`) == null) {
       let li = document.createElement("li")
       li.setAttribute("id", `Li${counter}`)
       li.innerText = `${counter} has this many likes: 1`
       likes.appendChild(li)
   }
   else{
    let li = document.getElementById(`Li${counter}`)
    let addLike = parseInt(li.innerHTML.split(":")[1]) + 1
    li.innerHTML = `${counter} has this many likes: ${addLike}`
    likes.appendChild(li)
   }
});

// As a user, I can pause the counter, which should pause the counter disable all buttons except the pause Button
// the pause Button should then show the text "resume."

pause.addEventListener(`click`, function() {

    if(booleanValue){
        pause.innerText = "resume";
        booleanValue = false;
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        resetButton.disabled = true;
        submitButton.disabled = true;
    }
    else{ 
        pause.innerText = "pause";
        booleanValue = true;
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        resetButton.disabled = false;
        submitButton.disabled = false;
    }
})


resetButton.addEventListener(`click`, function() {
    counter = 0;
})

//  submiting and posting a comment

commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const newComment = document.getElementById("comment-input").value
    const listComment = document.createElement("p")
    listComment.innerText = newComment
    commentList.appendChild(listComment)
    commentForm.reset()
});