function showMsg(msg){alert(msg);}
function bookFlight(){
let from=document.getElementById('from').value;
let to=document.getElementById('to').value;
let date=document.getElementById('date').value;
if(!from||!to||!date){alert('Please fill all flight details');return;}
alert(`Flight booked from ${from} to ${to} on ${date}`);
}
function bookFood(item){alert(item+' added to your in-flight meal order!');}
function openModal(id){document.getElementById(id).style.display='flex';}
function closeModal(id){document.getElementById(id).style.display='none';}
window.onclick=function(e){document.querySelectorAll('.modal').forEach(m=>{if(e.target===m)m.style.display='none';});}