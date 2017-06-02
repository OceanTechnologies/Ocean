var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


/*

all = $("*").children();*/


all = $('div *:not(:has("*"))')

for(var i = 0;i<all.length;i++){
	try{
		var elem1 = all[i];
		var style = window.getComputedStyle(elem1,null);
		var col = style.getPropertyValue("color");
		col = col.replace(/[^\d,]/g, '').split(',');
		var r = [];
		var b = [];
		var g = [];
		r.push(0);
		r.push(230);
		r.push(86);
		r.push(0);
		r.push(240);
		r.push(0);
		r.push(213);
		r.push(204);

		b.push(0);
		b.push(159);
		b.push(180);
		b.push(158);
		b.push(228);
		b.push(114);
		b.push(94);
		b.push(121);

		g.push(0);
		g.push(0);
		g.push(233);
		g.push(115);
		g.push(66);
		g.push(178);
		g.push(0);
		g.push(167);
		//alert("Before loop");
		var ans = 10000;
		var index = -1;
		for(var j = 0;j<r.length;j++){
			var dist = Math.sqrt((col[0]-r[j])*(col[0]-r[j])+(col[1]-b[j])*(col[1]-b[j])+(col[2]-g[j])*(col[2]-g[j]));
			if(dist<ans){
				ans = dist;
				index=i;
			}
		}
		//alert("Loop Cntr "+i);
		all[i].style.color = "rgb("+r[index]+","+g[index]+","+b[index]+")";	

		//alert("rgb("+r[index]+","+g[index]+","+b[index]+")");

	}
	catch(err){
		alert(err);
	}
}


/*

for(var y = 0;y<p.length;y++){
	try{
		var elemp = p[y];
		var stylep = window.getComputedStyle(elemp,null);
		var colp = stylep.getPropertyValue("color");
		colp = colp.replace(/[^\d,]/g, '').split(',');
		var rp = [];
		var bp = [];
		var gp = [];
		rp.push(0);
		rp.push(230);
		rp.push(86);
		rp.push(0);
		rp.push(240);
		rp.push(0);
		rp.push(213);
		rp.push(204);

		bp.push(0);
		bp.push(159);
		bp.push(180);
		bp.push(158);
		bp.push(228);
		bp.push(114);
		bp.push(94);
		bp.push(121);

		gp.push(0);
		gp.push(0);
		gp.push(233);
		gp.push(115);
		gp.push(66);
		gp.push(178);
		gp.push(0);
		gp.push(167);
		//alert("Before loop");
		var ansp = 10000;
		var indexp = -1;
		for(var jp = 0;jp<rp.length;jp++){
			var distp = Math.sqrt((colp[0]-rp[jp])*(colp[0]-rp[jp])+(colp[1]-bp[jp])*(colp[1]-bp[jp])+(colp[2]-gp[jp])*(colp[2]-gp[jp]));
			if(distp<ansp){
				ansp = distp;
				indexp=y;
			}
		}
		//alert("Loop Cntr "+i);
		p[y].style.color = "rgb("+rp[indexp]+","+gp[indexp]+","+bp[indexp]+")";	

		//alert("rgb("+r[index]+","+g[index]+","+b[index]+")");

	}
	catch(err){
		alert(err);
	}
}

*/
/*$("body").children().css({"color":"red"})
$("div").css({"color":"red"})
$("a").css({"color":"red"})
$("li").css({"color":"red"})
$("p").css({"color":"red"})*/
/**/

/*var all = $('body *:not(:has("*"))'), maxDepth=0, deepest = []; 
all.each( function(){ 
	var depth = $(this).parents().length||0; 
	if(depth>maxDepth){ 
		deepest = [this]; 
		maxDepth = depth; 

	}
	else if(depth==maxDepth){
		deepest.push(this); 
	}
});*/
