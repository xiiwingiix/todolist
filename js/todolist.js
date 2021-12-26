var insert_todo = document.querySelector('.input_todo');
var list_todo		= document.querySelector('.todoList');
var list_done		= document.querySelector('.doneList');
var btn_delete 	= '';

window.onload = function(){
	insert_todo.addEventListener("keyup", function(e){

		if (e.keyCode === 13 && insert_todo.value != ''){

			var ele_todo = document.createElement('li');
			var ele_btn  = document.createElement('span');

			//todoList
			ele_todo.textContent = insert_todo.value;
			ele_todo.addEventListener('click', doneList);

			//delete button
			ele_btn.className		= 'btn_delete'
			ele_btn.textContent = '×'
			ele_btn.addEventListener('click', deleterList);

			list_todo.appendChild(ele_todo);
			ele_todo.appendChild(ele_btn);

			insert_todo.value = '';


		}
	});

	//delete fuction
	function deleterList(e){
		if(e){
			e.stopPropagation();

			var confirm_delete = confirm('삭제하시겠습니까?');

			if (confirm_delete) {
				e.target.parentNode.remove();
			}
		}
	}

	//done move function
	function doneList(e){
		if(e){
			var confirm_move = confirm('Done list로 이동하겠습니까?');
			if ( confirm_move ) {
				list_done.appendChild(e.target);
			}
		}
	}
}
