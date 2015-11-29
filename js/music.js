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

//控制音乐播放器函数
function musicPlay() {
	var oBtn1 = document.getElementById('btn1'); 
	var media = document.getElementById('player');
	var oBtn2 = document.getElementById('btn2');
	var lound = document.getElementById('lound');
	var time = document.getElementById('time');
	var end = document.getElementById('end');

	time.disabled = 'true';
	lound.disabled = 'true';

	end.onclick = function() {
		media.pause();
		media.load();
		media.pause();
		oBtn1.value = '播放';
	}
	oBtn2.onchange = function() {
		lound.value = this.value;
		media.volume = this.value/100;
	}
	oBtn1.onclick = function() {
		if(oBtn1.value == '播放') {
			media.play();
			oBtn1.value = '暂停';
		} else {
			media.pause();
			oBtn1.value = '播放';
		}
	}

	var alltime = media.duration;
	var alltimeM = parseInt(alltime/60);
	var alltimeS = parseInt(alltime%60);
	time.value = '00:00'+'/'+alltimeM+':'+alltimeS;
	musicTime(1000,'player',alltimeM,alltimeS);
}

//返回当前播放时间函数
function musicTime(interval,audioId,alltimeM,alltimeS) {
	var audio = document.getElementById(audioId);
	var time = document.getElementById('time');
	var intime = audio.currentTime;
	var intimeM = parseInt(intime/60);
	var intimeS = parseInt(intime%60);	
	time.value = intimeM+':'+intimeS+'/'+alltimeM+':'+alltimeS;

	var repeat = 'musicTime('+interval+','+'"'+audioId+'"'+','+alltimeM+','+alltimeS+')';
	movement = setTimeout(repeat,interval);
}

addLoadEvent(musicPlay);