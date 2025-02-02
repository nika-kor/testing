








// to do list




// const userInput = document.querySelector('input');
// const todoList = document.querySelector('ul');
// const addTaskBtn = document.querySelector('button');


// function addTask() {
//     const newTask = document.createElement('li');

//     newTask.innerHTML = `${userInput.value} <button onclick="deleteTask(this)">delete</button>`;
//     todoList.appendChild(newTask);
//     userInput.value = "";
// }


// window.deleteTask = (elem) => {
//     elem.parentElement.remove();
// }



// addTaskBtn.addEventListener('click', addTask)












const userInput = document.querySelector('input');
const todoList = document.querySelector('ul');
const addTaskBtn = document.querySelector('button');


function addTask() {
    if (userInput.value === ""){
        Toastify({
            text: "type something",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    } else {
        const newTask = document.createElement('li');
        newTask.innerHTML = `${userInput.value}`; 


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "delete";
        newTask.appendChild(deleteBtn);

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        newTask.appendChild(checkbox);

        todoList.appendChild(newTask);
        userInput.value = "";

    }
}

function deleteTask(e) {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();    
    }
}

function checkTask(e) {
    if(e.target.tagName === 'INPUT' && e.target.checked) {
        e.target.parentElement.style.textDecoration = "line-through";

        Toastify({
            text: "task is completed",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    } else if (e.target.tagName === 'INPUT' && !e.target.checked) {
        e.target.parentElement.style.textDecoration = "none";
        Toastify({
            text: "task is not completed",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }
}


todoList.addEventListener('click', deleteTask)
addTaskBtn.addEventListener('click', addTask)
todoList.addEventListener('click', checkTask)






// при кліку на чекбокс перечеркувати задачі















































