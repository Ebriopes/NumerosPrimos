import { NumbersLayout } from './NumbersLayout.js'
import { PrimeNumbers } from './PrimeNumbers.js'

const form = document.getElementById('paramsForm')
const input = document.getElementById('amountNums')
const button = document.getElementById('btn')
const result = document.getElementById('res')

try {
  const layoutManager = new NumbersLayout(result)
  const primeNumbers = new PrimeNumbers()

  /**
   * Define functions
   */
  const updatePrimeNumbers = () => {
    const firstNPrimeNumbers = primeNumbers.getXNumbers(Number(input.value))

    layoutManager.drawNumbers(firstNPrimeNumbers)
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
    const allowedValues = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Backspace',
      'Delete',
    ]

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
} catch (error) {
  console.error('🚀 ~ error:', error)
}
