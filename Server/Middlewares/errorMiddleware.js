export const errorMiddleware = (err, req, res, next) => {
    console.log("[ERROR]", err.message);
    return res.status(err.status || 500).send({
       success : false, 
       msg : err.message || "Internal Server Error"
    })
}