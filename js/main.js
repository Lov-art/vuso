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
const rng = document.getElementById("r1"); //это Input
var p = document.getElementById("one"); // p - абзац
var price = document.getElementById("user-policy-price"); // Стоймость полиса(позже исправить!!!!!!!)
var assistance = document.getElementById('assistance');
var insured = document.querySelectorAll('.insured-sum');
function fun1() {
	p.innerHTML = rng.value;
	price.innerHTML = Math.round(rng.value / 245);
	// insured.innerHTML = rng.value;
	for (let i = 0; i < insured.length; i++) {
		insured[i].innerHTML = rng.value;
	}

}
function fun2() {
	p.innerHTML = rng.value;
	for (let i = 0; i < insured.length; i++) {
		insured[i].innerHTML = rng.value;
	}

}
rng.addEventListener('mousemove', function () {
	var x = rng.value * 100 / 3000000;
	var color = 'linear-gradient(90deg,rgb(156, 170, 15)' + x + '%,rgb(214, 214, 214)' + x + '%)'
	rng.style.background = color;
})
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
///calc-step-two
let select = document.querySelector('.calc-select');
let brand = document.getElementById('brand');
let year = document.getElementById('year');
let city = document.getElementById('city');
let drivers = document.getElementById('drivers');
let deterioration = document.getElementById('deterioration');
let repair = document.getElementById('repair');
let payment = document.getElementById('payment');
let credit = document.getElementById('credit');
let taxi = document.getElementById('taxi');

let userChoiceBrand = document.querySelectorAll('.user-choice-brand');
let userChoiceYear = document.querySelectorAll('.user-choice-year');
let userChoiceCity = document.querySelectorAll('.user-choice-city');
let userChoiceDrivers = document.querySelectorAll('.user-choice-drivers');
let userChoicePrice = document.querySelectorAll('.user-choice-price');
let userChoiceDeterioration = document.querySelectorAll('.user-choice-deterioration');
let userChoiceRepair = document.querySelectorAll('.user-choice-repair');
let userChoicePayment = document.querySelectorAll('.user-choice-payment');
let userChoiceCredit = document.querySelectorAll('.user-choice-credit');
let userChoiceTaxi = document.querySelectorAll('.user-choice-taxi');

let calcStepTwo = document.querySelector('.calc-step-two');
let calcStepOne = document.querySelector('.calc-step-one');
let calcStepThree = document.querySelector('.calc-step-3');
let calcStepFour = document.querySelector('.calc-step-4');


function stepChange() {
	calcStepTwo.style.display = 'none';
	calcStepOne.style.display = 'block';
}
function stepTwo() {
	calcStepTwo.style.display = 'block';
	calcStepOne.style.display = 'none';

	for (let i = 0; i < userChoiceBrand.length; i++) {
		userChoiceBrand[i].innerHTML = brand.value;
	}

	for (let i = 0; i < userChoiceYear.length; i++) {
		userChoiceYear[i].innerHTML = year.value;
	}

	for (let i = 0; i < userChoiceDrivers.length; i++) {
		userChoiceDrivers[i].innerHTML = drivers.value;
	}

	for (let i = 0; i < userChoiceCity.length; i++) {
		userChoiceCity[i].innerHTML = city.value;
	}

	for (let i = 0; i < userChoicePrice.length; i++) {
		userChoicePrice[i].innerHTML = rng.value + ' ' + 'грн';
	}

	for (let i = 0; i < userChoiceDeterioration.length; i++) {
		userChoiceDeterioration[i].innerHTML = deterioration.value;
	}

	for (let i = 0; i < userChoiceRepair.length; i++) {
		userChoiceRepair[i].innerHTML = repair.value;
	}

	for (let i = 0; i < userChoicePayment.length; i++) {
		userChoicePayment[i].innerHTML = payment.value;
	}

	for (let i = 0; i < userChoiceCredit.length; i++) {
		if (credit.checked) {
			userChoiceCredit[i].innerHTML = 'кредит';
		} else {
			userChoiceCredit[i].innerHTML = 'не кредит';
		};
	}
	for (let i = 0; i < userChoiceTaxi.length; i++) {
		if (taxi.checked) {
			userChoiceTaxi[i].innerHTML = 'такси';
		} else {
			userChoiceTaxi[i].innerHTML = 'не такси';
		};
	}


}
function stepThree() {
	calcStepTwo.style.display = 'none';
	calcStepThree.style.display = 'block';
}
function stepFour() {
	calcStepThree.style.display = 'none';
	calcStepFour.style.display = 'block';
}