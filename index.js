"use strict";
class Maybe {
    constructor(value) {
        this.value = value;
    }
    static some(value) {
        if (!value) {
            throw Error("Provided value must not be empty");
        }
        return new Maybe(value);
    }
    static none() {
        return new Maybe(null);
    }
    static fromValue(value) {
        return value ? Maybe.some(value) : Maybe.none();
    }
    getOrElse(defaultValue) {
        return this.value === null ? defaultValue : this.value;
    }
    map(f) {
        if (this.value === null) {
            return Maybe.none();
        }
        else {
            return Maybe.fromValue(f(this.value));
        }
    }
}
const spaceOrNewLine = (i) => (i + 1) % 3 === 0 ? '\n' : ' ';
const addSpaceToArray = (a) => a.concat(' ');
// type MaybeMark = Maybe<Mark>;;
const createNewBoard = () => Array(9).fill(' ');
const formatTile = (x, i, arr) => `[${x}]${spaceOrNewLine(i)}`;
//console.log(`${b[0]} ${b[1]} ${b[2]}`);
// prints board 'b' to console
const formatBoard = (b) => b
    .map(formatTile)
    .join('');
const printString = (s) => console.log(s);
// gets user choice (1-9)
// const getUserChoice = () =>
// returns true if index is empty
// const isValidMove = index =>
// returns array of valid moves
// const getValidMoves = () =>
const main = () => {
    printString(formatBoard(createNewBoard()));
};
main();
// interface Array<T> {
// 	fill(value: T): Array<T>;
// }
