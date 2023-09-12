const button = document.querySelectorAll(".btn")
const filterablecard = document.querySelectorAll(".card")



button.forEach(btn=>{
    btn.addEventListener("click",()=>{
        showFilteredContent(btn)
    })

})


function showFilteredContent(btn){
    filterablecard.forEach(img=>{
           if(img.classList.contains(btn.id )){
            resetactive()
                img.style.display = "block"
                btn.classList.add("active")
           }else{
            img.style.display = "none"
            
           }
    })
    

}


function resetactive(){
    button.forEach(btn=>{
        btn.classList.remove("active")
    })
}

