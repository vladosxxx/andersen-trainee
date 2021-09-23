class Car {
  #brand
  #model
  #yearOfManufacturing
  #maxSpeed
  #maxFuelVolume
  #fuelConsumtion
  #currentFuelVolume = 0
  #isStarted = false
  #mileage = 0
  get brand() {
    return this.#brand
  }
  set brand(brand) {
    if (typeof brand !== 'string' || brand.length < 1 || brand.length > 50)
      throw new Error('Error')
    this.#brand = brand
  }
  get model() {
    return this.#model
  }
  set model(model) {
    if (typeof model !== 'string' || model.length < 1 || model.length > 50)
      throw new Error('Error')
    this.#model = model
  }
  get yearOfManufactoring() {
    return this.#yearOfManufacturing
  }
  set yearOfManufactoring(year) {
    if (
      typeof year !== 'number' ||
      year < 1900 ||
      year > new Date().getFullYear()
    )
      throw new Error('Error')
    this.#yearOfManufacturing = year
  }
  get maxSpeed() {
    return this.#maxSpeed
  }
  set maxSpeed(speed) {
    if (typeof speed !== 'number' || speed < 100 || speed > 300)
      throw new Error('Error')
    this.#maxSpeed = speed
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume
  }
  set maxFuelVolume(maxFuel) {
    if (typeof maxFuel !== 'number' || maxFuel < 5 || maxFuel > 20)
      throw new Error('Error')
    this.#maxFuelVolume = maxFuel
  }
  get fuelConsumption() {
    return this.#fuelConsumtion
  }
  set fuelConsumption(fuel) {
    if (typeof fuel !== 'number') throw new Error('Error')
    this.#fuelConsumtion = fuel
  }
  get currentFuelVolume() {
    return this.#currentFuelVolume
  }
  get isStarted() {
    return this.#isStarted
  }
  get mileage() {
    return this.#mileage
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена')
    } else {
      this.#isStarted = true
    }
  }
  shutDownEngine() {
    if (this.#isStarted) {
      this.#isStarted = false
    } else {
      throw new Error('Машина ещё не заведена')
    }
  }
  fillUpGasTank(gas) {
    if (typeof gas !== 'number' || gas <= 0)
      throw new Error('Неверное количество топлива для заправки')
    if (
      gas > 20 ||
      gas > this.#maxFuelVolume ||
      gas + this.#currentFuelVolume > this.#maxFuelVolume
    )
      throw new Error('Топливный бак переполнен')
    this.#currentFuelVolume += gas
  }
  drive(speed, hours) {
    if (typeof speed !== 'number' || speed < 0)
      throw new Error('Неверная скорость')
    if (typeof hours !== 'number' || hours < 0)
      throw new Error('Неверное количество часов')
    if (speed > 300) throw new Error('Машина не может ехать так быстро')
    if (!this.#isStarted)
      throw new Error('Машина должна быть заведена, чтобы ехать')

    let way = speed * hours
    let driveFuel = (way * this.#fuelConsumtion) / 100

    if (this.#fuelConsumtion < driveFuel)
      throw new Error('Недостаточно топлива')

    this.#currentFuelVolume -= driveFuel
    this.#mileage += way
  }
}

module.exports = { Car }
