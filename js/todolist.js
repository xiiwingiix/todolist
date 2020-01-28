var insert_todo = document.querySelector('.input_todo');
var list_todo		= document.querySelector('.todoList');
var btn_delete 	= '';

window.onload = function(){
	insert_todo.addEventListener("keyup", function(e){

		if (e.keyCode === 13 && insert_todo.value != ''){

			var ele_todo 	= document.createElement('li');
			var ele_btn 	= document.createElement('span');

			ele_todo.textContent 	= insert_todo.value;
			ele_btn.className			= 'btn_delete'
			ele_btn.textContent 	= '×'
			ele_btn.addEventListener('click', deleterList);

			list_todo.appendChild(ele_todo);
			ele_todo.appendChild(ele_btn);

			insert_todo.value = '';

			btn_delete = document.querySelector('.btn_delete');
			console.log(btn_delete);

		}
	});

	function deleterList(e){
		if(e){
			e.target.parentElement.remove();
		} else {
			console.log('논클릭');
		}
	}
}