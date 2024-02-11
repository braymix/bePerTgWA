const http = require('http');
const { exec } = require('child_process');

// Creazione del server
const server = http.createServer((req, res) => {
  // Codice del server...
  res.end('Hello World!');
});

// Avvio del server sulla porta 3000 (o la porta che preferisci)
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);

  // Esecuzione dello script dopo l'avvio del server
  const scriptPath = 'bot.js';  // Sostituisci con il percorso del tuo script
  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Errore durante l'esecuzione dello script: ${error}`);
      return;
    }
   // console.log(`Output dello script: ${stdout}`);
   // console.error(`Errori dello script: ${stderr}`);
  });
});
