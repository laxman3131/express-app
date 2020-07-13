const express = require('express');
const router = express.Router();

const foo = require('./foo');
const test = require('./test');

router.get('/', async (req, res, next) => {
    res.send("Express App");
})

router.get('/error', async (req, res, next) => {
    try{
        await new Promise((res, rej) => {
            setTimeout(() => {
                rej("err")
            }, 1000);
        });
    } catch(err){
        next({err});
    }
});

router.use('/foo', foo);
router.use('/test', test);

module.exports = router;