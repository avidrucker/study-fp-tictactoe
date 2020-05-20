## necessary game state
- whose turn it is, could be an integer,
  could be a boolean flag, could be derived from the board state
- the board array
Note: To keep it all together, we can use a tuple, a union type, or an object (map)

## done list:
- build the typescript project
- define board index state space
- import maybe definition
- create the board
- render the board
- start the program
- place marks
- decide whether to make the program coded sync or async: async w/ promises
- establish over-arching control flow (also w/ Maybe)

## in-progress list:
- [ ] set up I/O
	- [ ] take user input
		- [ ] inform user when their input is bad
		- [ ] re-ask user when their input is bad
		- [ ] return validated (correct input)
	- [ ]  return back response w/ Maybe (dup?)

## to-do list:
- update board with validated (correct) user input
- update turn after Player (1) has put down their mark
- inform Players whose turn it is at the beginning of each turn
- update q_and_a prompt to direct specific Player (1 or 2) whose turn it is to make their move

## intentions:
- use as much functional programming as possible while comprehensible
  (for example, no while loops, no if-else statements)
- as there is opportunity to do so where it makes sense,
  remove branching, such as take 3 from array and do w/
  for example monadic functions:
  takeWhile(array, i=> (i+1) % 3 === 0).then(format).then(addNewLine);
  partitionBy(array, 3).then(format).then(addNewLine);
- use only pure functions (no side effects)

## ideas:
- build according to control flow (or happy path of user)
- build modularly from/to their logical functional conclusion
- async can be async/await, callbacks, promises, generators (think in streams)