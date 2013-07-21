//slideshow.js 
//creating a slide show for the background image using css animation

//the images to iterate through
$(document).ready(function(){
    SetupSlideShow();
});

var slides4Show = ["../images/FellsPoint/Fells Point - 1.jpg",
                   "../images/FellsPoint/Fells Point - 2.jpg",
                   "../images/FellsPoint/Fells Point - 3.jpg",
                   "../images/FellsPoint/Fells Point - 4.jpg",
                   "../images/FellsPoint/Fells Point - 5.jpg"
                  ];
var slideCount=0;
var pfx = ["webkit", "moz", "MS", "o", ""];

//function to add proper browser prefix to animation events
function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

function SetupSlideShow() {
    var e = document.getElementById("container");
    PrefixedEvent(e, "AnimationStart", AnimationListener);
    PrefixedEvent(e, "AnimationIteration", AnimationListener);
    PrefixedEvent(e, "AnimationEnd", AnimationListener);

    e.className = "slideshow";
}

function AnimationListener(e) {
  if (e.type.toLowerCase().indexOf("animationiteration") >=0) {
    console.log(slideCount);
    startChange();
    slideCount++;
  }
}


// search the CSSOM for a specific -webkit-keyframe rule
function findKeyframesRule(rule)
    {
        // gather all stylesheets into an array
        var ss = document.styleSheets;
        
        // loop through the stylesheets
        for (var i = 0; i < ss.length; ++i) {
            
            // loop through all the rules
            for (var j = 0; j < ss[i].cssRules.length; ++j) {
                
                // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
                if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == rule){
                    console.log(ss[i].cssRules[j]);
                    return ss[i].cssRules[j];
                }
            }
        }
        
        // rule not found
        console.log("fail");
        return null;
    }

// remove old keyframes and add new ones
function change(anim)
    {
        // find our -webkit-keyframe rule
        var keyframes = findKeyframesRule(anim);
        
        // remove the existing from and to rules
        keyframes.deleteRule("from");
        keyframes.deleteRule("to");
        
        // create new from and to rules
        keyframes.insertRule('from { background-image: url("../images/FellsPoint/Fells Point - 1.jpg");');
        keyframes.insertRule('to { background-image: url("../images/FellsPoint/Fells Point - 2.jpg");');
        
        // assign the animation to our element (which will cause the animation to run)
        //document.getElementById('container').style.webkitAnimationName = anim;
        $(function(){
            $(".slideshow").css("-webkit-animation-name", anim);
        });
    }

// begin the new animation process
function startChange()
    {
        // remove the old animation from our object
        //document.getElementsByName('slideshow').style.webkitAnimationName = "none";
        
        $(function(){
            $(".slideshow").css("-webkit-animation-name", "none");
        });
        //document.getElementById('container').style.mozAnimationName = "none";
        //document.getElementById('container').style.AnimationName = "none";
        
        change("slideshow");
        // call the change method, which will update the keyframe animation
        
        //setTimeout(function(){change("slideshow");}, 0);
    }

