const liveDate=new Date();
const format={weekday:'short',month:'short',day:'2-digit',year:'numeric'};
document.getElementById('live-date').innerHTML=liveDate.toLocaleDateString('en-US',format);