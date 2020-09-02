var liveClass = document.getElementById('live-class');
var notes = document.getElementById('notes');
var timeline = document.getElementById('Timeline');
var gridTwo = document.querySelectorAll('.grid-two');




document.addEventListener('DOMContentLoaded',()=>{
    gridTwo.forEach((e)=>{
        if(e.classList.value == 'timeline grid-two d-none'){
            e.classList.remove('d-none');
        }
    })
})


liveClass.addEventListener('click',()=>{
    gridTwo.forEach((e)=>{
        if(e.classList.value == 'timeline grid-two' || e.classList.value == 'live-class grid-two' || e.classList.value == 'notes-class grid-two' ){
            e.classList.add('d-none');
        }
        if(e.classList.value == 'live-class grid-two d-none'){
            list = 'd-none';
            e.classList.remove('d-none');
        }
    })
});

notes.addEventListener('click',()=>{
    gridTwo.forEach((e)=>{
        if(e.classList.value == 'timeline grid-two' || e.classList.value == 'live-class grid-two' || e.classList.value == 'notes-class grid-two'){
            e.classList.add('d-none');
        }
        if(e.classList.value == 'notes-class grid-two d-none'){
            e.classList.remove('d-none');
        }
    })
});

timeline.addEventListener('click',()=>{
    gridTwo.forEach((e)=>{
        if(e.classList.value == 'timeline grid-two' || e.classList.value == 'live-class grid-two' || e.classList.value == 'notes-class grid-two' ){
            e.classList.add('d-none');
        }
        if(e.classList.value == 'timeline grid-two d-none'){
            list = 'd-none';
            e.classList.remove('d-none');
        }
    })
});
