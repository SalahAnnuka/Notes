const cors = require('cors');
const fs = require('fs');
const express = require('express');
var app = express();



// Enable CORS with specific options
app.use(cors());


app.get('/Notes', function(req, res) {
    // Read the JSON file
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Error reading file' });
            return;
        }
        
        // Parse the JSON data
        try {
            const notesData = JSON.parse(data);
            // Return the notes data as JSON
            res.json(notesData);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
});

var server = app.listen(7777,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening on port', port);
});
