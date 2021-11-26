const errorHandler = (err, request, response, next) => {
    console.log("Error !!!");
    console.log("Error Status: ", err.status);
    response.status(err.status);
    response.render('error', { error: err });
}

module.exports = errorHandler;