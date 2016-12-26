/* 	Shopping List:
 	- enter items by entering text and hitting "Return" or clicking the "Add item" button
 	- check and uncheck items on the list by clicking the "Check" button
	- permanently remove items from the list
*/

var state = {
    items: [{itemName : "apples", checked: false},{itemName : "oranges", checked: false},{itemName : "milk", checked: true},{itemName : "bread", checked: false}]
};


var addItem = function(state, item) {
    console.log(item);
    state.items.push({itemName : item , checked: false});
};

function findValue(state,itemName){
// Little helper to find a certain object and returns its position in item array
    
    for (var i = 0, len = state.items.length; i < len; i++) {
        if (state.items[i].itemName === itemName){
                var pos = i;
                return pos;
        }
    }

}

var deleteItem = function(state,itemName){
    var pos = findValue(state,itemName);
    state.items.splice(pos);
}



var checkItem =  function(state,itemName){
    var pos = findValue(state,itemName);
    state.items[pos].checked = (state.items[pos].checked) ? false : true;
}

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return wrapItem(item);
    });
    element.html(itemsHTML);
};

function wrapItem(item){
	var longtail = '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
	return '<li><span class="shopping-item">' + item.itemName + longtail;
}

function handleAddItem(){

    $('#js-shopping-list-form').on('submit',function(e) {
    e.preventDefault();
    console.log("success");
    addItem(state, $(e.currentTarget).find('#shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
    $("#js-shopping-list-form")[0].reset();
    })
}

function handleDeleteItem(){
  $('.shopping-list').on('click','.shopping-item-delete',function(e){
        console.log("delete");
        var itemHTML = $(e.currentTarget).parentsUntil('ul');
        console.log(itemHTML);
        deleteItem(state,$(itemHTML).find('.shopping-item').text());
       $(itemHTML).remove();
    })
}

function handleCheckedItem(){
  $('.shopping-list').on('click','.shopping-item-toggle',function(e){
      var itemHTML = $(e.currentTarget).parentsUntil('ul');
      checkItem(state,$(itemHTML).find('.shopping-item').text())
      $(itemHTML).find('.shopping-item').toggleClass('shopping-item__checked');
  })  
}



$(document).ready(function() {
    handleAddItem();
    handleDeleteItem();
    handleCheckedItem();
})
