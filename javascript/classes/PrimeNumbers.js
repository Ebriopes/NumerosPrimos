export class PrimeNumbers {
  #currentLimit = 1
  #currentNumTry = 3
  #findPrimeNumbers
  #primeNumbersFound = [2]

  constructor() {
    // Generator function to generate the prime numbers
    this.#findPrimeNumbers = this.#findNextPrimeNumber()
  }

  *#findNextPrimeNumber() {
    let isPrime

    performance.mark('start-calculate')

    do {
      isPrime = this.#primeNumbersFound.every((num) => this.#currentNumTry % num !== 0)

      if (isPrime) {
        this.#primeNumbersFound.push(this.#currentNumTry)

        // performance.measure(
        //   'time-amount-finding-the-number',
        //   'start-calculate'
        // )

        yield this.#currentNumTry
        isPrime = false

        // performance.mark('start-calculate')
      }

      this.#currentNumTry += 2
    } while (true)
  }

  getXNumbers(amount) {
    if (amount > this.#currentLimit) {
      const earlyCalculated = this.#primeNumbersFound.length
      this.#currentLimit = amount

      performance.mark('start-process')

      while (this.#primeNumbersFound.length < this.#currentLimit) {
        this.#findPrimeNumbers.next().value

        const timeAmountProcess = performance.measure('time-amount-processing', 'start-process').duration

        if (timeAmountProcess > 10000) {
          const numbersCalculated = this.#primeNumbersFound.length - earlyCalculated
          const message = `The process to generate ${amount} numbers is taking so much time\n
          Were calculate ${numbersCalculated} numbers
          Total numbers calculated: ${this.#primeNumbersFound.length}
          `

          this.#currentLimit = this.#primeNumbersFound.length

          console.error('Took too much time processing\n', message)

          return { result: this.#primeNumbersFound, error: true, message }
        }
      }
    }

    return { result: this.#primeNumbersFound.slice(0, amount) }
  }
}
