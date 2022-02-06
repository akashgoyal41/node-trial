import { firstController, rowCreateController, rowFetchController, rowInsertController, fetchAllRowsController, deleteRowController } from './controllers/controller';
import * as bodyParser from "body-parser";

import express from "express";
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

app.get('/', function(req, res) {res.send("hi")});

app.get('/sample', firstController);
app.post('/createRow', rowCreateController);
app.get('/fetchRow', rowFetchController);
app.post('/insertRow', rowInsertController);
app.get('/fetchAllRows', fetchAllRowsController);
app.post('/deleteRow', deleteRowController);

app.listen(8000, () => { console.log("Server listening..") });