let assets=[

{
id:"AST001",
name:"Dell Laptop",
category:"Electronics",
status:"Available",
allocated:"-"
},

{
id:"AST002",
name:"HP Laptop",
category:"Electronics",
status:"Allocated",
allocated:"Rahul Sharma"
},

{
id:"AST003",
name:"Office Chair",
category:"Furniture",
status:"Under Maintenance",
allocated:"-"
}

];

let assetEditIndex=-1;

function loadAssets(){

let tbody=document.getElementById("assetTable");

tbody.innerHTML="";

assets.forEach((a,index)=>{

let color="success";

if(a.status=="Allocated") color="primary";

if(a.status=="Under Maintenance") color="warning";

if(a.status=="Lost") color="danger";

if(a.status=="Retired") color="secondary";

tbody.innerHTML+=`

<tr>

<td>${a.id}</td>

<td>${a.name}</td>

<td>${a.category}</td>

<td>

<span class="badge bg-${color}">

${a.status}

</span>

</td>

<td>${a.allocated}</td>

<td>

<button
class="btn btn-warning btn-sm"
onclick="editAsset(${index})">

<i class="fa fa-edit"></i>

</button>

<button
class="btn btn-danger btn-sm"
onclick="deleteAsset(${index})">

<i class="fa fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

window.onload=loadAssets;