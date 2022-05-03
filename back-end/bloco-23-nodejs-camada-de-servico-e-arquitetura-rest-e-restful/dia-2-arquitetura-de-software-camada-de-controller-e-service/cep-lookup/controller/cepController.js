const cepService = require('../services/cepService');

const getCepAdress = async (req, res, next) => {
    const { cep } = req.params;

    
    try {
        const address = await cepService.getCepAdress(cep);
        return res.status(200).json(address);
    } catch (error) {
        return next(error.message)
    };
    
};
const creatCep = async (req, res, next) => {
    const CEP  = await cepService.creatCep(req.body)

    res.status(201).json(CEP)
}
module.exports = {
    getCepAdress,
    creatCep,
}