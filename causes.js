var latestKnownScrollY = 0,
    ticking = false;

function onScroll() {
	latestKnownScrollY = window.scrollY;
  requestTick();
}
function requestTick() {
	if(!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}

function update() {
  ticking = false;
  var currentScrollY = latestKnownScrollY;
  console.log(currentScrollY);
  $('#shape1').css('transform','translate(0, -' + ( currentScrollY * 0.8 ) + 'px)');
  $('#shape2').css('transform','translate(0, -' + ( currentScrollY * 0.5 ) + 'px)');
  $('#shape3').css('transform','translate(0, -' + ( currentScrollY * 0.7 ) + 'px)');
  
	
}

window.addEventListener('scroll', onScroll, false);