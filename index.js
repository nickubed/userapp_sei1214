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