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
	    this.setAttribute("cx", xc);
	    this.setAttribute("cy", yc);
	},
	
	color: function(color){
	    this.setAttribute("fill",color)
	},
	
	change: function(e){
	    if (this.getAttribute("fill") == "pink"){
		this.color("red");
	    }
	    else{
		//when dot is red, change to pink and move the dot somewhere else
		this.cors(Math.random*500, Math.random*500);
		this.color("pink");		
	    }
	},
	
	display: function(e){
	    pic.appendChild(this);
	}
    }
    dot.cl.cors(xc,yc);
    dot.cl.color("pink");
    dot.cl.display();
    return dot.cl
}



var clear = function(e){
    pic.innerHTML="";   
}

pic.addEventListener("click", clicked);

c = document.getElementById("clr")
c.addEventListener("click",clear)
