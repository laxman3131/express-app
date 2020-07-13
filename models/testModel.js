const knex = require('../config/knex');
const logger = require('../utils/logger');

class TestModel {
    constructor(){
        this.knex = knex;
    }

    async getAll(){
        try{
            logger.debug('Querying..')
            const res = await this.knex({test: 'test'}).select();
            logger.debug('got data from database..')
            return res;
        }catch(err){
            logger.error('Unable to fetch data from DB,' + 'Err:' + err);
            throw err;
        }
    }
}

module.exports = TestModel