const express = require("express");

const app = express();
const PORT = 3333;

//ROUTER PARAMS = http://localhost:3333/services/:id/:users
// app.get("/services/:id/:users", (request, response) => { 
//     const {id, users} = request.params;

//     response.send(`id message: ${id} My Users ${users}`);
// });

//QUERY PARAMS = http://localhost:3333/services/?page=10&limit=20
app.get("/user", (request, response) => { 
    const {page, limit} = request.query;

    response.send(`Page: ${page} and Limit: ${limit}`);
});

app.listen(PORT, () => 
    console.log(`Server is running on PORT ${PORT}`)
);

