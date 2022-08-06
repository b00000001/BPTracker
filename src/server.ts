import express from 'express';
import path from 'path';
import router from './controllers/index';
import {engine} from 'express-handlebars';

const PORT = process.env.port || 3000;
const app = express();

app.use('/', router);
app.use(express.static(path.join(__dirname, '../../src/public')));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../../src/views/'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
