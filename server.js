const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  animeRecommended: 644,
  mangaRecommended: 660,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

// Conter uma rota na qual todos os usuários poderão ter acesso a leitura; 664, escrever - logado / ler - todos

// Rota Get / animals - FORMATO DA RESPOSTA - STATUS 200

// Conter uma rota na qual apenas os usuários logados poderão ter acesso a leitura; 660 - escrever/ler - logado
// Criar ao menos uma relação entre duas das rotas existentes;
