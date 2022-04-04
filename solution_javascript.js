let event_history = [0]
class EventSourcer {
  constructor() {
    this.value = 0
    this.position = 0
  }

  currentValue() {
    // if redo length exceed then
    console.log(event_history.length)
    if (this.position > event_history.length) {
      this.position = event_history.length - 1
    }
    return event_history[this.position]
  }

  setValue(value) {
    if (this.position < event_history.length - 1) {
      event_history = event_history.slice(0, this.position + 1)
    }
    event_history.push(value)
    this.position += 1
  }

  add(num) {
    this.setValue(this.currentValue() + num)
    this.value = this.currentValue()
    console.log(
      'add >> ',
      this.currentValue() +
        ' | position >> ' +
        this.position +
        ' | event_history >> ',
      event_history
    )
  }

  subtract(num) {
    this.setValue(this.currentValue() - num)
    this.value = this.currentValue()
    console.log(
      'sub >> ',
      this.currentValue() +
        ' | position >> ' +
        this.position +
        ' | event_history >> ',
      event_history
    )
  }

  undo() {
    if (this.position > 0) {
      this.position -= 1
      this.value = this.currentValue()
    }
    console.log(
      'undo >> ',
      this.currentValue() +
        ' | position >> ' +
        this.position +
        ' | event_history >> ',
      event_history
    )
  }

  redo() {
    //if length is 1 and we are doing redo then forcefully position zero.
    if (event_history.length == 1) {
      this.position = 0
      this.value = this.currentValue()
    } else if (this.position < event_history.length - 1) {
      this.position += 1
      this.value = this.currentValue()
    }
    console.log(
      'redo >> ',
      this.currentValue() +
        ' | position >> ' +
        this.position +
        ' | event_history >> ',
      event_history
    )
  }

  bulk_undo(num) {
    if (this.position > 0) {
      this.position -= num
    }
    this.value = this.currentValue()
    console.log(
      'bulk undo >> ',
      this.currentValue() +
        ' | position >> ' +
        this.position +
        ' | event_history >> ',
      event_history
    )
  }

  bulk_redo(num) {
    if (this.position < event_history.length - 1) {
      this.position += num
    }
    this.value = this.currentValue()
    console.log(
      'bulk redo >> ',
      this.currentValue() +
        ' | position >> ' +
        this.position +
        ' | event_history >> ',
      event_history
    )
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------

// -- Dev test cases --
var sourcer = new EventSourcer()

sourcer.redo()

console.log('final event_History >> ', event_history)
console.log('final current value >> ', sourcer.currentValue())

module.exports = EventSourcer
