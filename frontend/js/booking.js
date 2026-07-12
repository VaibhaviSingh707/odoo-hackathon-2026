let bookings = [
{
id:"BK001",
resource:"Meeting Room A",
employee:"Rahul Sharma",
date:"2026-07-12",
start:"10:00",
end:"11:00",
status:"Approved"
},
{
id:"BK002",
resource:"Projector",
employee:"Priya Singh",
date:"2026-07-13",
start:"14:00",
end:"16:00",
status:"Pending"
}
];

let bookingEditIndex=-1;

function badge(status){

switch(status){

case "Approved":
return "success";

case "Rejected":
return "danger";

default:
return "warning";

}

}

function loadBookings(){

let tbody=document.getElementById("bookingTable");

tbody.innerHTML="";

bookings.forEach((b,index)=>{

tbody.innerHTML+=`

<tr>

<td>${b.id}</td>

<td>${b.resource}</td>

<td>${b.employee}</td>

<td>${b.date}</td>

<td>${b.start} - ${b.end}</td>

<td>

<span class="badge bg-${badge(b.status)}">

${b.status}

</span>

</td>

<td>

<button class="btn btn-warning btn-sm me-1"
onclick="editBooking(${index})">

<i class="fa fa-edit"></i>

</button>

<button class="btn btn-danger btn-sm"
onclick="deleteBooking(${index})">

<i class="fa fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

function clearBookingForm(){

bookingEditIndex=-1;

bookingEmployee.value="";
bookingDate.value="";
startTime.value="";
endTime.value="";
bookingStatus.value="Pending";
bookingResource.selectedIndex=0;

}

function saveBooking(){

let employee=bookingEmployee.value;
let resource=bookingResource.value;
let date=bookingDate.value;
let start=startTime.value;
let end=endTime.value;
let status=bookingStatus.value;

if(employee==""){

alert("Enter Employee Name");

return;

}

for(let i=0;i<bookings.length;i++){

if(i==bookingEditIndex) continue;

if(bookings[i].resource==resource &&
bookings[i].date==date &&
!(end<=bookings[i].start || start>=bookings[i].end)){

alert("Resource already booked for this time slot.");

return;

}

}

let obj={

id:"BK"+String(bookings.length+1).padStart(3,"0"),

resource,

employee,

date,

start,

end,

status

};

if(bookingEditIndex==-1)

bookings.push(obj);

else

bookings[bookingEditIndex]=obj;

bootstrap.Modal.getInstance(
document.getElementById("bookingModal")
).hide();

loadBookings();

}

function editBooking(index){

bookingEditIndex=index;

let b=bookings[index];

bookingEmployee.value=b.employee;
bookingResource.value=b.resource;
bookingDate.value=b.date;
startTime.value=b.start;
endTime.value=b.end;
bookingStatus.value=b.status;

new bootstrap.Modal(
document.getElementById("bookingModal")
).show();

}

function deleteBooking(index){

if(confirm("Delete Booking?")){

bookings.splice(index,1);

loadBookings();

}

}

function searchBooking(){

let text=bookingSearch.value.toLowerCase();

document.querySelectorAll("#bookingTable tr").forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(text)?"":"none";

});

}

window.onload=loadBookings;