require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 8000;

app.get('/api', async (req,res) => {
  res.send('Hello world')
})

// Set up our router to receive all requests sent to /auth
app.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});