const button = document.querySelectorAll(".btn")
const image = document.querySelectorAll(".image")
const select = document.getElementById("select")
const productCost =document.querySelectorAll("h4")
               


button.forEach(btn=>{
    btn.addEventListener("click",()=>{
        filter(btn)
    })
})

function filter(btn){
    image.forEach(sekil=>{
        if(sekil.classList.contains(btn.id)){
            resetactive()
            sekil.style.display = "block"
            btn.classList.add("active")
        }else{
            sekil.style.display = "none"
        }
    })
}

function resetactive(){
    button.forEach(btn=>{
        btn.classList.remove("active")
    })
}



image.forEach(img=>{
    const child =  img.children[2].textContent;
    console.log(child);
})
