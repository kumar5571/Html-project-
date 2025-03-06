let emp_1={id:101,ename:"Kiran Kumar",usn:"kk",pin:1111,desg:"Developer",sal:20000,role:"Admin"};
let emp_2={id:102,ename:"Ashok Goud",usn:"ag",pin:2222,desg:"Tester",sal:30000,role:"Emp"};
let emp_3={id:103,ename:"Guru Prakash",usn:"gp",pin:3333,desg:"Developer",sal:10000,role:"Emp"};
let emp_4={id:104,ename:"Sameer Mark",usn:"sm",pin:4444,desg:"Tester",sal:70000,role:"Emp"};

let employees=[emp_1,emp_2,emp_3,emp_4];


function displayEmployees(emps)
{
    if(emps.length===0)return;

    let eachEmp='';
    for(let emp of emps)
    {
        eachEmp+=`<tr>
                        <td>${emp.id}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.desg}</td>
                        <td>${emp.sal}</td>
                        <td>${emp.role}</td>
                    </tr>`;
    }
    document.getElementById('display-data').innerHTML=eachEmp;
}



let searchBox=document.getElementById('search-box');

searchBox.addEventListener('keyup',function(e)
{
    let enteredName=searchBox.value;
    let updatedArr=filterEmps(enteredName,employees);

    if(enteredName.length===0)
        document.getElementById('display-data').innerText="No Selected Employees";
    else 
        displayEmployees(updatedArr);
})


function filterEmps(val,emps)
{
    val=val.toLowerCase().trim();
    let filteredEmps=[];
    for(let emp of emps)
    {
        let orgName=emp.ename.toLowerCase().trim();

        if(orgName.includes(val))
        {
            filteredEmps.push(emp);
        }
    }
    //displayEmployees(filteredEmps);
    return filteredEmps;
}


let allEmpsBtn=document.getElementById('all-btn');
let devEmpsBtn=document.getElementById('dev-btn');
let testEmpsBtn=document.getElementById('test-btn');
// })

let developers=employees.filter((emp)=>
{
    if(emp.desg=="Developer")return true;
    else return false;
})

devEmpsBtn.addEventListener('click',function()
{
    displayEmployees(developers);
})



let testers=employees.filter(emp=>emp.desg=="Tester");
    
testEmpsBtn.addEventListener('click',function()
{
    displayEmployees(testers);
});


//Login Impl

let formEl=document.querySelector('#login-form');
let usnEl=document.querySelector('#usn');
let pwEl=document.querySelector('#pw');
let logInUserMsg=document.querySelector('#display-logmsg');
let searchSection=document.querySelector('#search-section');
let tableSection=document.querySelector('#table-section');
let btnSection=document.querySelector('#btn-section');

formEl.addEventListener('submit',function(e)
{
    e.preventDefault();
    let username=usnEl.value;
    let pin=Number(pwEl.value);

    let currentEmp;

    currentEmp=employees.find((emp)=>
    {
        return emp.usn==username;
    })

    //console.log(currentEmp);

    if(currentEmp?.pin==pin)
    {
        logInUserMsg.textContent=`Welcome To ${currentEmp.ename.split(" ")[0]}`;


        if(currentEmp.role=="Admin")
        {
            tableSection.classList.remove('hidden');
            btnSection.classList.remove('hidden');
            searchSection.classList.remove('hidden');

        }
    }

    usnEl.value=pwEl.value="";
})