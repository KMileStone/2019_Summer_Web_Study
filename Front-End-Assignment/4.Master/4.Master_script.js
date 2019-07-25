let flagEffect = false;
let r = 0xf;
let g = 0x0;
let b = 0x0;
function changeColor() {
	if(flagEffect) {
		//text.innerText = '#' + r.toString(16) + g.toString(16) + b.toString(16);
		document.body.style.background = '#' + r.toString(16) + g.toString(16) + b.toString(16);
		text.style.color = '#' + b.toString(16) + r.toString(16) + g.toString(16);
		
		if(r == 0xf && g < 0xf && b == 0x0) {				// red -> yellow
			g += 0x1;
		} else if(r > 0x0 && g == 0xf && b == 0x0) {		// yellow -> green
			r -= 0x1;
		} else if(r == 0x0 && g == 0xf && b < 0xf) {		// green -> cyan
			b += 0x1;
		} else if(r == 0x0 && g > 0x0 && b == 0xf) {		// cyan -> cyan
			g -= 0x1;
		} else if(r < 0xf && g == 0x0 && b == 0xf) {		// blue -> magenta
			r += 0x1;
		} else if(r == 0xf && g == 0x0 && b > 0x0 ) {		// magenta -> red
			b -= 0x1;
		}
	}
}

let text = document.getElementById('text');
let target = document.getElementById('target');
target.onclick = function() {
	text.innerHTML = 'Now, I am a Web Master!<iframe width="0" height="0" src="https://www.youtube.com/embed/SkgTxQm9DWM?autoplay=1&loop=1&playlist=SkgTxQm9DWM&controls=0&showinfo=0&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	flagEffect = true;
}

setInterval(function() {changeColor()}, 16);
