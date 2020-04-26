import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'hello luann' })
})

app.listen(3333, () => {
    console.log('running in port 3333')
}) 