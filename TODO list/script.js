const form = document.querySelector("#todoAddForm");
const toDOName = document.querySelector("#todoName");
const cardBody1 = document.querySelectorAll(".card-body")[0];
const cardbody2 = document.querySelectorAll(".card-body")[1];
const listgroup = document.querySelector(".list-group");
const clearbutton = document.querySelector("#clearButton");
const todoSearch = document.querySelector("#todoSearch")

runEvent();

let todos = [];

function runEvent(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageloaded)
    listgroup.addEventListener("click",removeTodo)
    todoSearch.addEventListener("keyup",filtreleme)
    clearbutton.addEventListener("click",removeAll)
   
}


function pageloaded(){
    checkSTorage()
   todos.forEach(function(todo){
    toADDTodoUi(todo);
   })
}


function filtreleme(e){
    let todoListesi = document.querySelectorAll(".list-group-item")
   let yazi = e.target.value
   if(todoListesi.length>0){
    todoListesi.forEach(function(todo){
        if(todo.textContent.toLocaleLowerCase().trim().includes(yazi.toLocaleLowerCase().trim())){
            todo.setAttribute("style", "display: block")
        }else{
            todo.setAttribute("style", "display: none !important")
        }
    })
   }else{
    bilgilendirici("warning", "en az bir todo olmali")
}
    
}

 
function removeAll(){
    const todoListesi = document.querySelectorAll(".list-group-item")
    todoListesi.remove()
    

}

function removeAll(){
    const todoListesi = document.querySelectorAll(".list-group-item")
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            todo.remove()
            bilgilendirici("success","basarili bir sekilde silindi:")
        })

    todos = [];
    localStorage.setItem("todos",JSON.stringify(todos))

    }else{
        bilgilendirici("warning","en az bir todo olmali")
    }

   
}


function remoTodoFromStorage (removeTodo){
    checkSTorage();
    todos.forEach(function(todo,index){
        if(removeTodo==todo){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos))

}



function removeTodo (e){
   if(e.target.className == "fa fa-remove"){
    let todo = e.target.parentElement.parentElement
    const tesdiq = confirm("silmek istediyinizden eminmisiniz?")
    if(tesdiq){
    todo.remove()
    remoTodoFromStorage(todo.textContent)
    bilgilendirici("success","basarili bir sekilde silindi")    
    }else{
        bilgilendirici("danger","silinemedi!")
    }
    
    
   }
}







 
function addTodo(e){
    const inputText = toDOName.value;
    if(inputText===null || inputText===""){
     bilgilendirici("warning","birsey giriniz:")
    }
    else{
          toADDTodoUi(inputText);
          toAddStorage(inputText);
          bilgilendirici("success","todo eklendi :")
    }

    e.preventDefault();
}

function toADDTodoUi(newtodo){
//     <li class="list-group-item d-flex justify-content-between">Todo 1
//     <a href="#" class="delete-item">
//         <i class="fa fa-remove"></i>
//     </a>
// </li>
  
const li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between";
li.textContent = newtodo

const a = document.createElement("a")
a.href = "#";
a.className = "delete-item";

const i = document.createElement("i")
i.className = "fa fa-remove";
   
a.appendChild(i)
li.appendChild(a)
listgroup.appendChild(li);
toDOName.value =""


}


function toAddStorage(newtodo){
    checkSTorage()
    todos.push(newtodo);
   localStorage.setItem("todos",JSON.stringify(todos))
}

function checkSTorage(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos= JSON.parse(localStorage.getItem("todos"))
    }
}


function bilgilendirici (type,message){
//     <div class="alert alert-warning" role="alert">
//   This is a warning alert—check it out!
// </div>

const div = document.createElement("div")
div.className = `alert alert-${type}`
div.role = "alert"
div.textContent = message;

cardBody1.appendChild(div);


setTimeout(function(){
    div.remove()
}, 2000)



}