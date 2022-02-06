export default class RowClass{
    public static row : Object;

    public static setRow(data: Object){
        RowClass.row = data;
    }

    public static getRow(): string {
        console.log(JSON.stringify(RowClass.row));
        return JSON.stringify(RowClass.row);
    }
}