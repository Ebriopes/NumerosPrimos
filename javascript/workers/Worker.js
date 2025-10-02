import { PrimeNumbers } from "../classes/PrimeNumbers.js";

const primeNumbers = new PrimeNumbers()

self.onmessage = ({data: amount}) => {
  const firstNPrimeNumbers = primeNumbers.getXNumbers(amount)

  postMessage(firstNPrimeNumbers)
  }
