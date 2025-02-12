// Importa l'array dei post da un file esterno.
// Questo array funge da "database" per i post.
import arrayPosts from '../data/arrayPosts.js'

/**
 * Funzione: index
 * Descrizione: Gestisce la richiesta per ottenere la lista dei post.
 * Se viene specificato un tag nella query string, filtra i post in base al tag.
 *
 * @param {Object} req - L'oggetto richiesta (request) Express.
 * @param {Object} res - L'oggetto risposta (response) Express.
 */
function index(req, res) {

    // Inizializza la variabile filterPosts con tutti i post disponibili.
    let filterPosts = arrayPosts;

    // Se è presente il parametro "tags" nella query della richiesta,
    // filtra i post per includere solo quelli che contengono il tag specificato.
    if (req.query.tags) {
        filterPosts = arrayPosts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }

    // Invia i post (filtrati o meno) come risposta in formato JSON.
    res.json(filterPosts);
}

/**
 * Funzione: show
 * Descrizione: Gestisce la richiesta per ottenere un singolo post in base al suo ID.
 *
 * @param {Object} req - L'oggetto richiesta (request) Express.
 * @param {Object} res - L'oggetto risposta (response) Express.
 */
function show(req, res) {

    // Converte il parametro 'id' presente nell'URL in un numero intero.
    const id = parseInt(req.params.id);

    // Cerca il post nell'array che corrisponde all'ID specificato.
    const post = arrayPosts.find(post => post.id === id);

    // Se il post non viene trovato, invia una risposta con status 404 (Not Found).
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // Se il post viene trovato, lo invia come risposta in formato JSON.
    res.json(post);
}

/**
 * Funzione: store
 * Descrizione: Gestisce la richiesta per creare un nuovo post.
 * Nota: Attualmente la funzione non implementa la logica di creazione, ma restituisce solo un messaggio.
 *
 * @param {Object} req - L'oggetto richiesta (request) Express.
 * @param {Object} res - L'oggetto risposta (response) Express.
 */
function store(req, res) {
    res.send('Creazione di un nuovo post');
}

/**
 * Funzione: update
 * Descrizione: Gestisce la richiesta per modificare in modo integrale un post esistente.
 * Nota: Attualmente la funzione non implementa la logica di aggiornamento, ma restituisce solo un messaggio.
 *
 * @param {Object} req - L'oggetto richiesta (request) Express.
 * @param {Object} res - L'oggetto risposta (response) Express.
 */
function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

/**
 * Funzione: patch
 * Descrizione: Gestisce la richiesta per modificare parzialmente un post esistente.
 * Nota: Attualmente la funzione non implementa la logica di aggiornamento parziale, ma restituisce solo un messaggio.
 *
 * @param {Object} req - L'oggetto richiesta (request) Express.
 * @param {Object} res - L'oggetto risposta (response) Express.
 */
function patch(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

/**
 * Funzione: destroy
 * Descrizione: Gestisce la richiesta per eliminare un post in base al suo ID.
 *
 * @param {Object} req - L'oggetto richiesta (request) Express.
 * @param {Object} res - L'oggetto risposta (response) Express.
 */
function destroy(req, res) {

    // Converte il parametro 'id' presente nell'URL in un numero intero.
    const id = parseInt(req.params.id);

    // Cerca il post nell'array che corrisponde all'ID specificato.
    const post = arrayPosts.find(post => post.id === id);

    // Se il post non viene trovato, invia una risposta con status 404 (Not Found).
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // Rimuove il post dall'array.
    // Utilizza il metodo splice per eliminare l'elemento in base alla sua posizione nell'array.
    arrayPosts.splice(arrayPosts.indexOf(post), 1);

    // Invia una risposta con status 204 (No Content) per indicare che l'eliminazione è avvenuta con successo.
    res.sendStatus(204);
   
    console.log(arrayPosts)// esegue il console log dell'array di oggetti aggiornato
}

// Esporta le funzioni per essere utilizzate in altri moduli dell'applicazione.
export default { index, show, store, update, patch, destroy };
