let SyrianCities =[
    "حلب",
    "دمشق",
    "ريف دمشق",
    "حمص",
    "اللاذقية",
    "حماة",
    "طرطوس",
    "الرقة",
    "دير الزور",
    "السويداء",
    "الحسكة",
    "درعا",
    "إدلب",
    "القنيطرة"
]

let hostsList = document.getElementById("hosts");
var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    credentials: 'omit'
  };
  
//   fetch("https://syria-crisisresponse.firebaseio.com/users.json", requestOptions)
    .then(response => response.text())
    .then(result => {
        // console.log(result);
        let parsedResult = JSON.parse(result);
        let hostLine ="";
        for (i in parsedResult){
            hostLine+=parsedResult[i]["firstName"] + " " + parsedResult[i]["lastName"] + " - " + parsedResult[i]["phoneNumber"] + " - " + parsedResult[i]["address"] + " - " + SyrianCities[parsedResult[i]["city"]] + " - " + parsedResult[i]["guests"] + " أشخاص";  
            hostsList.innerHTML += "<li dir=\"rtl\">" + hostLine + "</i>";
            hostLine="";
        }
    })
    .catch(error => console.log('error', error));


(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();
