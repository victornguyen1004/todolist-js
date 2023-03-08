const inputBox = document.querySelector("#input-add");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const clearAllBtn = document.querySelector("#clear-all-btn");


inputBox.onkeyup = ()=>
{
    let userData = inputBox.value;
    if (userData.trim() != 0)
    {
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = () =>
{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null)
    {
        listArr = [];
    }
    else 
    {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
    addBtn.classList.remove("active");
}

showTask();

function showTask()
{
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null)
    {
        listArr = [];
    }
    else 
    {
        listArr = JSON.parse(getLocalStorage);
    }
    
    const sumTask = document.querySelector(".sum-task");
    sumTask.textContent = listArr.length;

    if (listArr.length > 0)
    {
        clearAllBtn.classList.add("active");
    }
    else 
    {
        clearAllBtn.classList.remove("active");
    }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li><span>${element}<i class='bx bxs-trash-alt'  onclick="deleteTask(${index})"; ></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index)
{
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}

clearAllBtn.onclick = () => 
{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}
