/**
 * Modulo che esporta un array di post di esempio.
 *
 * Ogni post è rappresentato da un oggetto contenente le seguenti proprietà:
 * - id {number}: Identificativo numerico univoco del post.
 * - title {string}: Titolo del post.
 * - content {string}: Descrizione o contenuto principale del post.
 * - image {string}: Percorso (o URL) dell'immagine associata al post.
 * - tags {Array<string>}: Lista di tag o categorie relative al post.
 */
const posts = [
    {
        id:1,
        title: "Cracker alla barbabietola",
        content: `I cracker alla barbabietola sono uno snack stuzzicante e originale...`,
        image: "/img/cracker_barbabietola.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
        id:2,
        title: "Ciambellone soffice",
        content: `Il ciambellone soffice è un dolce classico della tradizione...`,
        image: "/img/ciambellone.jpeg",
        tags: ["Dolci", "Colazione", "Ricette tradizionali"]
    },
    {
        id:3,
        title: "Pane fritto dolce",
        content: `Il pane fritto dolce è una ricetta semplice e golosa...`,
        image: "/img/pane_fritto_dolce.jpeg",
        tags: ["Dolci", "Merenda", "Ricette tradizionali"]
    },
    {
        id:4,
        title: "Pasta alla barbabietola",
        content: `La pasta alla barbabietola è un primo piatto colorato e dal sapore delicato...`,
        image: "/img/pasta_barbabietola.jpeg",
        tags: ["Primi piatti", "Ricette vegetariane", "Colorate e creative"]
    },
    {
        id:5,
        title: "Torta paesana",
        content: `La torta paesana è un dolce della tradizione lombarda...`,
        image: "/img/torta_paesana.jpeg",
        tags: ["Dolci", "Ricette tradizionali", "Riciclo in cucina"]
    }
];

// Esporta l'array dei post per essere utilizzato in altre parti dell'applicazione.
export default posts 
