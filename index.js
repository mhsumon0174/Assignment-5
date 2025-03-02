// live date work
const liveDate=new Date();

document.getElementById('live-date').innerHTML=liveDate.toDateString();
document.getElementById('bg-change-btn').addEventListener('click',function(){

    const colors=["yellow","red","green","blue","violet","indigo","cyan","teal","olive"];
    
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
        document.getElementById('activity-content').innerHTML+=`<p class="bg-gray-200 mb-3 p-1 rounded-lg">You Have Completed a task named`+ ' ' +text +' at '+ new Date().toLocaleTimeString();
        const totalTask=parseInt(document.getElementById('total-task').innerText);
        document.getElementById('total-task').innerText=totalTask+1;

        const pendingTask=parseInt(document.getElementById('pending-task').innerText);
        document.getElementById('pending-task').innerText=pendingTask-1;
        if(pendingTask===1){
            alert('You Have Completed All The Task Successfully')
        }
    })
}

document.getElementById('clear-history-btn').addEventListener('click',function(){
    document.getElementById('activity-content').innerHTML='';
})






