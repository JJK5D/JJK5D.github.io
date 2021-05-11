// nav
var start = document.getElementById("nav-btn-start");
var close = document.getElementById("nav-btn-close");
var nav = document.getElementById("nav-box");

var box = document.querySelector('.search-box');

var slideOut = document.getElementById("header-out");
var slideNav = document.getElementById("header-nav");
var slidePlay = document.getElementById("header-play");
var slideLeft = document.getElementById("conSpan-left");
var slideRight = document.getElementById("conSpan-right");
var num = 0;
var timer = 0;

//留言板
window.onload = function() {
	var but = document.getElementById("leave-button");
	var text = document.getElementById("leave-text");
	var ull = document.getElementById("ull");
	var title = document.getElementById("leave-title");
	var newli = document.createElement("li");
	var lis = ull.children;
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	var index = 0
	
	if (h < 10) {
		h = '0' + h;
	}
	if (m < 10) {
		m = '0' + m;
	}
	if (s < 10) {
		s = '0' + s;
	}
	
	var time = h+":"+m+":"+s;
	
	
	but.onclick = function() {
		if (text.value == "") {
			alert("内容不能为空！");
			text.select();
			return 0;
		} else if (title.value == "") {
			alert("名称不能为空！");
			title.select();
			return 0;
		} else {
			$(newli).prepend("<img src='img/1.jpg' width='30px' height='30px'>&nbsp;&nbsp;&nbsp;" + title.value + "<br>----------------------------------------------------------------------------------------------<br>" + text.value + "<br>----------------------------------------------------------------------------------------------<br>" + time + "&nbsp;&nbsp;&nbsp;<a href='#leave-box'>删除</a><br><br><br>");
			// newli.innerHTML = "<img src='img/1.jpg' width='30px' height='30px'>&nbsp;&nbsp;&nbsp;" + title.value + "<br>----------------------------------------------------------------------------------------------<br>" + text.value + "<br>----------------------------------------------------------------------------------------------<br>" + time + "&nbsp;&nbsp;&nbsp;<a href='#leave-box'>删除</a><br><br><br>";
			text.value = "";
			if ((ull.children.length) >= 1) {
				ull.insertBefore(newli, lis[0]);
			} else {
				ull.appendChild(newli);
			}
			
		}
	}
	$(document).ready(function(){
	  $("#del-button").click(function(){
	    $(newli).empty();
	  }); 
	});
	$(document).ready(function(){
	  $("#del-button").click(function(){
	    $(newli).remove();
	  }); 
	});
}

// 轮播图效果
slideOut.onmouseenter = function() {
	clearInterval(timer);
}
timer = setInterval(function() {
	num = num <= -3200 ? 0 : num - 1;
	slideNav.style.marginLeft = num + "px";
},15);
slideOut.onmouseenter = function() {
	clearInterval(timer);
}
slideOut.onmouseleave = function() {
	timer = setInterval(function() {
		num = num <= -3200 ? 0 : num - 1;
		slideNav.style.marginLeft = num + "px";
	},15);
}
slideOut.onmouseup = function() {
	clearInterval(timer);
}
slideLeft.onmousedown = function() {
	timer = setInterval(function() {
		if (num >= 0) {
			num = -3200;
		} else {
			num += 3;
		}
		slideNav.style.marginLeft = num + "px";
	},0);
}
slideOut.onmouseup = function() {
	clearInterval(timer);
}
slideRight.onmousedown = function() {
	timer = setInterval(function() {
		if (num <= -3200) {
			num = 0;
		} else {
			num -= 3;
		}
		slideNav.style.marginLeft = num + "px";
	},0);
}

// 导航栏动画效果
$(document).ready(function() {
  $("#nav-btn-start").click(function() {
	start.style.display = "none";
	$("#nav-box").fadeToggle(2000, function() {
		nav.style.display = "block";
	});
  });
});
$(document).ready(function() {
  $("#nav-btn-close").click(function() {
	$("#nav-box").fadeToggle(1000, function() {
		nav.style.display = "none";
		start.style.display = "block";
	});
  });
});

// 搜索栏动画效果
box.addEventListener('mouseover', function() {
	box.classList.add('active');
});
box.addEventListener('mouseout', function() {
	box.classList.remove('active');
});
box.addEventListener('mouseout', function(e) {
	e.stopPropagation();
});


