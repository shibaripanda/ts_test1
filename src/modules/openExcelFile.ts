import { read, IWorkBook } from 'ts-xlsx'

export default function openExcelFile(fileLink: string){
    const wb: IWorkBook = read(fileLink)
    console.log(wb)
}