objects=[];
status1="";
function setup(){
    canvas =createCanvas(350, 300);
    video=createCapture(VIDEO);
    canvas.center();
    video.hide();
    canvas.position(460,100);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="status:Detecting Objects";
}
function modelLoaded(){
    console.log("model loaded!");
    status1=true;
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(video,0,0,480,380);
    if(status1 != ""){
        objectDetector.detect(video,gotResults);
        for(i=0;i<objects.length;i++){
            percent=floor(objects[i].confidence*100);
            document.getElementById("status").innerHTML="status:Objects Detected";
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            rect(objects[i].x,objects[i].y,object[i].width,object[i].height);

        }

    }
}