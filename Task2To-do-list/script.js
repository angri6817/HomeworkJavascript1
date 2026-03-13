function addTask() {
    let text=document.getElementById("taskInput").value;
    let date=document.getElementById("date").value;

    if(text==="") return;
    let li=document.createElement("li");

    if (date!="") {
        li.setAttribute("data-date",date)
    }

    let checkbox=document.createElement("input");
    checkbox.type="checkbox";

    checkbox.onchange=function(){
        li.classList.toggle("completed");
    };

    let span=document.createElement("span");
    span.textContent=text+" "+(date ? "("+ date +")":"");

    let removeBtn=document.createElement("button");
    removeBtn.textContent="Remove";
    removeBtn.onclick= function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);

    document.getElementById("todolist").appendChild(li);

    sortTasks();

    document.getElementById("taskInput").value = "";
    document.getElementById("date").value="";
}
function sortTasks(){

    let list= document.getElementById("todolist");
    let tasks= Array.from(list.children);

    tasks.sort(function(a,b) {

        let dateA= a.getAttribute("data-date") || "9999-12-31";
        let dateB=b.getAttribute("data-date") || "9999-12-31";

        return new Date(dateA) - new Date(dateB);
    });

    list.innerHTML="";
    tasks.forEach(task => list.appendChild(task));
}