// FORM(SECTION PREMIUM)

// function setCursorPosition(pos, e) {
// 	e.focus();
// 	if (e.setSelectionRange) e.setSelectionRange(pos, pos);
// 	else if (e.createTextRange) {
// 		var range = e.createTextRange();
// 		range.collapse(true);
// 		range.moveEnd("character", pos);
// 		range.moveStart("character", pos);
// 		range.select();
// 	}
// }

// function mask(e) {
// 	//console.log('mask',e);
// 	var matrix = this.placeholder, // .defaultValue
// 		i = 0,
// 		def = matrix.replace(/\D/g, ""),
// 		val = this.value.replace(/\D/g, "");
// 	def.length >= val.length && (val = def);
// 	matrix = matrix.replace(/[_\d]/g, function (a) {
// 		return val.charAt(i++) || "_";
// 	});
// 	this.value = matrix;
// 	i = matrix.lastIndexOf(val.substr(-1));
// 	i < matrix.length && matrix != this.placeholder
// 		? i++
// 		: (i = matrix.indexOf("_"));
// 	setCursorPosition(i, this);
// }
// window.addEventListener("DOMContentLoaded", function () {
// 	var input = document.querySelector("#online_phone");
// 	input.addEventListener("input", mask, false);
// 	// input.focus();
// 	setCursorPosition(3, input);
// });

// INPUT RANGE

function fun1() {
	var rng = document.getElementById("r1"); //это Input
	var p = document.getElementById("one"); // p - абзац
	var price = document.getElementById("user-policy-price"); // Стоймость полиса(позже исправить!!!!!!!)
	var assistance = document.getElementById('assistance');
	var insured = document.querySelectorAll('.insured-sum');
	p.innerHTML = rng.value;
	price.innerHTML = Math.round(rng.value / 245);
	insured.innerHTML = rng.value;
	for (let i = 0; i < insured.length; i++) {
		insured[i].innerHTML = rng.value;
	}
	rng.addEventListener('mousemove', function () {
		var x = rng.value * 100 / 3000000;
		var color = 'linear-gradient(90deg,rgb(156, 170, 15)' + x + '%,rgb(214, 214, 214)' + x + '%)'
		rng.style.background = color;
		console.log(color);
	})

}
fun1()




// БЛОК С ВОПРОСАМИ
$('.questions-btn').on('click', function () {
	var $btn = $(this);
	$btn.toggleClass('on');
	$btn.toggleClass('off');
	if ($btn.hasClass('on')) {
		$btn.text('+');
	} else {
		$btn.text('-');
	}
})
// БЛОК С ВОПРОСАМИ




// ПОДСКАЗКА
$(function () {
	$('[data-toggle="popover"]').popover();
});
// ПОДСКАЗКА




// Счетчик

function handleTickInit(tick) {

	// set final value, tick will animate towards it
	setTimeout(function () {
		tick.value = 97946453;

	}, 0.01);
}

function handleTickInitSecond(tick) {

	// set final value, tick will animate towards it
	setTimeout(function () {
		tick.value = 13854628;

	}, 0.01);
}
function handleTickInitThird(tick) {

	// set final value, tick will animate towards it
	setTimeout(function () {
		tick.value = 4321749;

	}, 0.01);
}