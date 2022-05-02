const connection = require('./connection');
const serialize = (userData) => {
    return { 
        id: userData.id,
        firstName: userData.first_name,
        lastName: userData.last_name,
        email: userData.email,
        password: userData.password,
    }
}
const getAll = async () => {
    const [ user ] = await connection.execute('SELECT id, first_name, last_name, email, password FROM model_exercise.users')

    return user.map(serialize);
}
const creatUser = async (firstName, lastName, email, password) =>  connection.execute('INSERT INTO model_exercise.users (first_name, last_name, email, password) VALUES (?,?,?,?)', [ firstName, lastName, email, password]);

module.exports = {
    getAll,
    creatUser,
}