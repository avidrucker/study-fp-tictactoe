const readline = require('readline');

// define string union (an instance of a union type,
// indicated by OR operand '|')
// this is commonplace better practice than enums,
// because the transpilation output is cleaner
type Mark = 'X' | 'O' | ' ';

class Maybe<T> {
	private constructor(private value: T | null) {}

	static some<T>(value: T) {
		if (!value) {
			throw Error('Provided value must not be empty');
		}
		return new Maybe(value);
	}

	static none<T>() {
		return new Maybe<T>(null);
	}

	static fromValue<T>(value: T) {
		return value ? Maybe.some(value) : Maybe.none<T>();
	}

	getOrElse(defaultValue: T) {
		return this.value === null ? defaultValue : this.value;
	}

	map<R>(f: (wrapped: T) => R): Maybe<R> {
		if (this.value === null) {
			return Maybe.none<R>();
		} else {
			return Maybe.fromValue(f(this.value));
		}
	}
}

// interleaves spaces & newlines to format tic tac toe board
const spaceOrNewLine = (i: number): string => ((i + 1) % 3 === 0 ? '\n' : ' '); // this is a branch example
const addSpaceToArray = (a: Mark[]): Mark[] => a.concat(' ');

// type MaybeMark = Maybe<Mark>;;
const createNewBoard = (): Mark[] => Array(9).fill(' ');
const formatTile = (x: Mark, i: number): string => `[${x}]${spaceOrNewLine(i)}`;

// this is bad: console.log(`${b[0]} ${b[1]} ${b[2]}`);
// flattens board 'b' to string for convenient printing
const formatBoard = (b: Mark[]): string => b.map(formatTile).join('');
const printString = (s: string): void => console.log(s);

// to-do: confirm that this returns the correct mark for
// whomever you decide should go first (X's or O's)
// t == turn number
const markFromTurn = (t: number) => (t % 2 == 0 ? 'X' : 'O');

// i == index on the board where 0 is the upper left corner, 8 is the bottom right
// m == current player's mark
// input is prev board state, and output is new/current board state
// to-do: reassess later that the parameter ordering should change, if you deem it necessary
const placeMark = (b: Mark[], i: number, m: Mark): Mark[] => {
	b[i] = m;
	return b;
};

// gets user choice (1-9)
// const getUserChoice = () =>

// returns true if index is empty
// const isValidMove = index =>

// returns array of valid moves
// const getValidMoves = () =>

type GameTuple = [Mark[], number];

const initGame = (): GameTuple => {
	return [createNewBoard(), 0]
}

// const show = (b: Mark[], t: turn): void => {
// }

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
  
//   rl.question('What do you think of Node.js? ', (answer) => {
// 	// TODO: Log the answer in a database
// 	console.log(`Thank you for your valuable feedback: ${answer}`);
  
// 	rl.close();
//   });

function ask(questionText: string) {
	return new Promise<string>((resolve, reject) => {
		rl.question(questionText, (input: string) => resolve(input) );
	});
};

//start (only happens once) DONE
// gameLoop()
	//render() DONE
	//promptUser()
	//receiveInput()
	//updateGameState() // based on userInput()
	//gameLoop()

type ValidatedAnswer = {
	valid: boolean;
	answer: string;
}

// todo: make type ValidatedAnswer
// returns boolean that the answer is valid
// as well as the answer itself
const validate = (input: string, oks: string[]): ValidatedAnswer => {
	return {
		valid: input in oks,
		answer: input
	};
};

// todo: fix bug where valid input is considered as index of array,
//    rather than by array index content
//    idea: use a function such as indexOf, find(), exists(), etc.
//          to validate presence of valid answer
// todo: fix any return to be a Maybe (`string | null` perhaps?)
const q_and_a = (q: string, oks: string[]): any => {
	return ask(q)
		.then(a => validate(a, oks))
		.then(va => va['valid'] ? va['answer'] : q_and_a(q, oks))
		.catch((err)=>{
			console.log(`Oh no! There was an error: ${err}`)
	});
}

const aOK = ['5','6','7'];

const main = () => {
	// createNewBoard() => formatBoard() => printString();
	// printString(formatBoard(placeMark(createNewBoard(), 2, 'X'))); // testing - put down a single mark
	// printString(formatBoard(placeMark(placeMark(createNewBoard(), 2, 'X'), 2, 'O'))); // testing2 - modify stored marks
	// printString(formatBoard(createNewBoard()));
	q_and_a(`Where to place your mark? ${aOK}:`, aOK);
};

// The [program menu] game flow is simply a recursive function (instead of a loop)
// that ends on the base case where the game is evaluated "game over"
// [& the player(s) choose to not play]
// Game Flow: START state change/mutation ->
// 		SHOW presentation update ->
//			render board
//			PROMPT: ask user for user input
//		RECEIVE user input ->
//		DO user action (process user input) 

main();

// interface Array<T> {
// 	fill(value: T): Array<T>;
// }