//加载函数
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

//点击展开收起
function loadingText() {
	var oBtn1 = document.getElementById('btn1');
	var oBtn2 = document.getElementById('btn2');
	var oLoading = document.getElementById('loading');
 	oBtn1.onclick = function() {
		if(oLoading.style.display != 'block') {
			oLoading.style.display = 'block';
			oBtn1.style.display = 'none';
		}
	}
	oBtn2.onclick = function() {
		if(oLoading.style.display == 'block') {
			oLoading.style.display = 'none';
			oBtn1.style.display = 'block';
		}
	}
}

//弹出联系窗口
function loadingContact() {
	var oBtn = document.getElementById('contactButton');
	var contact = document.getElementById('contact');
	var cover = document.getElementById('cover');
	var comeback = document.getElementById('backmain');
	oBtn.onclick = function() {
		contact.style.display = 'block';
		cover.style.display = 'block';
	}
	cover.onclick = function() {
		contact.style.display = 'none';
		cover.style.display = 'none';		
	}
	backmain.onclick = function() {
		contact.style.display = 'none';
		cover.style.display = 'none';				
	}
	backmain.onmouseover = function() {
		comeback.style.border = 'thin solid rgb(203,160,117)';
	}
	backmain.onmouseout = function() {
		comeback.style.border =	'';	
	}
}

//联系窗口内的输入框焦点效果
function contact() {
	var ins = document.getElementsByClassName('contactInput');
	var submit = document.getElementById('submit');
	for (var i = 0; i < ins.length; i++) {
		ins[i].onfocus = function() {
			var oldValue = this.value;
			if(oldValue == '请输入你的联系方式' || oldValue == '请输入事件') {
				this.value = '';
			}
		}
	}
	ins[0].onblur = function() {
			if (this.value != '') {
				return true;
			} else {
				this.value = '请输入你的联系方式';
			}
	}
	ins[1].onblur = function() {
			if (this.value != '') {
				return true;
			} else {
				this.value = '请输入事件';
			}		
	}
	submit.onclick = function() {
		if(ins[0].value == '请输入你的联系方式' && ins[1].value == '请输入事件') {
			alert('空内容，无法提交！');
			return false;
		}
		alert('成功提交！谢谢！');
	}
}

//鼠标放在按钮上
function overButton() {
	var btn = document.getElementsByTagName('input');
	for (var i = 0; i < btn.length; i++) {
		if(btn[i].type == 'button') {
			btn[i].onmouseover = function() {
				this.style.color = 'rgb(24,24,24)';
			}
			btn[i].onmouseout = function() {
				this.style.color = 'rgb(153,153,153)';
			}
		}
	};
}

//书板块的动画
function books() {
	var elem1 = document.getElementById('evaluate1');
	var content1 = document.getElementById('content1');
	var elem2 = document.getElementById('evaluate2');
	var content2 = document.getElementById('content2');
	var elem3 = document.getElementById('evaluate3');
	var content3 = document.getElementById('content3');
	var elem4 = document.getElementById('evaluate4');
	var content4 = document.getElementById('content4');

	elem1.onclick = function() {
		positionEvaluate('evaluate1',elem1);
	}
	content1.onclick = function() {
		positionContent('evaluate1',elem1);
	}
	elem2.onclick = function() {
		positionEvaluate('evaluate2',elem2);
	}
	content2.onclick = function() {
		positionContent('evaluate2',elem2);
	}
	elem3.onclick = function() {
		positionEvaluate('evaluate3',elem3);
	}
	content3.onclick = function() {
		positionContent('evaluate3',elem3);
	}
	elem4.onclick = function() {
		positionEvaluate('evaluate4',elem4);
	}
	content4.onclick = function() {
		positionContent('evaluate4',elem4);
	}
}

//评论往下滑调用，后再调用移动div函数实现动画效果
function positionContent(elementId,elem) {
	var sign = elem.style.top;
  if (sign == '135px') {
		return true;
	};
  elem.style.position = 'absolute';
  elem.style.top = '25px';
  moveElement(elementId,135,2);
}

//评论往上滑调用，后再调用移动div函数实现动画效果
function positionEvaluate(elementId,elem) {
	var sign = elem.style.top;
	if (sign == '25px') {
		return true;
	};
  elem.style.position = 'absolute';
  elem.style.top = '135px';
  moveElement(elementId,25,2);
}

//移动div调用函数，实现动画效果
function moveElement(elementId,finaly,interval) {
	var elem = document.getElementById(elementId);
	var ypos = parseInt(elem.style.top);
	if (ypos == finaly) {
		return true;
	}
	if(ypos < finaly) {
		ypos++;
	}
	if (ypos > finaly) {
		ypos--;
	}
	elem.style.top = ypos + 'px';
	var repeat = 'moveElement("'+elementId+'",'+finaly+','+interval+')';
	movement = setTimeout(repeat,interval);
}

//旅游版块鼠标放上去透明度变化
function travels() {
	var travels = document.getElementById('travels');
	var links = travels.getElementsByTagName('img');
	var citys = travels.getElementsByClassName('city');
	var photo1s = travels.getElementsByClassName('photoMessage');
	var lefts = travels.getElementsByClassName('left');
	var rights = travels.getElementsByClassName('right');

	lefts[0].onclick = function() {
		if(	photo1s[0].style.display == 'block') {
			photo1s[0].style.display = '';
			links[0].style.opacity = 1;
		} else {
			photo1s[0].style.display = 'block';	
			links[0].style.opacity = 0.6;	
		}
	}
	lefts[1].onclick = function() {
		if(	photo1s[2].style.display == 'block') {
			photo1s[2].style.display = '';
			links[6].style.opacity = 1;
		} else {
			photo1s[2].style.display = 'block';	
			links[6].style.opacity = 0.6;
		}
	}
	rights[0].onclick = function() {
		if(	photo1s[1].style.display == 'block') {
			photo1s[1].style.display = '';
			links[5].style.opacity = 1;
		} else {
			photo1s[1].style.display = 'block';	
			links[5].style.opacity = 0.6;		
		}
	}
	rights[1].onclick = function() {
		if(	photo1s[3].style.display == 'block') {
			photo1s[3].style.display = '';
			links[11].style.opacity = 1;
		} else {
			photo1s[3].style.display = 'block';	
			links[11].style.opacity = 0.6;					
		}
	}

	for (var i = links.length - 1; i >= 0; i--) {
		links[i].onmouseover = function() {
			this.style.opacity = 0.6;
		}
		links[i].onmouseout = function() {
			this.style.opacity = 1;
		}
	};
}

//导航栏滚动变动
function header() {
	var nav = document.getElementById('header');
	var navT = nav.offsetTop;
	window.onscroll = function () {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t > navT) {
			nav.style.position = 'fixed';
			nav.style.top = '0';
			nav.style.left = '5%';
			nav.style.opacity = 0.9;
			nav.style.background = 'rgb(240,240,240)';
		} else {
			nav.style.position = 'static';
			nav.style.left = '';
			nav.style.background = '';
		}
	}
}

//检查浏览器窗口变化，变化图片大小，实现自适应
window.onresize = function() {
	getWidth();
	music();
}
//音乐板块轮播样式
function music() {
	var which1 = document.getElementById('which1');
	var which2 = document.getElementById('which2');
	var which3 = document.getElementById('which3');
	var sLeft = document.getElementById('selectLeft');
	var sRight = document.getElementById('selectRight');
	var elem = document.getElementById('musicPhotos');
	var dis = elem.offsetLeft;
	var width = getWidth();
	sLeft.onclick = function() {
		positionLeft(dis,width);
	}
	sRight.onclick = function() {
		positionRight(dis,width);
	}
	which1.onclick = function() {
		var elem = document.getElementById('musicPhotos');
		var left = elem.offsetLeft - dis;
		var finalx = 0;
  	inwhich(finalx,width);
  	moveMusic('musicPhotos',left,1,finalx);
	}
	which2.onclick = function() {
		var elem = document.getElementById('musicPhotos');
		var left = elem.offsetLeft - dis;
		var finalx = -width;
  	inwhich(finalx,width);
  	moveMusic('musicPhotos',left,1,finalx);
	}
	which3.onclick = function() {
		var elem = document.getElementById('musicPhotos');
		var left = elem.offsetLeft - dis;
		var finalx = -2*width;
  	inwhich(finalx,width);
  	moveMusic('musicPhotos',left,1,finalx);
	}
}

//向右轮播调用，后再调用移动函数
function positionRight(dis,width) {
	var elem = document.getElementById('musicPhotos');
	var left = elem.offsetLeft - dis;
	elem.style.left = left+'px';
  var finalx = left-width;
  if(-finalx >= 3*width) {
  	finalx = 0;
  	elem.style.left = width + 'px';
  	left = width;
  }
	if(left != 0 && left != width && left != 2*width && left != 3*width && left != -width && left != -2*width && left != -3*width) {
  	return false;
  }
  inwhich(finalx,width);
  moveMusic('musicPhotos',left,1,finalx);
}

//向左轮播调用，后再调用移动函数
function positionLeft(dis,width) {
	var elem = document.getElementById('musicPhotos');
	var left = elem.offsetLeft - dis;
	elem.style.left = left+'px';
  var finalx = left+width;
  if(finalx > 0) {
  	finalx = finalx - 3*width;
  	elem.style.left = width + 'px';
  	left = -3*width;
  }
  if(left != 0 && left != width && left != 2*width && left != 3*width && left != -width && left != -2*width && left != -3*width) {
  	return false;
  }
  inwhich(finalx,width);
  moveMusic('musicPhotos',left,1,finalx);	
}

//移动实现轮播
function moveMusic(elementId,left,interval,finalx) {
	var elem = document.getElementById(elementId);
	if (left == finalx) {
		return true;
	}
	if(left < finalx) {
		left = left + 10;
		if(left >finalx) {
			left = finalx;
		}
	}
	if (left > finalx) {
		left = left - 10;
		if(left < finalx) {
			left = finalx;
		}
	}
	elem.style.left = left + 'px';
	var repeat = 'moveMusic("'+elementId+'",'+left+','+interval+','+finalx+')';
	movement = setTimeout(repeat,interval);
}

//音乐板块轮播焦点
function inwhich(finalx,width) {
	var which1 = document.getElementById('which1');
	var which2 = document.getElementById('which2');
	var which3 = document.getElementById('which3');
	var inthis = 'rgb(223,175,148)';
	var notthis = 'rgb(224,226,163)'
	if(finalx == 0) {
  	which1.style.background = inthis;
  	which2.style.background = notthis;
  	which3.style.background = notthis;
  } else if(finalx == -width) {
  	which2.style.background = inthis;
  	which1.style.background = notthis;
  	which3.style.background = notthis;
  } else if(finalx == -2*width) {
  	which3.style.background = inthis;
  	which1.style.background = notthis;
  	which2.style.background = notthis;
  }
}

//音乐板块的悬停变化效果
function musicHover() {
	var elem = document.getElementById('music');
	var elems = elem.getElementsByTagName('li');
	for (var i = elems.length - 1; i >= 0; i--) {
		elems[i].onmouseover = function() {
			this.style.opacity = 0.6;
		}
		elems[i].onmouseout = function() {
			this.style.opacity = 1;
		}
	};
}

//得到宽度并且改变轮播版块的宽度
function getWidth() {
	var songs = document.getElementById('songs');
  var width = songs.offsetWidth;
  var ul = document.getElementById('musicPhotos');
  ul.width = width*3 + 'px';
  ul.style.left = 0; 
	cheek(width);
	return width;
}
function cheek(width) {
	var elem = document.getElementById('musicPhotos');
  var imgs = elem.getElementsByTagName('img');
	var image = new Image();
	image.src = imgs[1].src;
	if(	parseInt(image.width) != 0.25*width) {
		for (var i = imgs.length - 1; i >= 0; i--) {
			imgs[i].style.width = 0.25*width+'px';
		};
	}
}


addLoadEvent(loadingText);
addLoadEvent(loadingContact);
addLoadEvent(contact);
addLoadEvent(overButton);
addLoadEvent(books);
addLoadEvent(travels);
addLoadEvent(header);
addLoadEvent(music);
addLoadEvent(musicHover);
addLoadEvent(getWidth);