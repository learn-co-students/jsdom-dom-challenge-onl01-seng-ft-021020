document.addEventListener("DOMContentLoaded", () => {
 

    
    //incrementing counter
    const counter = document.querySelector("#counter")
    let seconds = setInterval(function(){counter.innerText++}, 1000)

    // minus
    const minus = document.querySelector("#minus")
    minus.addEventListener("click", function(event){
        counter.innerText--
    })

    //plus
    const plus = document.querySelector("#plus")
    plus.addEventListener("click", function(event){
        counter.innerText++
    })

    //likes 
    const heart = document.querySelector("#heart")
    heart.addEventListener("click", function(event){
        let objectCounter = counter.innerText
        const likesLocation = document.querySelector(".likes")
        likesLocation.innerHTML += `<li>${counter.innerText} was liked</li>`
        // debugger
    })

    const pause = document.getElementById("pause")
    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(seconds)
            
            plus.disabled = true;
            minus.disabled = true;
            love.disabled = true; 
            submitBtn.disabled = true;
        }
        else {
            count = setInterval(function () {
                counter.innerText++; 
            }, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false; 
            submitBtn.disabled = false;
        }
    });

    const submit = document.querySelector("#submit")
    const list = document.querySelector("#list")
    submit.addEventListener("click", function(event){
        event.preventDefault()
        let comment = document.querySelector("#comment-input").value
        list.innerHTML += `<li> ${comment} </li>`
        
    })

});