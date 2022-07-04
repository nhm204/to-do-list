const normalList = document.querySelector('#normalList');
const priorList = document.querySelector('#priorList');
const form = document.querySelector('#form');
const input = document.querySelector('#taskInput');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    const taskItem = document.createElement('li');
    taskItem.classList.add('task__item');

    const taskPrioritised = document.createElement('button');
    taskPrioritised.classList.add('isPrioritised');
    taskItem.appendChild(taskPrioritised);

    const taskPrioritisedIcon = document.createElement('i');
    taskPrioritisedIcon.classList.add('fa-regular');
    taskPrioritisedIcon.classList.add('fa-star');
    taskPrioritised.appendChild(taskPrioritisedIcon);

    const taskContent = document.createElement('input');
    taskContent.classList.add('task__content');
    taskContent.type = 'text';
    taskContent.value = task;
    taskContent.setAttribute('readonly', 'readonly');
    taskItem.appendChild(taskContent);


    const actions = document.createElement('div');
    actions.classList.add('actions');
    
    const taskEdit = document.createElement('button');
    taskEdit.classList.add('isEdited');
    taskEdit.innerText = 'Edit';

    const taskDone = document.createElement('button');
    taskDone.classList.add('isDone');
    taskDone.innerText = 'Done';

    const taskDelete = document.createElement('button');
    taskDelete.classList.add('isDeleted');
    taskDelete.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    actions.appendChild(taskEdit);
    actions.appendChild(taskDone);
    actions.appendChild(taskDelete);
    taskItem.appendChild(actions);

    normalList.appendChild(taskItem);

    input.value = '';

    taskPrioritised.addEventListener('click', (e) => {
        taskPrioritisedIcon.classList.toggle('fa-solid');
        priorList.appendChild(taskItem);
        taskContent.style.fontWeight = 600;
        if (e.target.classList[2] !== "fa-solid") {
            normalList.appendChild(taskItem);
            taskContent.style.fontWeight = 500;
        }
        taskDelete.addEventListener('click', () => {
            priorList.removeChild(taskItem);
        });
    });

    taskEdit.addEventListener('click', () => {
        if (taskEdit.innerText.toLowerCase() == 'edit') {
            taskEdit.innerText = 'Save';
            taskContent.removeAttribute('readonly');
            taskContent.focus();
        } else {
            taskEdit.innerText = 'Edit';
            taskContent.setAttribute('readonly', 'readonly');
        }
    });

    taskDone.addEventListener('click', () => {
        taskItem.classList.toggle('done');
    });

    taskDelete.addEventListener('click', () => {
        normalList.removeChild(taskItem);
        // priorList.removeChild(taskItem);
    });
})

