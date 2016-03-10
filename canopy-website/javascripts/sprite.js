// var width = 100,
//          height = 100,
//          frames = 4,
//
//          currentFrame = 0,
//
//          canvas = document.getElementById("myCanvas");
//          ctx = canvas.getContext("2d");
//          image = new Image()
//          image.src = '../images/sprite.png';
//
//  var draw = function(){
//          ctx.clearRect(0, 0, width, height);
//          ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
//
//          if (currentFrame == frames) {
//            currentFrame = 0;
//          } else {
//            currentFrame++;
//          }
//  }
//
//    setInterval(draw, 100);



// 1. create a new Image object, set its 'src' property to the filename of the image
var coinImage = new Image();
coinImage.src = "images/coin.png";

// 2. define sprite object to create one or more (instances) later
function sprite (options) {

    var that = {};

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;

    that.render = function () {

        // Draw the animation, step 5.
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width,
           that.height,
           0,
           0,
           that.width,
           that.height);
    };
};

// 3. get access to 'canvas' element and set its dimensions
    var canvas = document.getElementById("coinAnimation");
    canvas.width = 100;
    canvas.height = 100;

// 4. create sprite object
// use options parameter set properties to specify the context of the canvas on which the sprite will be drawn, the sprite dimensions, and the sprite sheet image
    var coin = sprite({
        context: canvas.getContext("2d"),
        width: 100,
        height: 100,
        image: coinImage
    });

//  drawImage method allows us to render a cropped section of the source image to the canvas
//  context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
//
// img	Source image object	Sprite sheet
// sx	Source x	Frame index times frame width
// sy	Source y	0
// sw	Source width	Frame width
// sh	Source height	Frame height
// dx	Destination x	0
// dy	Destination y	0
// dw	Destination width	Frame width
// dh	Destination height	Frame height

// 5. We will use the drawImage method in our sprite's render method to draw one frame at a time. sprite function will need a render method that invokes the drawImage method on the canvas' contex
// The parameters specify the source image and the bounding rectangle dimensions and position of the source sprite sheet and the destination canvas context.


// 6. Call render method
coin.render();
