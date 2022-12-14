import express from 'express';
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"

import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'


const app = express();
// app.get('/hello', (req, res) => {res.send('Hello Cristiano Ronaldo!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json())
app.use(cors())
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT ||4000);

