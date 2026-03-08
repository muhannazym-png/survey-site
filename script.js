document.getElementById("surveyForm").addEventListener("submit", function(e){

e.preventDefault()

document.getElementById("message").innerText =
"Thank you! Your answers were submitted."

})