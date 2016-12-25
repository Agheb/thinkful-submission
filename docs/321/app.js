/* 	Shopping List:
 	- enter items by entering text and hitting "Return" or clicking the "Add item" button
 	- check and uncheck items on the list by clicking the "Check" button
	- permanently remove items from the list
*/

var state = {
    items: []
};

var addItem = function(state, item) {
    console.log(item);
    state.items.push(item);
};

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return wrapItem(item);
    });
    element.html(itemsHTML);
};

function wrapItem(item){
	var longtail = '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
	return '<li><span class="shopping-item">' + item + longtail;
}




$(document).ready(function() {

$('#js-shopping-list-form').submit(function(e) {
    event.preventDefault();
    console.log("success");
    addItem(state, $(e.currentTarget).find('#shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});

});