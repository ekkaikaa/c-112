Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
})

camera = document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_image' src='" + data_uri + "'>";
    });
}

console.log("ml5 version-", ml5.version);

classifier = ml5.imageClassifier('MobileNet',model_loaded)

function model_loaded(){
    console.log("Mobilenet model has been succesfully loaded")
} 

function check(){
    img = document.getElementById("capture_image")
    classifier.classify(img, got_results)
}

function got_results(error, results) {
    //if(error){
        //console.error(error);
    //}
    //else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    //}
}