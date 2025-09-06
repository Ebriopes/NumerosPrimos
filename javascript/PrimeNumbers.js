class PrimeNumbers {
    currentNumTry = 3
    primeNumsFound = [2]

    #containerEl
    #hostContainer
    #limit = 1
    #numberElements = []

    constructor(hostContainer) {
        this.#hostContainer = hostContainer
        this.#containerEl = document.createElement('div')

        this.#containerEl.className = 'numbers-container'
    }

    set limit(num) {
        this.#limit = num
    }

    *#findNextPrimeNumber() {
        let isPrime

        do {
            isPrime = this.primeNumsFound.every(
                (num) => this.currentNumTry % num !== 0
            )

            if (isPrime) {
                this.primeNumsFound.push(this.currentNumTry)

                yield this.currentNumTry
                isPrime = false
            }

            this.currentNumTry += 2
        } while (true)
    }

    #createNumberElement(num) {
        const numContainer = document.createElement('div')

        numContainer.className = 'num-container'
        numContainer.innerHTML = `<span>${num}</span>`

        return numContainer
    }

    showNumbers() {
        if (this.#numberElements.length === 0) {
            this.#hostContainer.className = 'show'
            this.#hostContainer.append(this.#containerEl)
            this.#numberElements.push(this.#createNumberElement(this.primeNumsFound[0]))
        }

        const findPrimeNumbers = this.#findNextPrimeNumber()

        while (this.primeNumsFound.length <= this.#limit) {
            const primeNum = findPrimeNumbers.next().value
            const numEl = this.#createNumberElement(primeNum)
            
            this.#numberElements.push(numEl);
            this.#containerEl.append(numEl)

            setTimeout(() => numEl.className = 'num-container show', 0)
        }
    }
}
