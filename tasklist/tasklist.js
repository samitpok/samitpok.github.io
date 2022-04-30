        
let taskList = []
var storedTaskList;

window.onload = function() {
    var tlist = localStorage.getItem("tasklist");
    console.log(tlist);
    if(tlist != null && tlist != ""){
         storedTaskList = JSON.parse(tlist);
    }
    
    if(storedTaskList != null && storedTaskList.length != 0 ){
        taskList = storedTaskList;
        document.getElementById("tasklist").value = taskList.join("\n");
    }
};


function addTask(){
    taskList.push(document.getElementById("task").value)
    document.getElementById("tasklist").value = taskList.join("\n");
    localStorage.setItem("tasklist", JSON.stringify(taskList));
    //console.log(localStorage.getItem("tasklist"));
}

function clearTask(){
    document.getElementById("tasklist").value = "";
    taskList = [];
    localStorage.setItem("tasklist", "");
}
