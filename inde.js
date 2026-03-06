const submit = document.querySelector("#add");

//POST
submit.addEventListener('click', ()=>{
    let pname=document.querySelector("#pname").value;
    let category=document.querySelector("#category").value;
    let scount=document.querySelector("#scount").value;
    let lcode=document.querySelector("#lcode").value;
    let lupdate = new Date().toLocaleString(); 
    let formData = {pname, category, scount, lcode, lupdate};


    fetch("https://pcs-exam112-backend.onrender.com/api/enroll",{
        method: 'POST',
        body: JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json"
        }
    }).catch((error)=>{
        console.log(error);
    })
    alert("User Added Successfully");
    location.reload();
})

    


window.addEventListener('load', ()=>{
    getUser();
})

function getUser(){
    let table="";
    fetch('https://pcs-exam112-backend.onrender.com/api/enroll', {mode:'cors'})
    .then(response=>{
        console.log(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
        data.forEach(element=>{
            
            table+= `<tr>
            <td>${element.productName}</td>
            <td>${element.category}</td>
            <td>${element.stockCount}</td>
            <td>${element.locationCode}</td>
            <td>${element.lastUpdate}</td>
            </tr>`;
        })

    document.querySelector("#content").innerHTML=table
    })


}
