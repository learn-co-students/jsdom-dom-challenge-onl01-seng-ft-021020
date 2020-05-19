        document.querySelector("#minus").addEventListener("click", function(event) {

        document.querySelector("#counter").innerText--

    }, false);

        document.querySelector("#plus").addEventListener("click", function(event) {

        document.querySelector("#counter").innerText++

    }, false);

    document.querySelector("#heart").addEventListener("click", function(event) {

        let number = document.querySelector("#counter").innerText

        if(document.getElementById("n"+number)!=null){
            document.querySelector("#n" + number + " span")[0].innerText += "hi"
        } else {
            document.querySelector(".likes").innerHTML += "<li id=n" + number + "> " + number +" Liked " + "<span>1</span> times.</li>" 

        }

        
    
        }, false);

    let enabled = true

    document.querySelector("#pause").addEventListener("click", function(event) {

    if(enabled == true){
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
        enabled = false;

    }
    else{
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
        enabled = true;

    }
    

    }, false);

    // Will execute myCallback every 0.5 seconds 
    var intervalID = window.setInterval(myCallback, 1000);

    function myCallback() {
        if(enabled == true){
            document.querySelector("#counter").innerText++

        }
        
    }

    document.querySelector("#submit").addEventListener("click", function(event) {
    event.preventDefault();
    let description = document.querySelector("#comment-input").value;
    document.querySelector("#list").innerHTML += "<li>" + description + "</li>";


    }, false);