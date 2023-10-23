document.addEventListener("DOMContentLoaded", () => {

    //добавление таска, нажатие кнопки add
    const btnAdd = document.querySelector('.btn-add');
    btnAdd.addEventListener('click', () =>{
        const inputToDo = document.querySelector('.todo__input').value;
        const error = document.querySelector('.error');
        if (inputToDo.trim() === ''){
            // error.textContent = 'please text task';
            cleanInput()
        } else {
            error.textContent = '';  
            createNewToDoTask()
        }
    })

    //очищение инпута
    function cleanInput(){
        document.querySelector('.todo__input').value = '';
    }

    //создание блока с таском и добавление в лист
    function createNewToDoTask(){
        const parentElement = document.querySelector('.todo__list')
        const inputToDo = document.querySelector('.todo__input').value;
    
        const newElement = document.createElement('div');
        newElement.classList.add('todo__item-box');
        parentElement.append(newElement);
    
        const newItemWrapper = document.createElement('div');
        newItemWrapper.classList.add('todo__item-wrapper');
        newElement.append(newItemWrapper);
    
        //очищение инпута
        cleanInput()
    
        const todoItemDiv = document.createElement('div');
        todoItemDiv.className = 'todo-item';
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        span.className = 'bubble';
        if (document.getElementById('category2').checked){
            span.classList.add('personal');
        }else{
            span.classList.add('business');
        }

        // Собираем структуру
        label.appendChild(checkbox);
        label.appendChild(span);

        todoItemDiv.appendChild(label);
        newItemWrapper.append(todoItemDiv)


        const p = document.createElement('p');
        p.classList.add('todo__item-text');
        p.classList.add('editable');
        p.textContent = inputToDo;
        newItemWrapper.append(p)


        const newBtnWrapper = document.createElement('div');
        newBtnWrapper.classList.add('btn__wrapper');
        newElement.append(newBtnWrapper);
    
        const newBtnEdit = document.createElement('button');
        newBtnEdit.classList.add('btn-edit');
        newBtnEdit.textContent = 'Edit'
        newBtnWrapper.append(newBtnEdit);
    
        const newBtnDelete = document.createElement('button');
        newBtnDelete.classList.add('btn-delete');
        newBtnDelete.textContent = 'Delete'
        newBtnWrapper.append(newBtnDelete);
        
        //удаление таска из таск лист
        deleteBtnPush();
        //редактирование таска
        editBtnPush();
        done()
    }
    
    //удаление таска из таск лист
    function deleteBtnPush(){
        const btnDelete = document.querySelectorAll('.btn-delete');
        for (let i = 0; i < btnDelete.length; i++){
            btnDelete[i].addEventListener('click', deleteToDoTask)
        }
    }

    function deleteToDoTask(){
        document.querySelector('.todo__item-box').remove()
    }

    //редактирование имени юзера
    const userName = document.querySelector('.userName');
    userName.addEventListener('click', () =>{
        userName.contentEditable = true;
        userName.focus();
    });

    //редактирование тасков
    function editBtnPush(){
        const editBtn = document.querySelectorAll('.btn-edit')
        const task = document.querySelectorAll('.todo__item-text');
        for (let i = 0; i < editBtn.length; i++){
            editBtn[i].addEventListener('click', () =>{
                task[i].contentEditable = true;
                task[i].focus();
            })
        }
    }
})

function done(){
    const checkbox = document.querySelectorAll('.todo-item input[type="checkbox"]');
    const taskCollection = document.querySelectorAll('.todo__item-text');
    
    for (let i = 0; i < checkbox.length; i++){
        checkbox[i].addEventListener('click', ()=>{
            if (checkbox[i].checked){
                taskCollection[i].classList.add('done')
            }else{
                taskCollection[i].classList.remove('done');
            }
        }
    )}
}
