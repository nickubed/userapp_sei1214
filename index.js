const db = require('./models')

// db.user.create({
//     firstName: 'Weston',
//     lastName: 'Bailey',
//     age: 27,
//     email: 'weston@email.com'
// }).then(createdUser => {
//     console.log(createdUser)
//     process.exit()
// })

// db.user.findOne({
//     where: {firstName: 'Taylor'}
// }).then(foundUser => {
//     console.log(foundUser.dataValues)
//     process.exit()
// })

// db.user.findOrCreate({
//     where: {
//         firstName: 'Blake',
//         lastName: 'DeGraw'
//     },
//     defaults: {age: 28, email: 'blake@email.com'}
// }).then(([user, wasCreated]) => {
//     console.log(`user: ${user} \n wasCreated: ${wasCreated}`)
//     process.exit()
// })

// db.user.findAll().then(users => {
//     console.log(users)
//     process.exit()
// })

// db.user.update({
//     email: 'twenty@seven.com'
// }, {
//     where: {
//         age: 27
//     }
// }).then(rowsChanged => {
//     console.log(rowsChanged)
//     process.exit()
// })

// db.user.destroy({
//     where: {
//         firstName: 'Taylor'
//     }
// }).then(rowsDeleted => {
//     console.log(rowsDeleted)
//     process.exit()
// })

// createModel, getModels, setModel, and addModel

// db.user.findOne({where: {firstName: 'Weston'}})
// .then(user => {
//     console.log("Adding a pet to this user: ", user.firstName)
//     user.createPet({
//         name: 'Porkroll',
//         species: 'Cat'
//     }).then(pet => {
//         console.log(pet)
//         process.exit()
//     })
// })

// db.user.findOne({
//     where: {firstName: 'Nick'}
// }).then(user => {
//     user.getPets().then(pets => {
//         console.log(`${user.firstName}'s pets: `)
//         console.log(pets)
//         process.exit()
//     })
// })

// db.pet.findOrCreate({
//     where: {
//         name: 'Oscar',
//         species: 'Cat'
//     },
//     defaults: {
//         description: 'Old oreo-colored cat, likes food and not much else.'
//     }
// }).then(([pet, wasCreated]) => {
//     db.user.findOne({where: {firstName: 'Nick'}})
//     .then(coolDude => {
//         coolDude.addPet(pet)
//         console.log(`User ${coolDude.firstName} is the owner of ${pet.name}`)
//     })
// })

db.user.findAll({
    include: [db.pet]
}).then(users => {
    users.forEach(user => {
        console.log(`${user.firstName}'s pets: `)
        user.pets.forEach(pet => {
            console.log(pet.name)
        })
    })
    process.exit()
})