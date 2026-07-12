let departments = [
    {
        id: 1,
        name: "IT",
        parent: "-",
        head: "Rahul Sharma",
        status: "Active"
    },
    {
        id: 2,
        name: "HR",
        parent: "-",
        head: "Priya Singh",
        status: "Active"
    },
    {
        id: 3,
        name: "Finance",
        parent: "Administration",
        head: "Amit Patel",
        status: "Inactive"
    }
];

let editIndex = -1;

function loadDepartments() {

    const table = document.getElementById("departmentTable");

    table.innerHTML = "";

    departments.forEach((dept, index) => {

        table.innerHTML += `
        <tr>

            <td>${dept.name}</td>

            <td>${dept.parent}</td>

            <td>${dept.head}</td>

            <td>
                <span class="badge ${dept.status === "Active" ? "bg-success" : "bg-danger"}">
                    ${dept.status}
                </span>
            </td>

            <td>

                <button class="btn btn-warning btn-sm me-1"
                        onclick="editDepartment(${index})">

                    <i class="fa fa-edit"></i>

                </button>

                <button class="btn btn-danger btn-sm"
                        onclick="deleteDepartment(${index})">

                    <i class="fa fa-trash"></i>

                </button>

            </td>

        </tr>
        `;

    });

}

window.onload=function(){

loadDepartments();

loadCategories();

loadEmployees();

}
function searchDepartment() {

    const search = document
        .getElementById("deptSearch")
        .value
        .toLowerCase();

    const rows = document.querySelectorAll("#departmentTable tr");

    rows.forEach(row => {

        row.style.display =
            row.innerText.toLowerCase().includes(search)
                ? ""
                : "none";

    });

}
function deleteDepartment(index) {

    if (confirm("Delete this department?")) {

        departments.splice(index, 1);

        loadDepartments();

    }

}
//=====================
// Asset Categories
//=====================

let categories = [

{
name:"Electronics",
warranty:"24 Months",
description:"Laptop, Desktop, Printer",
status:"Active"
},

{
name:"Furniture",
warranty:"N/A",
description:"Tables, Chairs",
status:"Active"
},

{
name:"Vehicles",
warranty:"60 Months",
description:"Cars, Bikes",
status:"Inactive"
}

];

let categoryEditIndex=-1;

function loadCategories(){

let tbody=document.getElementById("categoryTable");

tbody.innerHTML="";

categories.forEach((c,index)=>{

tbody.innerHTML+=`

<tr>

<td>${c.name}</td>

<td>${c.warranty}</td>

<td>${c.description}</td>

<td>

<span class="badge ${c.status=="Active"?"bg-success":"bg-danger"}">

${c.status}

</span>

</td>

<td>

<button
class="btn btn-warning btn-sm me-1"
onclick="editCategory(${index})">

<i class="fa fa-edit"></i>

</button>

<button
class="btn btn-danger btn-sm"
onclick="deleteCategory(${index})">

<i class="fa fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

function clearCategoryForm(){

categoryEditIndex=-1;

categoryName.value="";
categoryWarranty.value="";
categoryDescription.value="";
categoryStatus.value="Active";

}

function saveCategory(){

let obj={

name:categoryName.value,

warranty:categoryWarranty.value,

description:categoryDescription.value,

status:categoryStatus.value

};

if(categoryEditIndex==-1)

categories.push(obj);

else

categories[categoryEditIndex]=obj;

bootstrap.Modal.getInstance(
document.getElementById("categoryModal")
).hide();

loadCategories();

}

function editCategory(index){

categoryEditIndex=index;

let c=categories[index];

categoryName.value=c.name;
categoryWarranty.value=c.warranty;
categoryDescription.value=c.description;
categoryStatus.value=c.status;

new bootstrap.Modal(
document.getElementById("categoryModal")
).show();

}

function deleteCategory(index){

if(confirm("Delete Category?")){

categories.splice(index,1);

loadCategories();

}

}

function searchCategory(){

let text=document
.getElementById("categorySearch")
.value
.toLowerCase();

document
.querySelectorAll("#categoryTable tr")
.forEach(r=>{

r.style.display=

r.innerText.toLowerCase().includes(text)

?

""

:

"none";

});

}
//========================
// Employee Directory
//========================

let employees=[

{
name:"Rahul Sharma",
email:"rahul@gmail.com",
department:"IT",
role:"Department Head",
status:"Active"
},

{
name:"Priya Singh",
email:"priya@gmail.com",
department:"HR",
role:"Employee",
status:"Active"
},

{
name:"Amit Patel",
email:"amit@gmail.com",
department:"Finance",
role:"Asset Manager",
status:"Inactive"
}

];

let employeeEditIndex=-1;

function loadEmployees(){

let tbody=document.getElementById("employeeTable");

tbody.innerHTML="";

employees.forEach((e,index)=>{

tbody.innerHTML+=`

<tr>

<td>${e.name}</td>

<td>${e.email}</td>

<td>${e.department}</td>

<td>${e.role}</td>

<td>

<span class="badge ${e.status=="Active"?"bg-success":"bg-danger"}">

${e.status}

</span>

</td>

<td>

<button
class="btn btn-warning btn-sm me-1"
onclick="editEmployee(${index})">

<i class="fa fa-edit"></i>

</button>

<button
class="btn btn-danger btn-sm"
onclick="deleteEmployee(${index})">

<i class="fa fa-trash"></i>

</button>

</td>

</tr>

`;

});

}
//========================
// Employee Functions
//========================

function clearEmployeeForm() {

    employeeEditIndex = -1;

    document.getElementById("empName").value = "";
    document.getElementById("empEmail").value = "";
    document.getElementById("empDepartment").selectedIndex = 0;
    document.getElementById("empRole").selectedIndex = 0;
    document.getElementById("empStatus").selectedIndex = 0;
}

function saveEmployee() {

    const emp = {

        name: document.getElementById("empName").value,

        email: document.getElementById("empEmail").value,

        department: document.getElementById("empDepartment").value,

        role: document.getElementById("empRole").value,

        status: document.getElementById("empStatus").value

    };

    if (employeeEditIndex == -1)
        employees.push(emp);
    else
        employees[employeeEditIndex] = emp;

    loadEmployees();

    bootstrap.Modal.getInstance(
        document.getElementById("employeeModal")
    ).hide();

}

function editEmployee(index) {

    employeeEditIndex = index;

    const e = employees[index];

    document.getElementById("empName").value = e.name;
    document.getElementById("empEmail").value = e.email;
    document.getElementById("empDepartment").value = e.department;
    document.getElementById("empRole").value = e.role;
    document.getElementById("empStatus").value = e.status;

    new bootstrap.Modal(
        document.getElementById("employeeModal")
    ).show();

}

function deleteEmployee(index){

    if(confirm("Delete employee?")){

        employees.splice(index,1);

        loadEmployees();

    }

}

function searchEmployee(){

    let text = document
        .getElementById("employeeSearch")
        .value
        .toLowerCase();

    document.querySelectorAll("#employeeTable tr").forEach(row=>{

        row.style.display =
            row.innerText.toLowerCase().includes(text)
                ? ""
                : "none";

    });

}