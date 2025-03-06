let Emp1={Eid:101,Ename:"Kiran",EDesg:"Developer",ESal:25000,ERole:"Admin"};
let Emp2={Eid:102,Ename:"Ashok",EDesg:"Tester",ESal:20000,ERole:"Admin"};
let Emp3={Eid:103,Ename:"Guru",EDesg:"Developer",ESal:15000,ERole:"Admin"};
let Emp4={Eid:104,Ename:"Sammer",EDesg:"Tester",ESal:10000,ERole:"Admin"};

let employees= [Emp1,Emp2,Emp3,Emp4]

function displayEmployees(emps = employees) 
{
    let output = '';
    emps.forEach(emp => {
        output += `
            <tr>
                <td>${emp.Eid}</td>
                <td>${emp.Ename}</td>
                <td>${emp.EDesg}</td>
                <td>${emp.ESal}</td>
                <td>${emp.ERole}</td>
            </tr>
        `;
    });
}
document.getElementById('display-data').innerHTML=employees;
displayEmployees(employees);

let searchBox=document.getElementById('seach-box');

searchBox.addEventListener('keyup',function(e)
{
    let enterdName=searchBox.value;
    let updateArr=filterEmps(enterdName,employees);

    if(enterdName.length==0)
        document.getElementById('display-data').innerText="No selected Employees";
    else
    displayEmployees(updateArr);
})

function filterEmps(val,emps)
{
    val=val.toLowerCase().trim();
    let filterEmps=[];
    for (let emp of emps)
    {
        let orgName=emp.Ename.toLowerCase().trim();
        return emps.filter(emp => emp.Ename.toLowerCase().includes(val));

        if (orgName.includes(val))
        {

        }
    }
}