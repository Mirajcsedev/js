const TodoInput = document.querySelector('#TodoInput');
const TodoAddBtn = document.querySelector('#AddTodoBtn');
let Todo = [];

// enter key press 
TodoInput.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        TodoAdd();
    }
})

const  TodoAdd = ()=>{
    let TastInput = TodoInput.value.trim();
    if(TastInput ===""){
        alert("hay add the item bra")
        return;
    }else{
        Todo.push({
            Text:TastInput,
            Taskstatus: false
        })
        console.dir(Todo)
        randerTodo()
    }
    TodoInput.value="";
}


const tastValidation = (taskIndex)=>{
    Todo[taskIndex].Taskstatus = !Todo[taskIndex].Taskstatus
    console.log(Todo[taskIndex].Taskstatus)
    randerTodo();
}

const DeletTask = (DTindex)=>{
    Todo.splice(DTindex,1);
      randerTodo();
}

const randerTodo=()=>{
    const taskul = document.querySelector('#TaskUl');
    taskul.innerHTML="";
    Todo.forEach((Todoarrele,index) => {
        const li = document.createElement('li');
        li.className = Todoarrele.Taskstatus? "active" : "";
        li.innerHTML=`
        <span onclick="tastValidation(${index})">${Todoarrele.Text}</span>
        <button onclick="DeletTask(${index})">x</button>
        `
        taskul.appendChild(li);
    });
}