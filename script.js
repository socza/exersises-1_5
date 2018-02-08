// ------------------- ZADANIE 1 -------------------

const x = 'Hello';
const y = 'Word';

console.log(`${x} ${y}`); 

// ------------------- ZADANIE 2 -------------------

	// Pierwsza z możliwość zapisu w arrow function.
	
	function multiply(a, b = '1') { // tu ma być backtick ? średnik pojedynczy ? - czy w ogóle bez nich ???

		return a * b;
	
	}

	console.log(multiply(7));

	// Druga z możliwości zapisu wraz z arrow function.
	
	function multiplySecond(a, b = `1`) { 

		console.log(a * b);
	
	}

	multiplySecond(3);

	// Trzecia z możliwości zapisu w arrow function,
	// jeszcze bardziej zwięźle :).
	// Moim zdaniem chyba najlepszy zapis z możliwych.

	const myMultiply = (a, b = 1) => console.log(a * b);
	myMultiply(9);

// ------------------- ZADANIE 3 -------------------

	const average = (...args) => {
  		
  		let sum = 0; 
		args.forEach(arg => sum += arg); 

  		const result = sum/args.length;
  		console.log(`Średnia to ${result}`);
	
	}

	average(1, 3, 6, 6);

// ------------------- ZADANIE 4 -------------------
	
	const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
	average(...grades);

// ------------------- ZADANIE 5 -------------------

	const diffData = [1, 4, 'Iwona', false, 'Nowak'];
	const [ , ,firstName, ,lastName] = diffData;
	console.log(`Hello, my name is ${firstName} ${lastName}`);