// Remove try catch block ( other approach if express-async-errors not working )
module.exports = function (handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res);
        } catch (ex) {
            next(ex);
        } 
    }
}