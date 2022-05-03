const Cep = require('../models/cepModels');

const CEP_REGEX = /\d{5}-?\d{3}/;

const getCepAdress = async (cep) => {
    if(!CEP_REGEX.test(cep)){
        return {
            error: {
                code: 'invalidData',
                message: 'CEP inválido',
            }
        }
    };

    const CEP = await Cep.getCepAdress(cep);

    if(!CEP) {
        return {
            error: {
                code: 'notFound',
                message: 'CEP não enctonrado'
            }
        }
    };

    return CEP;
};

const creatCep = async({ cep, logradouro, bairro, localidade, uf}) => {
    return Cep.creatCep({ cep, logradouro, bairro, localidade, uf })
}
module.exports = {
    getCepAdress,
    creatCep,
}