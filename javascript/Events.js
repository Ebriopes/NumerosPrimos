import { drawXNumbers } from "./utils/Utils.js";

const form = document.getElementById('paramsForm')
const input = document.getElementById('amountNums')
const button = document.getElementById('btn')
const dialog = document.getElementById('modal')
const dialogButton = document.querySelector('#modal button')

try {

  /**
   * Define event listener functions
   */
  const updatePrimeNumbers = () => {
    const inputNumber = Number(input.value)

    drawXNumbers(inputNumber)
  }

  const setAmount = (value, increase = true) => {
    const currentValue = Number(input.value)

    const newValue = increase ? currentValue + value : currentValue - value

    if (newValue < 1) return (input.value = 1)

    input.value = newValue
  }

  const wheelController = (event) => {
    if (event.deltaY < 0) {
      setAmount(1)
    } else {
      setAmount(1, false)
    }
  }

  const inputNumController = (event) => {
    const allowedValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete']

    if (!allowedValues.includes(event.key)) {
      event.preventDefault()
    }

    if (event.key === 'Enter') {
      updatePrimeNumbers()
    }

    if (event.key === 'ArrowUp') {
      setAmount(1)
    }
    if (event.key === 'ArrowDown') {
      setAmount(1, false)
    }
  }

  /**
   * Configure event listeners
   */
  form.addEventListener('submit', (event) => {
    event.preventDefault()
  })
  input.addEventListener('keydown', inputNumController)
  input.addEventListener('wheel', wheelController)
  button.addEventListener('click', updatePrimeNumbers)
  dialogButton.addEventListener('click', () => dialog.close())
} catch (error) {
  console.error('🚀 ~ error:', error)
}
