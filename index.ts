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

// gets user choice (1-9)
// const getUserChoice = () =>

// returns true if index is empty
// const isValidMove = index =>

// returns array of valid moves
// const getValidMoves = () =>

const main = () => {
  // to-do: clean this up, so, that eventually, it looks more like
  // start() => show() => do()
  // createNewBoard() => formatBoard() => printString();
  printString(formatBoard(createNewBoard()));
};

main();

// interface Array<T> {
// 	fill(value: T): Array<T>;
// }

// done list:
// build the typescript project
// define board index state space
// import maybe definition
// create the board
// render the board
// start the program

// to-do list:
// place marks
// create I/O (take user input, return back response) w/ Maybe
// establish control flow (also w/ Maybe)

// intentions:
// use as much functional programming as possible while comprehensible
//   (for example, no while loops, no if-else statements)
// as there is opportunity to do so where it makes sense,
//   remove branching, such as take 3 from array and do w/
//   for example monadic functions:
//   takeWhile(array, i=> (i+1) % 3 === 0).then(format).then(addNewLine);
//   partitionBy(array, 3).then(format).then(addNewLine);
// use only pure functions (no side effects)
