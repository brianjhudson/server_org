const massive = require('massive')

const connectionString = "postgres://username:password@localhost/database_name"

const connection = massive.connectSync({connectionString: connectionString})

module.exports = connection