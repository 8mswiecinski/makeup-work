var Color = new object();
Color.isValid = function(rgb){}
var redworks = rgb[0]>=0 && rgb[0]<=255;
var greenworks = rgb[1]>=0 && rgb[1]<=255;
var blueworks = rgb[2]>=0 && rgb[2]<=255;
if(redworks && greenworks && blueworks){
  return true;
}
else{
  return false;
  }
};

Color.brightness = function(rgb){
  return (Color.redintensity(rgb)+Color.greenintensity(rgb)+Color.blueintensity(rgb))/3;
};

Color.complement = function(rgb){
  var comp = [];
  comp[0] = 255 - rgb[0];
  comp[1] = 255 - rgb[1];
  comp[2] = 255 - rgb[2];
  return comp;
};
