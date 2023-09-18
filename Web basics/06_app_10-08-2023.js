function calculateBMI(){
    var weight = document.getElementById("weight");
    var height = document.getElementById("height");
    var bmi = weight/height**2;
    document.getElementById("bmi_out").innerHTML="BMI:" + bmi;
}
// javascript Math
// .round, .ceil, .floor