const { exec } = require('child_process');
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/get-log', (req, res) => {
  // Command For run scrape-graha.sh
  const command = '/home/farhan/graha-script/scrape-graha.sh';  

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).send(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    res.send(`Command output:\n${stdout}`);
  });
});

app.get('/get-error', (req, res) => {
  // Command For run scrape-graha.sh
  const command = '/home/farhan/graha-script/scrape-error-graha.sh';  

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).send(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    res.send(`Command output:\n${stdout}`);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3300, () => {
  console.log('Server listening on port 3300');
});
