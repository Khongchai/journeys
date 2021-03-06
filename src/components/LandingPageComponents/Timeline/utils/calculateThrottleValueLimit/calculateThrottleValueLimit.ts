import {
  cancelDragDirectionAndThrottleNumber,
  setCurrentDragDirection,
} from "../handleTimelineMove"

let beginVal: number
let smoothness: number

//Only positive even numbers, eg. 4, 7.8, 10
//Closer to 0 = slower and smoother rate of change
const SLOPE: number = 1.52

const HORIZONTAL_SHIFT: number = 1

export default function calculateThrottleValueLimit(x: number): number {
  checkDragDirection(x)
  x = Math.abs(x)
  //View formula in ./formula.png
  beginVal = beginVal ? beginVal : x
  smoothness = beginVal / 2

  let moveby =
    -(
      Math.pow(x - beginVal, SLOPE) /
      (Math.pow(x - beginVal, SLOPE) + smoothness)
    ) + HORIZONTAL_SHIFT

  if (!moveby || Number.isNaN(moveby)) {
    moveby = userDragsBackIn()
  }
  return moveby
}

export function clearBeginVal() {
  //clears everytime mouse or touch is up
  beginVal = null
}

function checkDragDirection(x: number) {
  if (x > 0) {
    setCurrentDragDirection("right")
  } else {
    setCurrentDragDirection("left")
  }
}

function userDragsBackIn() {
  cancelDragDirectionAndThrottleNumber()
  return 1
}
