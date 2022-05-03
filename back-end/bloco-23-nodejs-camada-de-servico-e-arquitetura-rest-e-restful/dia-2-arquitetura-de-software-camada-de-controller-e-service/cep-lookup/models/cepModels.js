const connection = require('./connection');

const cepRegex = /\d{5}-\d{3}/

const cepValidation = (cep) => {
    if(cepRegex.test(cep)) return cep;

    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

const getCep = ({cep, logradouro, bairro, localidade, uf}) => ({
    cep: cepValidation(cep),
    logradouro,
    bairro,
    localidade,
    uf,
})

const getCepAdress = async (cep) => {
    const treatedCep = cep.replace('-', '');
    const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';

    const result = await connection.execute(query, [treatedCep]).then(([results]) => (results.length ? results[0] : null));

    if (!result) return null

    return getCep(result)
};

const creatCep = async ({ cep, logradouro, bairro, localidade, uf}) => {
    const QUERY = `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)`

    await connection.execute(QUERY, [cep, logradouro,bairro, localidade, uf]);

    return {cep, logradouro, bairro, localidade, uf};
}

module.exports = {
    getCepAdress,
    creatCep,
}