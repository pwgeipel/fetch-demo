const nodeFetch = require('node-fetch')
const connection = require('../config/connection')
const{ User, Dog} = require('../models')

connection.once('open', async () => {
    await User.deleteMany()
    await Dog.deleteMany()

    for (const id of [0, 1, 2]) {
        const response = await nodeFetch(`https://frontend-take-home-service.fetch.com/${id}`)
        const dog = await response.json()
        console.log(dog)
    }


    console.log('woof woof')
    process.exit(0)
})