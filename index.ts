// define string union (an instance of a union type,
// indicated by OR operand '|')
// this is commonplace better practice than enums,
// because the transpilation output is cleaner
type Mark = 'X' | 'O' | ' ';

class Maybe<T> {
	private constructor(private value: T | null) {}

	static some<T>(value: T) {
			if (!value) {
					throw Error("Provided value must not be empty");
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

const spaceOrNewLine = (i: number): string =>
	(i + 1) % 3 === 0 ? '\n' : ' ';

const addSpaceToArray = (a: Mark[]): Mark[] =>
	a.concat(' ')

// type MaybeMark = Maybe<Mark>;;
const createNewBoard = (): Mark[] =>
	Array(9).fill(' ');

const formatTile = (x: Mark, i: number, arr: Mark[]): string =>
`[${x}]${spaceOrNewLine(i)}`

//console.log(`${b[0]} ${b[1]} ${b[2]}`);
// prints board 'b' to console
const formatBoard = (b: Mark[]) =>
	b
		.map(formatTile)
		.join('');

const printString = (s: string): void =>
	console.log(s);

// gets user choice (1-9)
// const getUserChoice = () =>

// returns true if index is empty
// const isValidMove = index =>

// returns array of valid moves
// const getValidMoves = () =>

const main = () => {
	printString(formatBoard(createNewBoard()));
}

main();

// interface Array<T> {
// 	fill(value: T): Array<T>;
// }