document.addEventListener("DOMContentLoaded", () => {
    let counter = document.querySelector("#counter")
    
    let count = setInterval(function () {
        counter.innerText++; 
    }, 1000); 

    let pause_id = document.getElementById("pause")
    let minus_id = document.getElementById("-")
    let plus_id = document.getElementById("+")
    let love = document.getElementById("<3")
    let list_id = document.getElementById("list")
    let comment_id = document.getElementsByTagName("form")[0]
    let submitBtn = document.querySelector("#submit")
 
    minus.addEventListener("click", function(e){
        counter.innerText--;
    });
    
    plus.addEventListener("click", function(e){
        counter.innerText++;
    });
    
    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(count)
            
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
            love.disabled = false; 
            submitBtn.disabled = false;
        }
    });
    
   love.addEventListener("click", function(){
      let likes = document.querySelector(".likes")
    
      if(document.getElementById(`Li${counter}`) === null){
        let li = document.createElement("li");
        li.setAttribute("id", `Li${counter}`)
        li.innerHTML = `${counter} have this many likes:1`
        like.appendChild(li)
      }
      else {
        let li = document.getElementById(`Li${counter}`)
        let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
        li.innerHTML = `${counter} have this many likes:${splitted}`
        like.appendChild(li)
      }
    });
    
    submitBtn.addEventListener("click", function(e){
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });
    
    comment_id.addEventListener("submit",function(a){
      a.preventDefault()
      let b=this.children[0]
      let c=b.value;
      b.value="";
      let d=document.querySelector(".comments")
      let e=document.createElement("p")
      e.innerText=c
      d.appendChild(e)
})
    
});