//blink
var hero_hamster_eye_left = document.getElementById("hero-hamster-eye-left");
var hero_hamster_eye_right = document.getElementById("hero-hamster-eye-right");
var about_hamster_eye_left_1 = document.getElementById("about-hamster-eye-left-1");
var about_hamster_eye_right_1 = document.getElementById("about-hamster-eye-right-1");
var about_hamster_eye_left_2 = document.getElementById("about-hamster-eye-left-2");
var about_hamster_eye_right_2 = document.getElementById("about-hamster-eye-right-2");
var about_hamster_eye_left_3 = document.getElementById("about-hamster-eye-left-3");
var about_hamster_eye_right_3 = document.getElementById("about-hamster-eye-right-3");
var about_hamster_eye_left_4 = document.getElementById("about-hamster-eye-left-4");
var about_hamster_eye_right_4 = document.getElementById("about-hamster-eye-right-4");

var hamster_eye_glare_large_left = document.querySelectorAll(".hamster-glare-large-left");
var hamster_eye_glare_medium_left = document.querySelectorAll(".hamster-glare-medium-left");
var hamster_eye_glare_small_left = document.querySelectorAll(".hamster-glare-small-left");
var hamster_eye_glare_large_right = document.querySelectorAll(".hamster-glare-large-right");
var hamster_eye_glare_medium_right = document.querySelectorAll(".hamster-glare-medium-right");
var hamster_eye_glare_small_right = document.querySelectorAll(".hamster-glare-small-right");

var blink = function(isSecondBlink) {
  hero_hamster_eye_left.className = "hamster-eye-left-closed";
  
  /* remove glare */
  for (var i = 0; i < hamster_eye_glare_large_left.length; i++) {
    hamster_eye_glare_large_left[i].style.display = "none";
    hamster_eye_glare_medium_left[i].style.display = "none";
    hamster_eye_glare_small_left[i].style.display = "none";
    hamster_eye_glare_large_right[i].style.display = "none";
    hamster_eye_glare_medium_right[i].style.display = "none";
    hamster_eye_glare_small_right[i].style.display = "none";
  }
  
  hero_hamster_eye_right.className = "hamster-eye-right-closed";
  about_hamster_eye_left_1.className = "hamster-eye-left-closed";
  about_hamster_eye_right_1.className = "hamster-eye-right-closed";
  about_hamster_eye_left_2.className = "hamster-eye-left-closed";
  about_hamster_eye_right_2.className = "hamster-eye-right-closed";
  about_hamster_eye_left_3.className = "hamster-eye-left-closed";
  about_hamster_eye_right_3.className = "hamster-eye-right-closed";
  about_hamster_eye_left_4.className = "hamster-eye-left-closed";
  about_hamster_eye_right_4.className = "hamster-eye-right-closed";
  
  setTimeout(function() {
    
    /* replace glare */
    for (var i = 0; i < hamster_eye_glare_large_left.length; i++) {
      hamster_eye_glare_large_left[i].style.display = "block";
      hamster_eye_glare_medium_left[i].style.display = "block";
      hamster_eye_glare_small_left[i].style.display = "block";
      hamster_eye_glare_large_right[i].style.display = "block";
      hamster_eye_glare_medium_right[i].style.display = "block";
      hamster_eye_glare_small_right[i].style.display = "block";
    }
    
    hero_hamster_eye_left.className = "hamster-eye-left";
    hero_hamster_eye_right.className = "hamster-eye-right";
    about_hamster_eye_left_1.className = "hamster-eye-left";
    about_hamster_eye_right_1.className = "hamster-eye-right";
    about_hamster_eye_left_2.className = "hamster-eye-left";
    about_hamster_eye_right_2.className = "hamster-eye-right";
    about_hamster_eye_left_3.className = "hamster-eye-left";
    about_hamster_eye_right_3.className = "hamster-eye-right";
    about_hamster_eye_left_4.className = "hamster-eye-left";
    about_hamster_eye_right_4.className = "hamster-eye-right";
  }, 200);
  
  if (isSecondBlink) {
    return;
  }
  
  var blinkAgain = Math.random() <= 0.4;
    
  if (blinkAgain) {
    setTimeout(function() {
      blink(true);
    }, 300);
  }
}
  
window.onload = setInterval(blink, 2000);


// Hamster Head Tilt Animation
var hero_hamster_head = document.getElementById("hero-hamster-head");
var about_hamster_head_1 = document.getElementById("about-hamster-head-1");
var about_hamster_head_2 = document.getElementById("about-hamster-head-2");
var about_hamster_head_3 = document.getElementById("about-hamster-head-3");
var about_hamster_head_4 = document.getElementById("about-hamster-head-4");

var tilt = function(isTiltRight) {
  hero_hamster_head.classList.remove("tilt-left-to-center", "tilt-right-to-center");
  hero_hamster_head.classList.add("tilt-right");
  about_hamster_head_1.classList.remove("tilt-left-to-center", "tilt-right-to-center");
  about_hamster_head_1.classList.add("tilt-right");
  about_hamster_head_2.classList.remove("tilt-left-to-center", "tilt-right-to-center");
  about_hamster_head_2.classList.add("tilt-right");
  about_hamster_head_3.classList.remove("tilt-left-to-center", "tilt-right-to-center");
  about_hamster_head_3.classList.add("tilt-right");
  about_hamster_head_4.classList.remove("tilt-left-to-center", "tilt-right-to-center");
  about_hamster_head_4.classList.add("tilt-right");

  setTimeout(function() {
    hero_hamster_head.classList.remove("tilt-right");
    hero_hamster_head.classList.add("tilt-right-to-center");
    about_hamster_head_1.classList.remove("tilt-right");
    about_hamster_head_1.classList.add("tilt-right-to-center");
    about_hamster_head_2.classList.remove("tilt-right");
    about_hamster_head_2.classList.add("tilt-right-to-center");
    about_hamster_head_3.classList.remove("tilt-right");
    about_hamster_head_3.classList.add("tilt-right-to-center");
    about_hamster_head_4.classList.remove("tilt-right");
    about_hamster_head_4.classList.add("tilt-right-to-center");
  }, 4000);

  if (isTiltRight) {
    return;
  }
  
  var tiltLeft = Math.random() <= 0.5;
  
  if (tiltLeft) {

    hero_hamster_head.classList.remove("tilt-right-to-center", "tilt-left-to-center");
    hero_hamster_head.classList.add("tilt-left");
    about_hamster_head_1.classList.remove("tilt-right-to-center", "tilt-left-to-center");
    about_hamster_head_1.classList.add("tilt-left");
    about_hamster_head_2.classList.remove("tilt-right-to-center", "tilt-left-to-center");
    about_hamster_head_2.classList.add("tilt-left");
    about_hamster_head_3.classList.remove("tilt-right-to-center", "tilt-left-to-center");
    about_hamster_head_3.classList.add("tilt-left");
    about_hamster_head_4.classList.remove("tilt-right-to-center", "tilt-left-to-center");
    about_hamster_head_4.classList.add("tilt-left");
    setTimeout(function() {
      hero_hamster_head.classList.remove("tilt-left");
      hero_hamster_head.classList.add("tilt-left-to-center");
      about_hamster_head_1.classList.remove("tilt-left");
      about_hamster_head_1.classList.add("tilt-left-to-center");
      about_hamster_head_2.classList.remove("tilt-left");
      about_hamster_head_2.classList.add("tilt-left-to-center");
      about_hamster_head_3.classList.remove("tilt-left");
      about_hamster_head_3.classList.add("tilt-left-to-center");
      about_hamster_head_4.classList.remove("tilt-left");
      about_hamster_head_4.classList.add("tilt-left-to-center");
    }, 4000);
  }
}

window.onload = setInterval(tilt, 10000);

// Hamster Ear Wiggle Animation
var hero_hamster_ear_left = document.getElementById("hero-hamster-ear-left");
var hero_hamster_ear_right = document.getElementById("hero-hamster-ear-right");
var about_hamster_ear_left_1 = document.getElementById("about-hamster-ear-left_1");
var about_hamster_ear_right_1 = document.getElementById("about-hamster-ear-right_1");
var about_hamster_ear_left_2 = document.getElementById("about-hamster-ear-left_2");
var about_hamster_ear_right_2 = document.getElementById("about-hamster-ear-right_2");
var about_hamster_ear_left_3 = document.getElementById("about-hamster-ear-left_3");
var about_hamster_ear_right_3 = document.getElementById("about-hamster-ear-right_3");
var about_hamster_ear_left_4 = document.getElementById("about-hamster-ear-left_4");
var about_hamster_ear_right_4 = document.getElementById("about-hamster-ear-right_4");


var wiggle = function(isSecondWiggle) {
  hero_hamster_ear_left.classList.add("ear-wiggle-left");
  hero_hamster_ear_right.classList.add("ear-wiggle-right");
  about_hamster_ear_left_1.classList.add("ear-wiggle-left");
  about_hamster_ear_right_1.classList.add("ear-wiggle-right");
  about_hamster_ear_left_2.classList.add("ear-wiggle-left");
  about_hamster_ear_right_2.classList.add("ear-wiggle-right");
  about_hamster_ear_left_3.classList.add("ear-wiggle-left");
  about_hamster_ear_right_3.classList.add("ear-wiggle-right");
  about_hamster_ear_left_4.classList.add("ear-wiggle-left");
  about_hamster_ear_right_4.classList.add("ear-wiggle-right");
  
  setTimeout(function() {
    hero_hamster_ear_left.classList.remove("ear-wiggle-left");
    hero_hamster_ear_right.classList.remove("ear-wiggle-right");
    about_hamster_ear_left_1.classList.remove("ear-wiggle-left");
    about_hamster_ear_right_1.classList.remove("ear-wiggle-right");
    about_hamster_ear_left_2.classList.remove("ear-wiggle-left");
    about_hamster_ear_right_2.classList.remove("ear-wiggle-right");
    about_hamster_ear_left_3.classList.remove("ear-wiggle-left");
    about_hamster_ear_right_3.classList.remove("ear-wiggle-right");
    about_hamster_ear_left_4.classList.remove("ear-wiggle-left");
    about_hamster_ear_right_4.classList.remove("ear-wiggle-right");
  }, 1000);

  if (isSecondWiggle) {
    return;
  }
  
  var wiggleAgain = Math.random() <= 0.4;
  
  if (wiggleAgain) {
    setTimeout(function() {
      wiggle(true);
    }, 1100);
  }
}

window.onload = setInterval(wiggle, 7000);

// For Scroll-Triggered Animations
var $window = $(window);

// Hero Hamster Animation
function check_if_hero_hamster_in_view() {
  var $hero_hamster = $("#hero-hamster");
  var $hero_hamster_element = $hero_hamster;
  var $hero_hamster_mouth = $("#hero-hamster-mouth");
  var $hero_talkbubble = $("#hero-talkbubble");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var hero_hamster_element_height = $hero_hamster_element.outerHeight();
  var hero_hamster_element_top_position = $hero_hamster_element.offset().top;
    
  if (hero_hamster_element_top_position < window_top_position) {
    $hero_hamster_element.removeClass("hero-hamster-anim-in");
    $hero_hamster_element.addClass("hero-hamster-anim-out");
    $hero_talkbubble.removeClass("talkbubble-anim");
    //$("#hero-hamster-head").removeClass("three-second-head-anim");
    $hero_hamster_mouth.removeClass("three-second-talk-anim")
  } else {
    $hero_hamster_element.removeClass("hero-hamster-anim-out");
    $hero_hamster_element.addClass("hero-hamster-anim-in");
    setTimeout(function () {
      if ($hero_hamster_element.hasClass("hero-hamster-anim-in")) {
        $hero_talkbubble.addClass("talkbubble-anim");
        $hero_hamster_mouth.addClass("three-second-talk-anim");
        //$("#hero-hamster-head").addClass("three-second-head-anim");
      }
    }, 700);
    $("#myTopnav").style.height = "70px";
    $("#myNavBrand").style.top = "5px";
    $("#myOpenBtn").style.top = "10px";
  }
}

// First About Hamster Animation
function check_if_about_hamster_one_in_view() {
  var $about_hamster_one = $("#about-hamster-1");
  var $about_hamster_one_element = $about_hamster_one;
  var $about_hamster_mouth_one = $("#about-hamster-mouth-1");
  var $about_illustration_one = $("#about-illustration-1");
  var $about_talkbubble_one = $("#about-talkbubble-1");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var about_hamster_one_element_height = $about_hamster_one_element.outerHeight();
  var about_hamster_one_element_top_position = $about_hamster_one_element.offset().top;
    
  if ((about_hamster_one_element_top_position < window_bottom_position) && (about_hamster_one_element_top_position >= window_top_position)) {
    $about_hamster_one_element.removeClass("about-hamster-left-anim-out");
    $about_hamster_one_element.addClass("about-hamster-left-anim-in");
    $about_illustration_one.removeClass("about-illustration-box-anim-out");
    $about_illustration_one.addClass("about-illustration-box-anim-in");
    
    setTimeout(function () {
      if ($about_hamster_one_element.hasClass("about-hamster-left-anim-in")) {
        $about_talkbubble_one.addClass("talkbubble-anim");
        $about_hamster_mouth_one.addClass("six-second-talk-anim");
//        $(".hamster-head").addClass("head-talk-anim");
      }
    }, 800);
  } else {
    $about_hamster_one_element.removeClass("about-hamster-left-anim-in");
    $about_hamster_one_element.addClass("about-hamster-left-anim-out");
    $about_talkbubble_one.removeClass("talkbubble-anim");
//    $(".hamster-head").removeClass("head-talk-anim");
    $about_hamster_mouth_one.removeClass("six-second-talk-anim");
    $about_illustration_one.removeClass("about-illustration-box-anim-in");
    $about_illustration_one.addClass("about-illustration-box-anim-out");
  }
}

// Second About Hamster Animation
function check_if_about_hamster_two_in_view() {
  var $about_hamster_two = $("#about-hamster-2");
  var $about_hamster_two_element = $about_hamster_two;
  var $about_hamster_mouth_two = $("#about-hamster-mouth-2");
  var $about_illustration_two = $("#about-illustration-2");
  var $about_talkbubble_two = $("#about-talkbubble-2");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var about_hamster_two_element_height = $about_hamster_two_element.outerHeight();
  var about_hamster_two_element_top_position = $about_hamster_two_element.offset().top;
    
  if ((about_hamster_two_element_top_position < window_bottom_position) && (about_hamster_two_element_top_position >= window_top_position)) {
    $about_hamster_two_element.removeClass("about-hamster-right-anim-out");
    $about_hamster_two_element.addClass("about-hamster-right-anim-in");
    $about_illustration_two.removeClass("about-illustration-box-anim-out");
    $about_illustration_two.addClass("about-illustration-box-anim-in");
    
    setTimeout(function () {
      if ($about_hamster_two_element.hasClass("about-hamster-right-anim-in")) {
        $about_talkbubble_two.addClass("talkbubble-anim");
        $about_hamster_mouth_two.addClass("six-second-talk-anim");
//        $(".hamster-head").addClass("head-talk-anim");
      }
    }, 800);
  } else {
    $about_hamster_two_element.removeClass("about-hamster-right-anim-in");
    $about_hamster_two_element.addClass("about-hamster-right-anim-out");
    $about_talkbubble_two.removeClass("talkbubble-anim");
//    $(".hamster-head").removeClass("head-talk-anim");
    $about_hamster_mouth_two.removeClass("six-second-talk-anim");
    $about_illustration_two.removeClass("about-illustration-box-anim-in");
    $about_illustration_two.addClass("about-illustration-box-anim-out");
  }
}

// Third About Hamster Animation
function check_if_about_hamster_three_in_view() {
  var $about_hamster_three = $("#about-hamster-3");
  var $about_hamster_three_element = $about_hamster_three;
  var $about_hamster_mouth_three = $("#about-hamster-mouth-3");
  var $about_illustration_three = $("#about-illustration-3");
  var $about_talkbubble_three = $("#about-talkbubble-3");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var about_hamster_three_element_height = $about_hamster_three_element.outerHeight();
  var about_hamster_three_element_top_position = $about_hamster_three_element.offset().top;
    
  if ((about_hamster_three_element_top_position < window_bottom_position) && (about_hamster_three_element_top_position >= window_top_position)) {
    $about_hamster_three_element.removeClass("about-hamster-left-anim-out");
    $about_hamster_three_element.addClass("about-hamster-left-anim-in");
    $about_illustration_three.removeClass("about-illustration-box-anim-out");
    $about_illustration_three.addClass("about-illustration-box-anim-in");
    
    setTimeout(function () {
      if ($about_hamster_three_element.hasClass("about-hamster-left-anim-in")) {
        $about_talkbubble_three.addClass("talkbubble-anim");
        $about_hamster_mouth_three.addClass("six-second-talk-anim");
        //$(".hamster-head").addClass("head-talk-anim");
      }
    }, 800);
  } else {
    $about_hamster_three_element.removeClass("about-hamster-left-anim-in");
    $about_hamster_three_element.addClass("about-hamster-left-anim-out");
    $about_talkbubble_three.removeClass("talkbubble-anim");
    //$(".hamster-head").removeClass("head-talk-anim");
    $about_hamster_mouth_three.removeClass("six-second-talk-anim");
    $about_illustration_three.removeClass("about-illustration-box-anim-in");
    $about_illustration_three.addClass("about-illustration-box-anim-out");
  }
}

// Fourth About Hamster Animation
function check_if_about_hamster_four_in_view() {
  var $about_hamster_four = $("#about-hamster-4");
  var $about_hamster_four_element = $about_hamster_four;
  var $about_hamster_mouth_four = $("#about-hamster-mouth-4");
  var $about_illustration_four = $("#about-illustration-4");
  var $about_talkbubble_four = $("#about-talkbubble-4");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var about_hamster_four_element_height = $about_hamster_four_element.outerHeight();
  var about_hamster_four_element_top_position = $about_hamster_four_element.offset().top;
    
  if ((about_hamster_four_element_top_position < window_bottom_position) && (about_hamster_four_element_top_position >= window_top_position)) {
    $about_hamster_four_element.removeClass("about-hamster-right-anim-out");
    $about_hamster_four_element.addClass("about-hamster-right-anim-in");
    $about_illustration_four.removeClass("about-illustration-box-anim-out");
    $about_illustration_four.addClass("about-illustration-box-anim-in");
    
    setTimeout(function () {
      if ($about_hamster_four_element.hasClass("about-hamster-right-anim-in")) {
        $about_talkbubble_four.addClass("talkbubble-anim");
        $about_hamster_mouth_four.addClass("six-second-talk-anim");
//        $(".hamster-head").addClass("head-talk-anim");
      }
    }, 800);
  } else {
    $about_hamster_four_element.removeClass("about-hamster-right-anim-in");
    $about_hamster_four_element.addClass("about-hamster-right-anim-out");
    $about_talkbubble_four.removeClass("talkbubble-anim");
//    $(".hamster-head").removeClass("head-talk-anim");
    $about_hamster_mouth_four.removeClass("six-second-talk-anim");
    $about_illustration_four.removeClass("about-illustration-box-anim-in");
    $about_illustration_four.addClass("about-illustration-box-anim-out");
  }
}

$window.on("scroll resize", check_if_hero_hamster_in_view);
$window.on("scroll resize", check_if_about_hamster_one_in_view);
$window.on("scroll resize", check_if_about_hamster_two_in_view);
$window.on("scroll resize", check_if_about_hamster_three_in_view);
$window.on("scroll resize", check_if_about_hamster_four_in_view);
$window.trigger("scroll");