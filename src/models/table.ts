export default class TableClass{
    public static table: [{[key: string]: string}];
    public static index: number = 0; 

    public static insertRow(data: {[key: string]: string}){
        if(!this.table){
            console.error("Table not present");
            this.table = [null];
        }
        console.log("Current table size: "+ this.table.length);
        this.table.push(data);
        console.log("After inserting Row: "+ this.table.length);
    }
    
    public static getRows(): Object[] {
        if(!this.table){
            throw new Error("Table not present");
        }
        console.log(this.table);
        return this.table;
    }
    
    public static deleteRow(payload: {key: string, value: string}): [{}] {
        if(!this.table){
            throw new Error("Table not present");
        }
        // console.log("current table: "+ JSON.stringify(this.table));
        // delete this.table[key];  To delete from an Object

        for(let i=0;i<this.table.length;i++){
            try{
                if(this.table[i][payload.key] == payload.value){
                    delete this.table[i];
                }
            }catch(err){
                console.log(err.message + ": " + payload.key + ": " + payload.value);

            }
        }
        return this.table;
        // console.log("after deleting from table: "+ JSON.stringify(this.table));
    }
}