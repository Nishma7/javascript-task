var selectEle = document.getElementById("table_body");

var createRow = `<tr>
<td>ll</td>
<td></td>
<td></td>
<td></td>
</tr>`;

var details = [];
function addRow(event){
    event.preventDefault();

    var data = {
        id:parseInt(Math.random()*10),
        first_Name : document.getElementById('fname').value,
        last_Name   :document.getElementById('lname').value,
        e_mail :document.getElementById('email').value
    }

    details.push(data);
    document.forms[0].reset();// clear the form for the next entry
    /* (or)document.querySelector('form').reset() */

    // for display purpose only

    //console.warn('added',{details});
    var predata = document.getElementById("pre");
    predata.textContent='\n'+JSON.stringify(details,'\t',5);

    //saving to localstorage;

    localStorage.setItem('userData',JSON.stringify(details));
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('submit').addEventListener('click',addRow)
})