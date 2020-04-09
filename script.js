
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

				document.write(x);
				// document.getElementById("display1").innerHTML = ();
			}
		}
	}	
	
