var Shape = Base.extend({

	//fontsize inní þetta
	constructor:function(name,pos,color,width,fontSize,font,fontStyle) {
		this.name = name;
		this.pos = pos;
		this.size = new Point(0,0);
		this.color = color;
		this.selected = false;
		this.startX = 0;
		this.startY = 0;
		this.drawlineX = new Array();
		this.drawlineY = new Array();
		this.radius = 0;
		this.width = width;
		this.selectedObject = false;
		this.height = 0;
		this.text = '';
		this.fontSize = fontSize;
		this.font = font;
		this.fontStyle = fontStyle;
	},

	draw:function(canvas) {
		if ( this.selected === true ) {
			// show selection
		}
	},

	startDrawing:function(point) {

	},

	drawing:function(point) {

	},

	stopDrawing:function(point) {

	},

	added: function(canvas) {

	},

	selectedObj: function(m, n) {

	},

	selectedFill: function(canvas) {

	},

	moveObj: function(start, end) {

	}
});
