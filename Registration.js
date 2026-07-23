var students = [];
var form = document.getElementById("regForm");

form.onsubmit = function(event){
    event.preventDefault();
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var stID = document.getElementById("stID").value.trim();
    var email = document.getElementById("email").value.trim();
    var credit = document.getElementById("crdNum").value;
    var department = document.getElementById("department").value;


    if(fname==""){
        alert("First Name cannot be empty");
        return;
    }

    if(lname==""){
        alert("Last Name cannot be empty");
        return;
    }

    if(stID.indexOf("-")==-1){
        alert("Student ID must contain '-'");
        return;
    }

    if(email.indexOf("@student.aiub.edu")==-1){
        alert("Email must contain @student.aiub.edu");
        return;
    }

    if(credit=="" || credit<0 || credit>=148){
        alert("Credit Completed must be 0 or more but less than 148");
        return;
    }

    if(department==""){
        alert("Please select a Department");
        return;
    }

    students.push({
        id:stID,
        firstName:fname,
        lastName:lname,
        email:email,
        department:department,
        credit:credit
    });
    displayStudents();
    form.reset();
};

function displayStudents(){
    var table = document.getElementById("tableBody");
    table.innerHTML = "";
    for(var i=0;i<students.length;i++){
        table.innerHTML +=
        "<tr>" +
        "<td>"+students[i].id+"</td>" +
        "<td>"+students[i].firstName+"</td>" +
        "<td>"+students[i].lastName+"</td>" +
        "<td>"+students[i].email+"</td>" +
        "<td>"+students[i].department+"</td>" +
        "<td>"+students[i].credit+"</td>" +
        "</tr>";
    }
}