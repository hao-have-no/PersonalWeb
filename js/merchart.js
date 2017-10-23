window.onload = function(){
	document.querySelector('.headIcon').addEventListener('click',function(){
		history.go(-1);
	});
	 document.getElementById('tab-list').addEventListener('click',function(event){
    	var event=event || window.event;
    	var target = event.target || event.srcElement;
    	if(target.className == 'showMain'||target.className == 'dataId' ||target.className == 'dataName' ||target.className == 'dataLastTime'|| target.className == 'strong'){
    		window.location.href='user.html';
    	}
    });
    var oUl1 = document.getElementById("ul1");
    var aLi = oUl1.getElementsByTagName("li");
    var oDiv = document.getElementById("tab-list");
    var aDiv = oDiv.getElementsByTagName("div");
    for(var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function() {
            for(var i = 0; i < aLi.length; i++) {
                aLi[i].className = "";
            }
            this.className = "active";
            for(var j = 0; j < aDiv.length; j++) {
                aDiv[j].className = "hide";
            }
            aDiv[this.index].className = "show";
        }        
    }
}