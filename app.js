import express from 'express'; // Importa il modulo Express
import postsRouter from './routers/postsRouter.js'; // Importa il router per la gestione dei post

const app = express(); // Crea un'istanza dell'applicazione Express
const port = 3000; // Definisce la porta su cui il server ascolterà

// Configura Express per servire file statici dalla cartella 'public'
app.use(express.static('public'));


app.use(express.json());

// Definisce la rotta principale della homepage
app.get('/', (req, res) => {
    res.send('Server del mio blog'); // Risponde con un semplice messaggio di testo
});

// Usa il router dei post per gestire le richieste relative ai post
app.use("/api/posts", postsRouter);

// Avvia il server e lo fa ascoltare sulla porta specificata
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Messaggio di conferma
});