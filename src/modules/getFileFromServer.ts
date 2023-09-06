import http from "http"
import fs from "fs"

export default function getFileFromServer(link: string, nameFile: string){
    const file = fs.createWriteStream(nameFile)
    http.get(link, response => response.pipe(file))
}