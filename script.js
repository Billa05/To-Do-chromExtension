let json_data = [];
load_data();

document.getElementById('add-button').addEventListener('click', function() {
    var value = document.getElementById('todo-input').value;
    if (value) {
        save(value);
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
        const index = json_data.indexOf(text);
        if (index !== -1) {
            json_data.splice(index, 1);
        }
        update_data();
    });

    item.appendChild(remove);
    list.appendChild(item);
}


function save(data){
    json_data.push(data);
    update_data();
    addItem(data);
}

function load_data(){
    const loaded_data = localStorage.getItem("array");
    const final_data = JSON.parse(loaded_data);
    if (final_data){
        json_data = final_data;
        for(let i=0;i<final_data.length;i++){
            addItem(final_data[i]);
        }
    }
}

function update_data(){
    const jsonArray= JSON.stringify(json_data);
    localStorage.setItem("array",jsonArray);
}