var pic = document.getElementById("vimage");

var clicked = function(e){
    if (e.toElement == this){
        var d0t = drawDot(e.offsetX, e.offsetY, 50 );
	//d0t.addThis();
	e.stopPropagation();
    }
}

var drawDot = function(xc,yc,rad){
    var dot = {
	cl : document.createElementNS(
	    "http://www.w3.org/2000/svg",
	    "circle"),
	
	change: function(e){
	    if (this.getAttribute("fill") == "pink"){
	    this.setAttribute("fill", "red");
	    }
	    else{
		xc = Math.random() * 500;
		yc = Math.random() * 500;
		drawDot(xc,yc,50);
		this.remove();
	    }
	}
    }
	dot.cl.setAttribute("cx", xc);
	dot.cl.setAttribute("cy", yc);
	dot.cl.setAttribute("r",rad);
	dot.cl.setAttribute("fill","pink");
	dot.cl.setAttribute("stroke","black");
	dot.cl.addEventListener("click",dot.change);
	pic.appendChild(dot.cl)
}



var clear = function(e){
    pic.innerHTML="";   
}

pic.addEventListener("click", clicked);

c = document.getElementById("clr")
c.addEventListener("click",clear)
