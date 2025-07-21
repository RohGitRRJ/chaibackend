import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Butcher Server is ready!')
})

app.get('/api/jokes', (req, res) => {  
    const jokes = [
        {
            id: 1, 
            title: 'Joke 1',
            content: 'This is joke 1'
        },
        {
            id: 2,
            title: 'Joke 2',
            content: 'This is joke 2'
        },
        {
            id: 3,
            title: 'Joke 3',
            content: 'This is joke 3'
        }];
    res.send(jokes)//.json to send json dataa
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})