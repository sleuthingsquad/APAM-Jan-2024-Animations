background(0, 221, 255);
var xPos = 7;
var yPos = 7;
var wPos = 393;
var zPos = 7;
var rPos = 400;
var qPos = 400;
var vPos = 7;

draw = function() {
    var textPos = 71;
    background(0, 221, 255);
    textPos+=0.5;
    fill(137, 231, 250);
    ellipse(xPos, yPos, 10, 10);
    ellipse(wPos, zPos, 10, 10);
    ellipse(xPos+25, yPos+25, 10, 10);
    ellipse(wPos+25, zPos+25, 10, 10);
    ellipse(wPos+45, zPos+45, 10, 10);
    ellipse(xPos+45, yPos+45, 10, 10);
    ellipse(rPos, qPos, 10, 10);
    ellipse(rPos-25, qPos-25, 10, 10);
    ellipse(rPos-45, qPos-45, 10, 10);
    ellipse(vPos, qPos, 10, 10);
    ellipse(vPos+25, qPos+25, 10, 10);
    ellipse(vPos+45, qPos+45, 10, 10);
    vPos++;
    rPos--;
    qPos--;
    xPos++;
    yPos++;
    wPos-=1;
    zPos+=1;
  if(yPos>420) {
image(getImage("space/star"), 169, 176, 60, 60);
fill(0, 47, 255);
    textSize(37);
    text("Happy Birthday!", textPos, 60);
    
}
};
