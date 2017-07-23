var menuItem = document.getElementsByClassName('profile')[0];
var menuList = document.getElementsByClassName('menu-list')[0].getElementsByTagName('a');
var timer = {};
for (var i = 0; i < menuList.length; i++) {
	menuList[i].timer = {};
	menuList[i].addEventListener('mouseenter', function() {
		var that = this;
		clearInterval(that.timer.goDown);
		
		var hasMoved = parseFloat(window.getComputedStyle(that).top);
		that.timer.goUp = setInterval(function() {
			if (hasMoved > -150) {
				hasMoved -= 5;
			}
			that.style.top = hasMoved + 'px';
		}, 1000/60);
	}, false);
	menuList[i].addEventListener('mouseleave', function() {
		var that = this;
		var hasMoved = parseFloat(that.style.top);
		clearInterval(that.timer.goUp);
		that.timer.goDown = setInterval(function(){ 
			if (hasMoved < 0) {
				hasMoved += 5;
			}
			that.style.top = hasMoved + 'px';
		}, 1000/60);
	}, false);
}



// menuItem.addEventListener('mouseenter', function() {
// 	clearInterval(timer.goDown);
// 	var that = this;
// 	var hasMoved = parseFloat(window.getComputedStyle(that).top);
// 	timer.goUp = setInterval(function() {
// 		if (hasMoved < 150) {
// 			hasMoved += 3;
// 		}
// 		that.style.top = '-' + hasMoved + 'px';
// 	}, 1000/60);
// }, false);
// menuItem.addEventListener('mouseleave', function() {
// 	var that = this;
// 	var hasMoved = parseFloat(that.style.top);
// 	console.log(hasMoved);
// 	clearInterval(timer.goUp);
// 	timer.goDown = setInterval(function(){ 
// 		if (hasMoved < 0) {
// 			hasMoved += 3;
// 		}else {
// 			clearInterval(timer.goDown);
// 		}
// 		that.style.top = hasMoved + 'px';
// 	}, 1000/60);
// }, false);