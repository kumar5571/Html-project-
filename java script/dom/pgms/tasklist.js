let taskFormEl=document.getElementById('task-form');
let taskEl=document.getElementById('task-el');


let taskList= localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];   

taskFormEl.addEventListener('submit',function(e)
{
    e.preventDefault();
    let task=taskEl.value;

    taskList.unshift(task);

    localStorage.setItem('tasks',JSON.stringify(taskList));

    displayTasks(taskList);

    taskEl.value="";

    
})


function displayTasks(list)
{
    if(list.length>0)
    {
        let eachTask='';
        list.forEach((task,i)=>
        {
            eachTask+=`<li class="list-group-item list-group-item-secondary mb-2">
                        <span class="fw-bold">${task}</span>
                        <button class="float-end ms-2" onclick="deleteTask(${i})">
                            <i class="bi bi-archive-fill"></i>
                        </button>
                        <button class="float-end" onclick="updateTask(${i})">
                            <i class="bi bi-pen-fill"></i>
                        </button>
                    </li>`;
    });
    //console.log(eachTask);
    document.getElementById('task-list-el').innerHTML=eachTask;
    }
}
displayTasks(taskList);



function deleteTask(id)
{
    taskList.splice(id,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks(taskList);
}

function updateTask(id)
{
    taskEl.value=taskList[id];
    taskList.splice(id,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks(taskList);
}