let audits=[

{
id:"AU001",
department:"IT",
auditor:"Rahul",
date:"2026-07-20",
status:"Scheduled",
remark:"-"
},

{
id:"AU002",
department:"Finance",
auditor:"Priya",
date:"2026-07-15",
status:"Completed",
remark:"2 Missing Assets"
}

];

let auditEditIndex=-1;

function auditBadge(status){

if(status=="Completed") return "success";

if(status=="In Progress") return "warning";

return "primary";

}

function loadAudits(){

let tbody=document.getElementById("auditTable");

tbody.innerHTML="";

audits.forEach((a,index)=>{

tbody.innerHTML+=`

<tr>

<td>${a.id}</td>

<td>${a.department}</td>

<td>${a.auditor}</td>

<td>${a.date}</td>

<td>

<span class="badge bg-${auditBadge(a.status)}">

${a.status}

</span>

</td>

<td>${a.remark}</td>

<td>

<button class="btn btn-warning btn-sm me-1"
onclick="editAudit(${index})">

<i class="fa fa-edit"></i>

</button>

<button class="btn btn-danger btn-sm"
onclick="deleteAudit(${index})">

<i class="fa fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

function clearAuditForm(){

auditEditIndex=-1;

auditDepartment.value="";
auditAuditor.value="";
auditDate.value="";
auditStatus.value="Scheduled";
auditRemark.value="";

}

function saveAudit(){

let obj={

id:"AU"+String(audits.length+1).padStart(3,"0"),

department:auditDepartment.value,

auditor:auditAuditor.value,

date:auditDate.value,

status:auditStatus.value,

remark:auditRemark.value

};

if(auditEditIndex==-1)

audits.push(obj);

else

audits[auditEditIndex]=obj;

bootstrap.Modal.getInstance(
document.getElementById("auditModal")
).hide();

loadAudits();

}

function editAudit(index){

auditEditIndex=index;

let a=audits[index];

auditDepartment.value=a.department;
auditAuditor.value=a.auditor;
auditDate.value=a.date;
auditStatus.value=a.status;
auditRemark.value=a.remark;

new bootstrap.Modal(
document.getElementById("auditModal")
).show();

}

function deleteAudit(index){

if(confirm("Delete Audit?")){

audits.splice(index,1);

loadAudits();

}

}

function searchAudit(){

let t=auditSearch.value.toLowerCase();

document.querySelectorAll("#auditTable tr").forEach(r=>{

r.style.display=r.innerText.toLowerCase().includes(t)?"":"none";

});

}

window.onload=loadAudits;