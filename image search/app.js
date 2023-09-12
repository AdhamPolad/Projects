const form = document.querySelector("#form")
const input = document.querySelector("#Searchinput")
const imagewrapper = document.querySelector(".image-wrapper")

runevent()

function runevent (){
    form.addEventListener("submit", search)
}


function search (e){
    const value = input.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID fmxy-79JMtNoDO8NNEKLQu2xqE4H3IQV52eJIyxsEng"
        } 
    })
    .then((res) => res.json())
    .then((data) => {
        Array.from(data.results).forEach((image)=>{
               addToUi(image.urls.small)
               console.log(image.urls.small)
        })
    } )
    .catch((err)=> console.log(err));






    e.preventDefault()
}


function addToUi(url){
    const div = document.createElement("div")
    div.className = "card"

    const img = document.createElement("img")
    img.setAttribute("src", url)
   img.width = 400
   img.height = 400

    div.append(img)
    imagewrapper.append(div)
}