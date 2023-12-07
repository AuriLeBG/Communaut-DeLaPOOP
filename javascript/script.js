/*
await fetch('http://localhost/Communaut-DeLaPOOP/pages/api.php').then(response => {
        console.log(response.ok)
        return response.json()
    }).then(data => {
        return data
    })
 */

let responseData;
async function getData() {
    let response = await fetch('http://localhost/Communaut-DeLaPOOP/pages/api.php');
    responseData = await response.json()
    console.log(responseData)
}


getData();

let buttonFalse = document.getElementById('buttonFalse');
let buttonTrue = document.getElementById('buttonTrue');