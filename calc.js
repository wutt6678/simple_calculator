/*
 * Implement all your JavaScript in this file!
 */
 
 var operation = 0;
 var operatorClicked = false;
 var repeat = false;
 var prevValue = 0;
 var displayValue = 0;
 
 function calc() {
	 var inputField = $("input[name='display']");
	 var result = 0;
	 if (!repeat) {
		 displayValue = Number(inputField.val());
		 repeat = true;
	 } else {
		 prevValue = Number(inputField.val());
	 }
	 if (operation == 1) {
		 // Adding values
		 result = displayValue + prevValue;
	 } else if (operation == 2) {
		 // Sutracting values
		 result = prevValue - displayValue;
	 } else if (operation == 3) {
		 // Multiplying values
		 result = displayValue * prevValue;
	 } else if (operation == 4) {
		 // Dividing values
		 result = prevValue / displayValue;
	 }
	 if (operation && !isNaN(result)) {
		 inputField.val(result);
	 }
 }

 $('button.numButton').click(function() {
	 var inputField = $("input[name='display']");
	 if (operatorClicked) {
		 inputField.val('');
		 displayValue = Number($(this).val());
		 operatorClicked = false;
	 } else {
		 displayValue = Number(inputField.val());
		 displayValue = displayValue * 10 + Number($(this).val());
	 }
	 inputField.val(displayValue);
	 repeat = false;
 });
 
 $('button#addButton').click(function() {
	 if (!operatorClicked) {
		 calc();
	 }
	 operation = 1;
	 prevValue = Number($("input[name='display']").val());
	 operatorClicked = true;
	 repeat = false;
 });
 
 $('button#subtractButton').click(function() {
	 if (!operatorClicked) {
		 calc();
	 }
	 operation = 2;
	 prevValue = Number($("input[name='display']").val());
	 operatorClicked = true;
	 repeat = false;
 });
 
 $('button#multiplyButton').click(function() {
	 if (!operatorClicked) {
		 calc();
	 }
	 operation = 3;
	 prevValue = Number($("input[name='display']").val());
	 operatorClicked = true;
	 repeat = false;
 });
 
 $('button#divideButton').click(function() {
	 if (!operatorClicked) {
		 calc();
	 }
	 operation = 4;
	 prevValue = Number($("input[name='display']").val());
	 operatorClicked = true;
	 repeat = false;
 });
 
 $('button#equalsButton').click(function() {
	 calc();
	 operatorClicked = true;
 });
 
 $('button#clearButton').click(function() {
	 operation = 0;
	 prevValue = 0;
	 displayValue = 0;
	 operatorClicked = false;
	 repeat = false;
	 $("input[name='display']").val('');
 });