var toDoList = document.querySelector('.todo-list'); //находим список дел
var items = toDoList.children; //находим все дочерние элементы в динамическую коллекцию
var listMessage = document.querySelector('.tasks hidden'); //находим текст "Все задачи выполнены"
var newItemForm = document.querySelector('.add-form'); //находим форму ввода цели
var newItemTitle = newItemForm.querySelector('.add-form-input'); //находим поле ввода 
var taskTemplate = document.getElementById('task-template').content; //находим шаблонную разметку новой задачи(получаем фрагмент)
var newItemTemplate = taskTemplate.querySelector('.todo-list-item'); //находим задачи

var  emptyListMessage = function () {
      if (items.length === 0) {  //если целей нет
        listMessage.classList.remove('hidden'); //удаляем класс, чтобы показался текст "Все задачи выполнены"
      } else {
        listMessage.classList.add('hidden'); //добавляем класс, чтобы скрыть текст "Все задачи выполнены"
      }
};

var addCheckHandler = function (item) {
  var checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () { //ловим момент, когда меняется статус поля (с выбранного на выбранное и наоброт)
  item.remove(); //удаляем элемент
  emptyListMessage(); //проверяем, все ли цели выполнены
})
}


for (var i = 0; i < items.length; i++) {
      addCheckHandler(items[i]);
}

newItemForm.addEventListener('keydown', function (evt) { //клик по кнопке вызовет отправку данных из формы на сервер
     if (evt.keyCode === 13 ) {
         var taskText = newItemTitle.value; //получаем текст из поля ввода
             if (taskText == "") { //если пользователь ничего не ввел
                alert("Enter your task");
              } else {
                var task = newItemTemplate.cloneNode(true); //вернем склонированный элемент со всеми вложеностями 
                var taskDescription = task.querySelector('span'); //находим элемент, в котором указано название задачи
                taskDescription.textContent = taskText; //подставляем в элемент текст из поля ввода 
                addCheckHandler (task); //вешаем обработчик на чекбокс (при изменении статуса чекбокса - удаляем задачу)
                toDoList.appendChild(task); //элемент task добавляем на страницу в конец списка list
                evt.preventDefault(); //отменяем отправку формы чтобы отобразить данные на странице
                emptyListMessage(); //проверяем - есть ли цели или нет
                newItemTitle.value = ''; //удаляем текст, если задача добавилась на страницу
                }    
     }
});
          

          
        


    
    
    
  
  
