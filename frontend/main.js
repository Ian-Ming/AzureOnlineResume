window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getmingcounter.azurewebsites.net/api/GetResumeCounter?code=wHlWN0FpKRt_CfcR5I3UA4352es5cax1gIOLPOiFQycfAzFuZ4z6Sg%3D%3D'
const localFunctionApi ='http://localhost:7071/api/GetResumeCounter'

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}