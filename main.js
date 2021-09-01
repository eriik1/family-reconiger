function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4TPuOjtVl/model.json",modelLoaded)
}
function modelLoaded(){
    console.log("model is loaded")
}
function draw(){
    image(video,0,0,300,300)
}