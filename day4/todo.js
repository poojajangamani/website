function loadTodos(){
    const todos = JSON.parse(localStorage.getItem('todos'))||[];
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach((todo,index) => {
        const li = document.createElement("li");
        li.textContent = todo;
        
        const delBtn = document.createElement("button");
        delBtn.textContent ="Delete";
        delBtn.onclick = () => {
            deleteTodo(index)
        }
        li.appendChild(delBtn);
        list.appendChild(li);
        })
}

function addTodo(){
    const input = document.getElementById("todoInput");
    const newTask = input.Value;

    if(!newTask){
        alert("please enter the todo");
        return;
    }
    const todos =JSON.parse(localStorage.getItem('todos'))||[]; 
    todos.push(newTask);
    localStorage.setItem('todos',JSON.stringify(todos));
    input.value = "";
    loadTodos();
}

function deleteTodo(index){
    const todos = JSON.parse(localStorage.getItem('todos'))||[];
    todos.splice(index,1);
    localStorage.setItem('todos',JSON.stringify(todos));
    loadTodos()
}

loadTodos()