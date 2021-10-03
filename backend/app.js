const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const messageRouters = require('./messages');
const PORT = 5000;

app.use(express.json());
app.use('/messages',messageRouters);

app.get('/', (req, res) => {
    res.send({
        message: "Here ..."
    });
})

app.listen(5000, () => {
    console.log(`Servidor en puerto ${PORT}`);
})
