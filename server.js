const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// CHANGE THIS to the actual website/image your friend expects to see
const DESTINATION_URL = 'https://youtu.be/NmJHw4Z_BAs?si=_m1lRoFC-l9cC-ma';

// You can change 'view-content' to whatever custom text path you want!
app.get('/view-content', (req, res) => {
    // Captures the IP address behind proxy layers used by cloud hosts
    const visitorIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    // Prints the IP to your Render web dashboard logs
    console.log(`[TRACKING LOG] Link clicked! IP: ${visitorIp} at ${new Date().toISOString()}`);
    
    // Instantly sends them to the real content
    res.redirect(DESTINATION_URL);
});

// Fallback route if they hit the main page
app.get('/', (req, res) => {
    res.redirect(DESTINATION_URL);
});

app.listen(PORT, () => console.log(`Redirect server online on port ${PORT}`));
