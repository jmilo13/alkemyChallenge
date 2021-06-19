import allData from './data'

class Database {
  constructor() {}

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const asArray = Object.values(allData)
        await randomDelay()
        resolve(asArray)
      } catch (error) {
        reject(error)
      }
    })
  }

  getById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const members = Object.values(allData).find(
          (member) => member.id === id
        )
        await randomDelay()
        resolve(members)
      } catch (error) {
        reject(error)
      }
    })
  }
postById(id) {
  return console.log(id)
}
}

const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })

export default Database