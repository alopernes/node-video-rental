const winston = require('winston');
// require('winston-mongodb');
//remove async errors and try catch
require('express-async-errors');

module.exports = function () {
    // you can use the top one or this one hehe
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({filename: 'uncaughtExceptions.log'})
    );
    
    // process event LOG UNHANDLED PROMISE REJECTION
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });
    
    winston.add(winston.transports.File, {
        filename: 'logfile.log'
    });
    
    // log mongodb save in a table
    // winston.add(winston.transports.MongoDB, {
    //     db: 'mongodb://localhost/vidly',
    //     // only error messages will be log
    //     // only upto info level will be log
    //     level: 'info'
    // });
}