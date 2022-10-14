let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let tasks = document.querySelector('.tasks')

// add btn activation 

input.addEventListener('keyup', function(){
    if(input.value.trim() !== 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})

// Add new item

addBtn.addEventListener('click', function(){
    if(input.value.trim() !== 0){
        let newItem = document.createElement('figure')
        newItem.classList.add('tasks')
        newItem.innerHTML = `
            <div class="item">
                <p> ${input.value} </p>
                <div class="item-btn">
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div> 
        `
        tasks.appendChild(newItem)
        input.value = ''
    }else{
        alert('Please enter a tasks')
    }
})

// delete item 

tasks.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove()
    }
})

//item complete

tasks.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.toggle('complete')
    }
})