let inputName = document.getElementById("inputName");
let inputEnglish = document.getElementById("inputEnglish");
let inputMath = document.getElementById("inputMath");
let inputPhysics = document.getElementById("inputPhysics");
let inputChemistry = document.getElementById("inputChemistry");

let input = document.getElementsByClassName("input");
let submit = document.getElementById("submit");
let table = document.getElementById("table");

submit.addEventListener("click", () => {
  let number = 0;

  for (let i = 0; i < input.length; i++) {
    if (!input[i].value.trim()) return alert("Please ! , Fill all the boxes");
    number = parseInt(input[i].value) + number;
  }

  let percentage = (number / 400) * 100;
  percentage = percentage.toFixed(2);
  let addingData = `<tr> <td>${inputName.value}</td><td>${input[0].value}</td><td>${input[1].value}</td><td>${input[2].value}</td><td>${input[3].value}</td> <td>400</td> <td>${number}</td><td>${percentage}%</td></tr>`;
  table.innerHTML += addingData;
  console.log(table.children);
  for (let j = 0; j < input.length; j++) {
    input[j].value = "";
  }
  inputName.value = "";
});

// console.log((number / 400) * 100);

/*

// var parent = document.getElementById('parent')
// var child2 = document.getElementById('child2')

// console.log("parent=>", parent.children)
// // console.log("parent with junk artifects=>", parent.childNodes)


// console.log("child2=>", child2)
// console.log("child2 parent=>", child2.parentElement)
// console.log("child2 parent=>", child2.parentElement)
// console.log("child1 previousSibling=>", child2.previousElementSibling)
// console.log("child3 nextSibling=>", child2.nextElementSibling)


var todo_input = document.getElementById('todo_input')
var add_todo_btn = document.getElementById('add_todo_btn')
var delete_all_todo_btn = document.getElementById('delete_all_todo_btn')
var todo_list = document.getElementById('todo_list')


delete_all_todo_btn.addEventListener('click', function () {
    todo_list.innerHTML = ''
})

add_todo_btn.addEventListener('click', function () {
    if (!todo_input.value.trim()) return alert('Todo mein kuch daaldo')

    var list_item =
        `<li> 
        <span>${todo_input.value}</span>
        <button class = 'editBtn' onclick="edit(this)">edit</button>
        <button class = 'delBtn' onclick="deleteFun(this)">del</button>
        
        </li>`
    todo_list.innerHTML += list_item

    todo_input.value = ''
})

function edit(element) {
    console.log('Edit=>', element.previousElementSibling.innerText)

    var previousValue = element.previousElementSibling.innerText

    var updatedValue = prompt('Edit Value', previousValue)

    element.previousElementSibling.innerText = updatedValue

}

function deleteFun(element) {
    element.parentElement.remove()

}
*/
