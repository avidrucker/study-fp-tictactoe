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

const main = () => {
	// to-do: clean this up, so, that eventually, it looks more like
	// start() => show() => do()
	// createNewBoard() => formatBoard() => printString();
	// printString(formatBoard(createNewBoard()));
	// printString(formatBoard(placeMark(createNewBoard(), 2, 'X'))); // testing - put down a single mark
	// printString(formatBoard(placeMark(placeMark(createNewBoard(), 2, 'X'), 2, 'O'))); // testing2 - modify stored marks
	printString(formatBoard(createNewBoard()));
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

// necessary game state
// - whose turn it is, could be an integer,
//   could be a boolean flag, could be derived from the board state
// - the board array
// To keep it all together, we can use a tuple, a union type, or an object (map)

// done list:
// build the typescript project
// define board index state space
// import maybe definition
// create the board
// render the board
// start the program
// place marks
// decide whether to make the program coded sync or async: async w/ promises
// establish over-arching control flow (also w/ Maybe)

// to-do list:
// create I/O (take user input, return back response) w/ Maybe

// intentions:
// use as much functional programming as possible while comprehensible
//   (for example, no while loops, no if-else statements)
// as there is opportunity to do so where it makes sense,
//   remove branching, such as take 3 from array and do w/
//   for example monadic functions:
//   takeWhile(array, i=> (i+1) % 3 === 0).then(format).then(addNewLine);
//   partitionBy(array, 3).then(format).then(addNewLine);
// use only pure functions (no side effects)

// ideas:
// - build according to control flow (or happy path of user)
// - build modularly from/to their logical functional conclusion
// - async can be async/await, callbacks, promises, generators (think in streams)