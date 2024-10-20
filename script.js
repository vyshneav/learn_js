let btn = document.getElementById("first")
let currentmd = "light"
let body = document.querySelector("body")

btn.addEventListener("click",()=>{
    if(currentmd == "light"){
        body.classList.add("dark")
        body.classList.remove("light")
        btn.innerText = "light"
        currentmd = "dark"
        console.log(currentmd)
    }  
    else{
        body.classList.add("light")
        body.classList.remove("dark")
        btn.innerText = "dark"

        // document.getElementsByClassName("heading").style.color = "white"
        currentmd = "light"
        console.log(currentmd)
    }  
})



