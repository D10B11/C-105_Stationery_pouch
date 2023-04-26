Webcam.set({
    width:355,
    height:300,
    image_format:"png",
    png_quality:90,
    })
    
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    function take_snapshot(){
    Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'/>";}
     
    );
    
    };
    console.log("ml5 version:",ml5.version);
    Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vpxoaVs2H/model.json",model_Loaded);
    function model_Loaded()
    {
      console.log("modelLoaded");
    
    }
    