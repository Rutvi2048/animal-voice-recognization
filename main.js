function checksound(){
    console.log("click....");
    navigator.mediaDevices.getUserMedia({audio:true});
  Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ADuuvv6Cq/model.json",mr);
}

function mr()
{
    console.log("result")
    Classifier.classify(gotResults);
}

var count_cat = 0;
var count_dog=0;
function gotResults(error, results)
{
    if(error)

      console.error(error);
      else
      {
          console.log(results[0].label);
         
    document.getElementById("sound_name").innerHTML = "I can hear: " + results[0].label;
    document.getElementById("accuracy").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2)+"%";
}

if(results[0].label == "dog")
{
  
    alien_1.src='https://media4.giphy.com/media/m9pQ6KapT7Cq3DQ5DZ/200.gif';
    count_dog=count_dog+1;
    document.getElementById("dog_detected").innerHTML = "Dog detected: " + count_dog;

}else if(results[0].label == "cat")
{
    alien_1.src='https://media0.giphy.com/media/yXPquATCb8kGk/giphy.gif';
    count_cat=count_cat=1;
    document.getElementById("cat_detected").innerHTML = "Cat detected: " + count_cat;

}


}