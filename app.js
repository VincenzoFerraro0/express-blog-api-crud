import express from 'express';

import postsRouter from './routers/posts.js'
const app = express();
const port = 3000;

app.use(express.static('public'));

// Definisce la rotta principale della homepage
app.get('/', (req, res) => {
    res.send('Server del mio blog'); // Messaggio di risposta
});


app.use("/posts", postsRouter )

app.listen(port,() => {
	console.log(`server is running on http://localhost:${port}`)
});

