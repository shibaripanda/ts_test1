// import { analytics } from "./modules/analytics.js"
import getFileFromServer from "./modules/getFileFromServer.js"
import openExcelFile from "./modules/openExcelFile.js"
// import { email } from "./modules/mail.js"


// getFileFromServer('http://www.pogremuhi.com/pricelist/05.09.2023.xls', './files/NewPrice.xls')
openExcelFile('./files/NewPrice.xls')

// const message: string = "Hello, Dima!"
// const ssss: number = 5

// console.log(message)
// console.log(ssss)

// email('prevetlunatikam@gmail.com', 'Тест', 'Текст письма', 'Panda')
// analytics("main.ts!")
