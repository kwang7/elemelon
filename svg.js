var pic = document.getElementById("vimage");

var clicked = function(e){
    if (e.toElement == this){
        var d0t = drawDot(e.offsetX, e.offsetY, 50 );
	//d0t.display();
	e.stopPropagation();
    }
}

var drawDot = function(xc,yc,rad){
    var dot = {
	cl : document.createElementNS(
	    "http://www.w3.org/2000/svg",
	    "circle"),
	
	cors: function(xc,yc){
	    this.cl.setAttribute("cx", xc);
	    this.cl.setAttribute("cy", yc);
	    this.cl.setAttribute("r", rad);
	},
	
	color: function(color){
	    this.cl.setAttribute("fill",color)
	},
	
	change: function(e){
	    if (this.cl.getAttribute("fill") == "pink"){
		this.color("red");
	    }
	    else{
		//when dot is red, change to pink and move the dot somewhere else
		this.cors(Math.random*500, Math.random*500);
		this.color("pink");		
	    }
	},
	
	display: function(e){
	    pic.appendChild(this.cl);
	}
    }
    dot.cl.addEventListener("click", dot.change);
    dot.cors(xc,yc);
    dot.color("pink");
    dot.display();
    return dot.cl
}



var clear = function(e){
    pic.innerHTML="";   
}

pic.addEventListener("click", clicked);

c = document.getElementById("clr")
c.addEventListener("click",clear)
