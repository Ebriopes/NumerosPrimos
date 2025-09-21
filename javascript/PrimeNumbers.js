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

    do {
      isPrime = this.#primeNumbersFound.every(
        (num) => this.#currentNumTry % num !== 0
      )

      if (isPrime) {
        this.#primeNumbersFound.push(this.#currentNumTry)

        yield this.#currentNumTry
        isPrime = false
      }

      this.#currentNumTry += 2
    } while (true)
  }

  getXNumbers(amount) {
    if (amount > this.#currentLimit) {
      this.#currentLimit = amount

      while (this.#primeNumbersFound.length < this.#currentLimit) {
        this.#findPrimeNumbers.next().value
      }
    }

    return this.#primeNumbersFound.slice(0, amount)
  }
}
