import RowClass from '../models/row';
import TableClass from '../models/table';

export default class DbService {

    public static async createRow(data: Object){
        RowClass.setRow(data);
    }

    public static async InsertRow(data: {[key: string]: string}){
        TableClass.insertRow(data);
    }

    public static async fetchRow(){
        return RowClass.getRow();
    }

    public static async fetchAllRows(){
        return TableClass.getRows();
    }

    public static async deleteRow(payload: {key: string, value: string}){
        return TableClass.deleteRow(payload);
    }

}