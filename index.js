// live date work
const liveDate=new Date();
const format={weekday:'short',month:'short',day:'2-digit',year:'numeric'};
document.getElementById('live-date').innerHTML=liveDate.toLocaleDateString('en-US',format);
// random background change work
document.getElementById('bg-change-btn').addEventListener('click',function(){

    const colors=["yellow","red","green","blue","violet","indigo"];
    
    document.getElementById('bg-change-body').style.background=colors[Math.floor(Math.random()*colors.length)];
})

// new page work
document.getElementById('new-page').addEventListener('click',function(){
    window.location.href='second.html';
})


// button work 

const buttons=document.querySelectorAll('.completed-btn')
for(const button of buttons){
    button.addEventListener('click',function(event){
        alert('One Task Completed and Board Updated Successfully')
        event.target.setAttribute('disabled',true)
        const parent=event.target.parentElement.parentElement.parentElement;
        const text=parent.querySelector('h1').innerText;
        document.getElementById('activity-content').innerHTML+=`<p class="bg-green-100 mb-3">You Have Completed a task named`+ ' ' +text +'at'+ Date();
        const totalTask=parseInt(document.getElementById('total-task').innerText);
        document.getElementById('total-task').innerText=totalTask+1;

        const pendingTask=parseInt(document.getElementById('pending-task').innerText);
        document.getElementById('pending-task').innerText=pendingTask-1;
        if(button===buttons[buttons.length-1]){
            alert('You Have Completed All The Task Successfully')
        }
    })
}

document.getElementById('clear-history-btn').addEventListener('click',function(){
    document.getElementById('activity-content').innerHTML='';
})






