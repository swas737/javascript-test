## Problem 🖥

We have created a base EventSourcer class that holds an initial value of 0, alongside function signatures as a base, it will be your job to implement the functions. Feel free to add other functions, however do not change the function signatures or the constructor as it will fail the tests.

If you are looking for more details on how the undo/redo functionality should work, The implementation we are looking for is the first simple solution mentioned!

**You will have 1 hour to submit your Work**

### Method Signatures
To complete the challenge, implement the following functions:

```
add(num: integer)
  - add num to the value

subtract(num: integer)
  - subtract num from the value

undo()
  - revert last event

redo()
  - redo next event

bulk_undo(amount: integer)
  - undo the given amount of events

bulk_redo(amount: integer)
  - redo the given amount of events
```

### Example

```
initial_value = 0

add(20)
value: 20

add(30)
value: 50

subtract(10)
value: 40

undo()
value: 50

redo()
value: 40

redo()
value: 40 (Nothing to redo)

bulk_undo(2) (The last two actions were subtract(10) and add(30))
value: 20

bulk_redo(2)
value: 40

```

### JavaScript
#### Writing your solution
1. Open the `javascript_solution.js` file.
2. Implement the `add` `subtract` `undo` `redo` `bulk_undo` and `bulk_redo` functions

#### Testing your solution
1. Use the following command to install `jest` testing framework
```
npm install
```
2. Use the following command to run the tests
```
npm test
```

## Submitting your attempt
1. Fork the repository
2. Make your changes on the master branch in your fork.
3. Create a Pull Request. Make sure the base is set to `ashishtechuz/javascript-test`
4. Keep committing! We will take into consideration all commits made before the time cutoff!

## Rules ⚠
* You **may not** use any existing libraries, or copy existing code.
* You should fork this project, and submit your entry by submitting a pull request to `master`.
* Your latest commit must be on GitHub no later than the time specified by the engineer running the challenge.

## Problems/Issues?
If you run into any issues during the challenge, You can contact the examiner directly. 
