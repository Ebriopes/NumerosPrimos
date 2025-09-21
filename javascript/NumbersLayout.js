function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export class NumbersLayout {
  #containerEl
  #hostContainer
  #numberElements
  #timeUdpateMs = 350

  constructor(hostContainer) {
    this.#hostContainer = hostContainer

    this.#containerEl = document.createElement('div')
    this.#containerEl.className = 'numbers-container'

    this.#numberElements = new Map()
  }

  #createNumberElement(num) {
    const numContainer = document.createElement('div')

    numContainer.className = 'num-container'
    numContainer.innerHTML = `<span>${num}</span>`

    return numContainer
  }

  #generateNumbersElements(numbers) {
    numbers.forEach((num) => {
      if (!this.#numberElements.has(num)) {
        const numberElement = this.#createNumberElement(num)

        this.#numberElements.set(num, numberElement)
      }
    })
  }

  async #manageChildren(numbers, add = true) {
    if (add) {
      for (const num of numbers) {
        const numContainer = this.#numberElements.get(num)

        if (!this.#containerEl.contains(numContainer)) {
          if (num !== 2) await timeout(this.#timeUdpateMs)

          this.#containerEl.append(numContainer) // Esto es crucial para que el navegador "piense" y pinte el estado inicial.

          //Fuerza un 'reflow' leyendo una propiedad del layout.
          numContainer.offsetHeight

          numContainer.classList.add('show')
        }
      }
    } else {
      const test = Array.from(this.#numberElements.values())

      const elementsToRemove = test.slice(numbers.length).reverse()

      for (const numContainer of elementsToRemove) {
        if (this.#containerEl.contains(numContainer)) {
          numContainer.classList.remove('show')
          //Fuerza un 'reflow' leyendo una propiedad del layout.
          numContainer.offsetHeight

          await timeout(this.#timeUdpateMs)

          this.#containerEl.removeChild(numContainer)
        }
      }
    }
  }

  drawNumbers(numbers = []) {
    if (numbers.length === 0) return

    if (this.#numberElements.size === 0) {
      this.#hostContainer.classList.add('show')
      this.#hostContainer.append(this.#containerEl)
    }

    this.#generateNumbersElements(numbers)

    this.#manageChildren(
      numbers,
      numbers.length > this.#containerEl.childElementCount
    )
  }
}
