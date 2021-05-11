function Focus(){	var e=window.event;	var obj=e.srcElement;
	obj.style.background="#00000070";}function Blur(){	var e=window.event;	var obj=e.srcElement;
	obj.style.background="#ffffff00";}



function myCheck() {
	if (document.myform.username.value == "") {
		alert("用户名不能为空！");
		document.myform.username.focus();
		return false;
	} else if (document.myform.password.value == "") {
		alert("密码不能为空！");
		document.myform.password.focus();
		return false;
	} else if (document.myform.password2.value == "") {
		alert("确认密码不能为空！");
		document.myform.password2.focus();
		return false;
	}
}

var start = document.getElementById("nav-btn-start");
var close = document.getElementById("nav-btn-close");
var nav = document.getElementById("nav-box");
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