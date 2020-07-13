const testModel = require('../models/testModel');
const logger = require('../utils/logger');

class TestController{

    static async get(req, res){
        try{
            logger.info("Init Request handler.");
            const testM = new testModel();
            logger.debug('Fetching data from Model');
            const data = await testM.getAll();
            logger.debug('Got data from Model');
            res.send({msg: "GET", data });
            logger.info("Response sent.");
        } catch(err){
            logger.error('Request handler failed,' + 'Err:' + err );
            next(err);
        }
    }

    static post(req, res){
        res.send({ msg: "POST", data: "success" })
    }
}

module.exports = TestController;