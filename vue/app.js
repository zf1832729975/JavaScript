// 实例化Vue对象
new Vue({
	el :"#vue-app",
	data : {
		age : 30,
		offsetX : 0,
		offsetY : 0,
		clientX : 0,
		clientY : 0,
		pageX : 0,
		pageY : 0,
		screenX : 0, 
		screenY : 0, 
		//pageXOffset
	},
	methods: {
		add: function(inc) {
			this.age += inc;
		},
		subtract: function(dec) {
			this.age -= dec;
		}, 
		updateXY: function(event) {
			//console.log(event);
			this.offsetX = event.offsetX;
			this.offsetY = event.offsetY;
			this.clientX = event.clientX;
			this.clientY = event.clientY;
			this.pageX = event.clientX;
			this.pageY = event.clientY;
			this.screenX = event.screenX;
			this.screenY = event.screenY;
		},
		stopMoving : function(ev) {
			ev.stopPropagation();
			//阻止冒泡事件
		}
	}
});
