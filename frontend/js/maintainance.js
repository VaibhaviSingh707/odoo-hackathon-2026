let maintenance=[

{
id:"MR001",
asset:"Dell Laptop",
problem:"Battery Not Charging",
employee:"Rahul",
priority:"High",
status:"Pending"
},

{
id:"MR002",
asset:"Printer",
problem:"Paper Jam",
employee:"Priya",
priority:"Low",
status:"Approved"
}

];

let editIndex=-1;

function badge(status){

if(status=="Approved") return "success";

if(status=="Rejected") return "danger";

return "warning";

}

function loadMaintenance(){

let tbody=document.getElementById("maintenanceTable");

tbody.innerHTML="";

maintenance.forEach((m,index)=>{

tbody.innerHTML+=`

<tr>

<td>${m.id}</td>

<td>${m.asset}</td>

<td>${m.problem}</td>

<td>${m.employee}</td>

<td>${m.priority}</td>

<td><span class="badge bg-${badge(m.status)}">${m.status}</span></td>

<td>

<button class="btn btn-warning btn-sm me-1"
onclick="editMaintenance(${index})">

<i class="fa fa-edit"></i>

</button>

<button class="btn btn-danger btn-sm"
onclick="deleteMaintenance(${index})">

<i class="fa fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

function clearMaintenanceForm(){

editIndex=-1;

maintAsset.value="";
maintProblem.value="";
maintEmployee.value="";
maintPriority.value="Low";
maintStatus.value="Pending";

}

function saveMaintenance(){

let obj={

id:"MR"+String(maintenance.length+1).padStart(3,"0"),

asset:maintAsset.value,

problem:maintProblem.value,

employee:maintEmployee.value,

priority:maintPriority.value,

status:maintStatus.value

};

if(editIndex==-1)

maintenance.push(obj);

else

maintenance[editIndex]=obj;

bootstrap.Modal.getInstance(
document.getElementById("maintenanceModal")
).hide();

loadMaintenance();

}

function editMaintenance(i){

editIndex=i;

let m=maintenance[i];

maintAsset.value=m.asset;
maintProblem.value=m.problem;
maintEmployee.value=m.employee;
maintPriority.value=m.priority;
maintStatus.value=m.status;

new bootstrap.Modal(
document.getElementById("maintenanceModal")
).show();

}

function deleteMaintenance(i){

if(confirm("Delete Request?")){

maintenance.splice(i,1);

loadMaintenance();

}

}

function searchMaintenance(){

let t=maintenanceSearch.value.toLowerCase();

document.querySelectorAll("#maintenanceTable tr").forEach(r=>{

r.style.display=r.innerText.toLowerCase().includes(t)?"":"none";

});

}

window.onload=loadMaintenance;