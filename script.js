document.addEventListener("DOMContentLoaded", () => {

    //добавление таска, нажатие кнопки add
    const btnAdd = document.querySelector('.btn-add');
    btnAdd.addEventListener('click', () =>{
        const inputToDo = document.querySelector('.todo__input').value;
        if (inputToDo.trim() === ''){
            console.log('error')
            document.querySelector('.error').textContent = 'fill input'
            cleanInput()
        } else {
            document.querySelector('.error').textContent = ''   
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
    
        const p = document.createElement('p');
        p.classList.add('todo__item-text');
        p.classList.add('editable');
        p.textContent = inputToDo;
        newItemWrapper.append(p)

        //очищение инпута
        cleanInput()
    
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

    //
    //редактирование имени юзера
    function enableEditing() {
        const paragraph = document.querySelectorAll('.editable');
        for (let i = 0; i < paragraph.length; i++){
            paragraph[i].contentEditable = true;
            paragraph[i].focus();
        }
    }

    document.querySelector('.userName').onclick = enableEditing();

    //редактирование тасков
    function editBtnPush(){
        const editBtn = document.querySelectorAll('.btn-edit')
        const paragraph = document.querySelectorAll('.editable');
        for (let i = 0; i < editBtn.length; i++){
            editBtn[i].addEventListener('click', () =>{
                paragraph[i+1].contentEditable = true;
                paragraph[i+1].focus();
            })
        }
    }
})

