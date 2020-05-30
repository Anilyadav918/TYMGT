const express = require('express');
const employees = require('./routes/employees');
const surveys = require('./routes/surveys');

const app = express();

app.use(express.json({extended: false}));


app.use('/employees', employees);
app.use('/surveys', surveys);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} `);
});