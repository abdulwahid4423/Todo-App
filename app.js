

var list = document.getElementById("list")
function addTodo(){
    var todo_item= document.getElementById("todo_item")
    var li = document.createElement("li")
    var liText= document.createTextNode(todo_item.value)
    li.appendChild(liText)
    list.appendChild(li)
    var delbtn  = document.createElement("button")
    var btntext = document.createTextNode("Delete")
    delbtn.appendChild(btntext)
    li.appendChild(delbtn)
    delbtn.setAttribute("onclick","delbtn(this)")
    
todo_item.value = ""
    
}
function delbtn(e){
    console.log(e.parentNode)
    e.parentNode.remove()
}
function btn(){
    list.innerHTML=""
}
