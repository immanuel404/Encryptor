
	//CODE_ENCRYPTION
	function encrypt() {

		setTimeout(function(){
			var input = document.getElementById("encrypt").value;

			// PREVENTS CHARACTER REPITITION
			if (/(.)\1{2,}/.test(input)) {
			    alert("No Repeated Characters Allowed!");
	  			exit()
			}
			// CHECKS LENGTH OF CHARACTER INPUTED
	  		var len = input.length;
	  		if (len < 5) {
	  			alert("Requires Minimum of 5 Characters");
	  			exit()
	  		}
	  		// CHECKS IF INPUT IS EMPTY
			if (input == "") {
				alert("Input Field is Empty");


			// IF NO ERROR...
			} else {
				var str = input;
				x = "";
				var ans = [];

				for (x of str) {
					// CONVERTS NUMBERS BY ADDING BY 1
					if (x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8) {
						x = parseFloat(x) + parseFloat(1);
						ans.push(x);
					}

					// TO ENCRYPT BOTH CAPS & SMALL LETTERS
					// var e = "e";
					// if (x==e.toUpperCase() || x=="e") {
					// 	x = '!';
					// } else {}

					// CONVERTS LETTERS TO VARIOUS SYMBOLS
					if (x=="e") {
						x = '!';
						ans.push(x);
					}

					else if (x=="a") {
						x = '@';
						ans.push(x);
					}

					else if (x=="r") {
						x = '#';
						ans.push(x);
					}

					else if (x=="i") {
						x = '$';
						ans.push(x);
					}

					else if (x=="o") {
						x = '%';
						ans.push(x);
					}

					else if (x=="t") {
						x = '^';
						ans.push(x);
					}

					else if (x=="n") {
						x = '&';
						ans.push(x);
					}

					else if (x=="s") {
						x = '*';
						ans.push(x);
					}

					else if (x=="l") {
						x = '-';
						ans.push(x);
					}

					else if (x=="c") {
						x = '+';
						ans.push(x);
					}

					else if (x=="b") {
						x = '~';
						ans.push(x);
					}

					else if (x=="d") {
						x = '`';
						ans.push(x);
					}

					else if (x=="f") {
						x = '(';
						ans.push(x);
					}

					else if (x=="g") {
						x = ')';
						ans.push(x);
					}

					else if (x=="h") {
						x = '|';
						ans.push(x);
					}

					else if (x=="m") {
						x = '?';
						ans.push(x);
					}

					else if (x=="u") {
						x = '>';
						ans.push(x);
					}
					else {
						ans.push(x);
					}
					// Clear Input Value
					document.getElementById("encrypt").value = "";
				}
				// Convert to string | remove commas | output results
				var output = ans.toString();
				var result = output.replace(/,/g, "");
				document.getElementById("display1").innerHTML = result;

				// OUTPUT RESULT WITH WINBOX LIBRARY
				const encryptOutput = document.querySelector('#encryptOutput')
				const aboutBox = new WinBox({
				    title: 'Encryption Output',
				    // modal: true,
				    width: '350px',
				    height: '200px',
				    top: 50,
				    right: 25,
				    bottom: 50,
				    left: 25,
				    mount: encryptOutput,
				    onfocus: function () {
				      this.setBackground('lightslategrey')
				    },
				    onblur: function () {
				      this.setBackground('#777')
				    },
				 })
			}
		}, 1000);
	}



	// DECRYPTION CODE
	function decrypt() {

		setTimeout(function(){
			var output = document.getElementById("decrypt").value;

			// PREVENTS CHARACTER REPITITION
			if (/(.)\1{2,}/.test(output)) {
			    alert("Dont Use Repeated Characters!");
	  			exit()
			}
			// CHECKS LENGTH OF CHARACTER INPUTED
	  		var len = output.length;
	  		if (len < 5) {
	  			alert("Requires Minimum of 5 Characters");
	  			exit()
	  		}
	  		// CHECKS IF INPUT IS EMPTY
			if (output == "") {
				alert("Input Field is Empty");


			// IF NO ERROR...
			} else {
				var str = output;
				x = "";
				var ans = [];

				for (x of str) {
					// CONVERTS ENCRYPTION BY SUBTRACTING 1
					if (x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 ||x==9) {
						x = parseFloat(x) - parseFloat(1);
						ans.push(x);
					}

					// CONVERTS SYMBOLS BACK TO LETTERS
					if (x=="!") {
						x = 'e';
						ans.push(x);
					}

					else if (x=="@") {
						x = 'a';
						ans.push(x);
					}

					else if (x=="#") {
						x = 'r';
						ans.push(x);
					}

					else if (x=="$") {
						x = 'i';
						ans.push(x);
					}

					else if (x=="%") {
						x = 'o';
						ans.push(x);
					}

					else if (x=="^") {
						x = 't';
						ans.push(x);
					}

					else if (x=="&") {
						x = 'n';
						ans.push(x);
					}

					else if (x=="*") {
						x = 's';
						ans.push(x);
					}

					else if (x=="-") {
						x = 'l';
						ans.push(x);
					}

					else if (x=="+") {
						x = 'c';
						ans.push(x);
					}

					else if (x=="~") {
						x = 'b';
						ans.push(x);
					}

					else if (x=="`") {
						x = 'd';
						ans.push(x);
					}

					else if (x=="(") {
						x = 'f';
						ans.push(x);
					}

					else if (x==")") {
						x = 'g';
						ans.push(x);
					}

					else if (x=="|") {
						x = 'h';
						ans.push(x);
					}

					else if (x=="?") {
						x = 'm';
						ans.push(x);
					}

					else if (x==">") {
						x = 'u';
						ans.push(x);
					}
					else {
						ans.push(x);
					}
					// Clear Input Value
					document.getElementById("decrypt").value = "";
				}
				// Convert to string | remove commas | output results
				var output = ans.toString();
				var result = output.replace(/,/g, "");
				document.getElementById("display2").innerHTML = result;

				// OUTPUT RESULT WITH WINBOX LIBRARY
				const decryptOutput = document.querySelector('#decryptOutput')
				const aboutBox = new WinBox({
				    title: 'Decryption Output',
				    // modal: true,
				    width: '350px',
				    height: '200px',
				    top: 65,
				    right: 25,
				    bottom: 50,
				    left: 25,
				    mount: decryptOutput,
				    onfocus: function () {
				      this.setBackground('green')
				    },
				    onblur: function () {
				      this.setBackground('#777')
				    },
				 })
			}
		}, 1000);
	}
