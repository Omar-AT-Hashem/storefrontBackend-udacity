import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import routes from './handlers/index';

const app = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('main page');
});

app.listen(PORT, (): void => {
  console.log(`Running on port ${PORT}`);
});

export default app;
