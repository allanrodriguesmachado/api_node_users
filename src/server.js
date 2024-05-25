require("express-async-errors");

const express = require("express");
const routes = require("./routes");
const AppError = require("./utils/AppError")

const app = express();
app.use(express.json());

app.use(routes)

const PORT = 3333;

app.use((error, request, express, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(PORT, () => {});
