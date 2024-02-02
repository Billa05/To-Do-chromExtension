document.getElementById('add-button').addEventListener('click', function() {
    var value = document.getElementById('todo-input').value;
    if (value) {
        addItem(value);
        document.getElementById('todo-input').value = '';
    }
});

function addItem(text) {
    var list = document.getElementById('todo-list');

    var item = document.createElement('li');
    item.innerText = text;

    var remove = document.createElement('button');
    remove.innerText = 'Remove';
    remove.addEventListener('click', function() {
        list.removeChild(item);
    });

    item.appendChild(remove);
    list.appendChild(item);
}