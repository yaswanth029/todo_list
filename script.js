const inputbox = document.getElementById("input-box");
const listcont = document.getElementById("list-container");

function addTask()
{
    if(inputbox.value === '')
    {
        alert('you must write');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputbox.value = '';
    savedata();
}

listcont.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle('checked');
        savedata(); // <-- Saves the updated list when an item is checked/unchecked
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata(); // <-- Saves the updated list when an item is deleted
    }
}, false);

function savedata()
{
    localStorage.setItem("data", listcont.innerHTML);
}

function showlist()
{
    let saved = localStorage.getItem("data");
    if(saved)
    {
        listcont.innerHTML = saved;
    }
}
showlist();
