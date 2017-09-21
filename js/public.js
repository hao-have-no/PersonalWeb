(function(doc,win){  
			    var docEl =doc.documentElement,  
	            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  
	            recalc = function(){  
	                var clientWidth = docEl.clientWidth>640 ? 640 :docEl.clientWidth;  
	                if (!clientWidth) {return};  
	                docEl.style.fontSize = 20 * (clientWidth/640) + 'px';  
	            };  
			    recalc();  
			    if (!doc.addEventListener) return;  
			    win.addEventListener(resizeEvt, recalc, false);  
			    doc.addEventListener('DOMContentLoaded', recalc, false);  
			})(document,window)