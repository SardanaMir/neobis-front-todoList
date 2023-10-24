document.addEventListener("DOMContentLoaded", () => {

    //добавление таска, нажатие кнопки add
    const btnAdd = document.querySelector('.btn-add');

    btnAdd.addEventListener('click', () =>{
        const inputToDo = document.querySelector('.todo__input').value;
        
        // проверка инпута
        if (inputToDo.trim() === ''){
            // если были пробелы, очищаем инпут
            cleanInput()
        } else {
            //создание таск блока в todo list
            createNewToDoTask()
            //очищение инпута
            cleanInput()
        }
    })

    //функция очищения инпута
    function cleanInput(){
        document.querySelector('.todo__input').value = '';
    }

    //создание блока с таском
    function createNewToDoTask(){
        const toDoList = document.querySelector('.todo__list')
        const inputToDo = document.querySelector('.todo__input').value;
        //создание таск блока
        const taskBlock = document.createElement('div');
        taskBlock.classList.add('todo__item-box');
        toDoList.append(taskBlock);

        //создание обертки в блоке
        const newItemWrapper = document.createElement('div');
        newItemWrapper.classList.add('todo__item-wrapper');
        taskBlock.append(newItemWrapper);
        
        //создание checkbox
        const todoItemDiv = document.createElement('div');
        todoItemDiv.className = 'todo-item';
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        span.className = 'bubble';
        //выбор категории
        if (document.getElementById('category2').checked){
            span.classList.add('personal');
        }else{
            span.classList.add('business');
        }
        // Собираем структуру checkbox
        label.append(checkbox);
        label.append(span);
        todoItemDiv.append(label);
        newItemWrapper.append(todoItemDiv)

        //создание строки и добавление таска из инпута
        const taskText = document.createElement('p');
        taskText.classList.add('todo__item-text');
        taskText.classList.add('editable');
        taskText.textContent = inputToDo;
        newItemWrapper.append(taskText)

        //создание обертки для кнопок 
        const newBtnWrapper = document.createElement('div');
        newBtnWrapper.classList.add('btn__wrapper');
        taskBlock.append(newBtnWrapper);
        
        //создание кнопки редактирования
        const newBtnEdit = document.createElement('button');
        newBtnEdit.classList.add('btn-edit');
        newBtnEdit.textContent = 'Edit'
        newBtnWrapper.append(newBtnEdit);
        
        // создание кнопки удаления
        const newBtnDelete = document.createElement('button');
        newBtnDelete.classList.add('btn-delete');
        newBtnDelete.textContent = 'Delete'
        newBtnWrapper.append(newBtnDelete);

        //удаление таска из таск лист
        deleteBtnPush();
        //редактирование таска
        editBtnPush();
        //отметить таск выполненным
        done()
    }
    

    //удаление таска из таск лист
    function deleteBtnPush(){
        const btnDelete = document.querySelectorAll('.btn-delete');
        for (let i = 0; i < btnDelete.length; i++){
            btnDelete[i].addEventListener('click', deleteToDoTask)
        }
    }
    //удаление таска из todo list
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
    //отметить таск выполненным
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
})


