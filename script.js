 
	//CODE_ENCRYPTION
	function process() {
		var input = document.getElementById("encrypt").value;

		// CODE TO PREVENT CHARACTER REPITION
		if (/(.)\1{2,}/.test(input)) {
		    alert("Dont Use Repeated characters!");
  			exit()
		}
		// CHECKS LENGTH OF CHARACTER INPUTED
  		var len = input.length;
  		if (len < 6) {
  			alert("Requires Minimum of 6 Characters");
  			exit()
  		}
  		// CHECKS IF INPUT IS EMPTY
		if (input == "") {
			alert("Input Field is Empty");

		// ELSE...
		} else {
			var str = input;
			var x;

			for (x of str) {
				// CONVERTS NUMBERS BY ADDING BY 1
				if (x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8) {
					x = parseFloat(x) + parseFloat(1);
				} else {}

// TO ENCRYPT BOTH CAPS & SMALL LETTERS
// var e = "e";
// if (x==e.toUpperCase() || x=="e") {
// 	x = '!';
// } else {}
				// CONVERTS LETTERS TO VARIOUS SYMBOLS
				if (x=="e") {
					x = '!';
				} else {}

				if (x=="a") {
					x = '@';
				} else {}

				if (x=="r") {
					x = '#';
				} else {}

				if (x=="i") {
					x = '$';
				} else {}
				
				if (x=="o") {
					x = '%';
				} else {}

				if (x=="t") {
					x = '^';
				} else {}

				if (x=="n") {
					x = '&';
				} else {}

				if (x=="s") {
					x = '*';
				} else {}
				
				if (x=="l") {
					x = '-';
				} else {}

				if (x=="c") {
					x = '+';
				} else {}

				if (x=="b") {
					x = '~';
				} else {}
				
				if (x=="d") {
					x = '`';
				} else {}

				if (x=="f") {
					x = '(';
				} else {}

				if (x=="g") {
					x = ')';
				} else {}

				if (x=="h") {
					x = '|';
				} else {}
				
				if (x=="m") {
					x = '?';
				} else {}

				if (x=="u") {
					x = '>';
				} else {}
				
				// window.alert(document.write(x));

				// Diplay Output
				var myWindow = window.open("", "newWindow", "width=300,height=100");
				myWindow.document.write(x);

				// Remove Input Value
				document.getElementById("encrypt").value = "";

			}
		}
	}	

	// DECRYPTION CODE
	function compute() {
		var output = document.getElementById("decrypt").value;

		// CODE TO PREVENT CHARACTER REPITION
		if (/(.)\1{2,}/.test(output)) {
		    alert("Dont Use Repeated characters!");
  			exit()
		}
		// CHECKS LENGTH OF CHARACTER INPUTED
  		var len = output.length;
  		if (len < 6) {
  			alert("Requires Minimum of 6 Characters");
  			exit()
  		}
  		// CHECKS IF INPUT IS EMPTY
		if (output == "") {
			alert("Input Field is Empty");

		// ELSE...
		} else {
			var str = output.split("");
			var x = "";

			for (x of str) {
				// CONVERTS ENCRYPTION BY SUBTRACTING 1
				if (x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 ||x==9) {
					x = parseFloat(x) - parseFloat(1);
				} else {}

				// CONVERTS SYMBOLS BACK TO LETTERS
				if (x=="!") {
					x = 'e';
				} else {}

				if (x=="@") {
					x = 'a';
				} else {}

				if (x=="#") {
					x = 'r';
				} else {}

				if (x=="$") {
					x = 'i';
				} else {}
				
				if (x=="%") {
					x = 'o';
				} else {}

				if (x=="^") {
					x = 't';
				} else {}

				if (x=="&") {
					x = 'n';
				} else {}

				if (x=="*") {
					x = 's';
				} else {}
				
				if (x=="-") {
					x = 'l';
				} else {}

				if (x=="+") {
					x = 'c';
				} else {}

				if (x=="~") {
					x = 'b';
				} else {}
				
				if (x=="`") {
					x = 'd';
				} else {}

				if (x=="(") {
					x = 'f';
				} else {}

				if (x==")") {
					x = 'g';
				} else {}

				if (x=="|") {
					x = 'h';
				} else {}
				
				if (x=="?") {
					x = 'm';
				} else {}

				if (x==">") {
					x = 'u';
				} else {}

				// document.write(x);

				// Diplay Output
				var myWindow = window.open("", "newWindow", "width=300,height=100");
				myWindow.document.write(x);				
				
				// Remove Input Value
				document.getElementById("decrypt").value = "";
			}
		}
	}	
