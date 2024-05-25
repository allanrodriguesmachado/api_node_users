const express = require("express");

const app = express();
const PORT = 3333;

app.get("/services/:id/:users", (request, response) => {
    const {id, users} = request.params;

    response.send(`id message: ${id} My Users ${users}`);
});

app.listen(PORT, () => 
    console.log(`Server is running on PORT ${PORT}`)
);

