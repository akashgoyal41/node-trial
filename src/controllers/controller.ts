import DbService from "../services/dbService";

async function firstController(req:any,res:any): Promise<any> {
    console.log("Inside Controller...");
    
    res.status(200).send("Success!");
}

async function rowCreateController(req:any,res:any): Promise<any> {
    console.log("rowCreateController....",JSON.stringify(req.body));
    await DbService.createRow(req.body);
    
    res.status(200).send("Success!");
}

async function rowFetchController(req:any,res:any): Promise<any> {
    console.log("rowFetchController....");
    const row = await DbService.fetchRow();

    res.status(200).send(row);
}

async function rowInsertController(req:any,res:any): Promise<any> {
    console.log("rowInsertController....",JSON.stringify(req.body));
    await DbService.InsertRow(req.body);
    
    res.status(200).send("Success!");
}

async function fetchAllRowsController(req:any,res:any): Promise<any> {
    console.log("fetchAllRowsController....");
    try{
        const rows = await DbService.fetchAllRows();
        res.status(200).send(rows);
    }catch(err){
        res.status(400).send(err.message);
    }

}

async function deleteRowController(req:any,res:any): Promise<any> {
    console.log("deleteRowController....");
    try{
        const rows = await DbService.deleteRow(req.body);
        res.status(200).send(rows);
    }catch(err){
        res.status(400).send(err.message);
    }

}

export {firstController, rowCreateController, rowFetchController, rowInsertController, fetchAllRowsController, deleteRowController}