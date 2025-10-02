import { NumbersLayout } from '../classes/NumbersLayout.js'
import { PrimeNumbers } from '../classes/PrimeNumbers.js'

const dialog = document.getElementById('modal')
const output = document.getElementById('output')
const button = document.getElementById('btn')
const result = document.getElementById('res')

const messageContainer = document.createElement('span')
const modalContent = document.createElement('div')

messageContainer.className = 'alert-message'
modalContent.className = 'modal-content'

modalContent.append(messageContainer)
output.append(modalContent)

const showModalAlert = (message) => {
  messageContainer.innerText = message

  dialog.showModal()
}

///////////////////////////////////////////////////////////
/// Initialize functions to generate prime numbers ////////
///////////////////////////////////////////////////////////
const layoutManager = new NumbersLayout(result)
let generatePrimeNumbers

if (window.Worker) {
  const primeNumWorker = new Worker(new URL('../workers/Worker.js', import.meta.url), {
    type: 'module',
  })

  primeNumWorker.onmessage = ({ data }) => {
    const { result: nPrimeNumbers, error, message } = data

    if (error) {
      showModalAlert(message)
    }

    button.innerText = 'Run'
    button.removeAttribute('disabled')

    layoutManager.drawNumbers(nPrimeNumbers)
  }

  generatePrimeNumbers = (amount) => {
    button.innerText = 'Calculating...'
    button.setAttribute('disabled', '')

    primeNumWorker.postMessage(amount)
  }
} else {
  const primeNumbers = new PrimeNumbers()

  generatePrimeNumbers = (amount) => {
    button.innerText = 'Calculating...'
    button.setAttribute('disabled', '')

    const { result: nPrimeNumbers, error, message } = primeNumbers.getXNumbers(amount)

    if (error) {
      showModalAlert(message)
    }

    button.innerText = 'Run'
    button.removeAttribute('disabled')

    layoutManager.drawNumbers(nPrimeNumbers)
  }
}

export const drawXNumbers = generatePrimeNumbers
