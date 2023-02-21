//your code here
function addListItems() {
	var inputValue = document.getElementById("newTodoInput").value;
	document.getElementById("newTodoInput").value = "";
	if(inputValue)
	{
		var listElement = document.createElement("li");
		document.getElementById("todoList").appendChild(listElement);
		listElement.textContent = inputValue;
	}
}
document.getElementById("addTodoBtn").addEventListener("click",addListItems);
