const buttonAdd = document.getElementById("create")
const listInit = document.getElementById("list")
const input = document.getElementById("title")

const array = ['zvqw', '4135']

const notes = [
    {
        title: "1 task",
        completed: true
    },
    {
        title: "2 task",
        completed: false
    }
]

listInit.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === "toggle") {
            notes[index].completed = !notes[index].completed
        } else if (type === "remove"){
            notes.splice(index, 1)
        }
        render()
    }
}

getNode = (notes1, index) => {
    return `
        <li
        class="list-group-item d-flex justify-content-between align-items-center"
        >
        <span class="${notes1.completed ? "text-decoration-line-through" : ""}">${notes1.title}</span>
        <span>
        <span class="btn btn-small btn-${notes1.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove" >&times;</span>
        </span>
        </li>
    `
}

render = () => {
    listInit.innerHTML = ""
    for (let [index, note] of notes.entries()) {
        listInit.insertAdjacentHTML("beforeend", getNode(note, index));
    }
}

buttonAdd.onclick = () => {
    if (input.value.length == 0) {
        return
    } 
    const newNote = {
        title: input.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    input.value = ""
}

render()
