noseX =0;
noseY =0;

function setup(){
	var canvas = createCanvas(600,400);
	canvas.parent("canvas");
    canvas.center();
	video = createCapture(VIDEO);
	video.size(600,400);

	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function modelLoaded(){
      console.log('The Model Is Loaded!');
  }
  function gotPoses(results)
  {
      if(results.length > 0)
      {
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}
