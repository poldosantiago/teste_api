import app from './src/app.js';
import routes from './src/routes/index.js';
import 'dotenv/config';

routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`URL http://localhost:${port}/\nOuvindo na porta ${port}`));

// console.log(process.env.FRUTA);