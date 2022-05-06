function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
	form.screen.value = Math.cos(form.screen.value);
}

function sin(form) {
	form.screen.value = Math.sin(form.screen.value);
}

function tan(form) {
	form.screen.value = Math.tan(form.screen.value);
}

function sqrt(form) {
	form.screen.value = Math.sqrt(form.screen.value);
}

function ln(form) {
	form.screen.value = Math.log(form.screen.value);
}

function exp(form) {
	form.screen.value = Math.exp(form.screen.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {

    form.screen.value = eval(form.screen.value);
  }


function square(form) {
	form.screen.value = eval(form.screen.value) * eval(form.screen.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
  