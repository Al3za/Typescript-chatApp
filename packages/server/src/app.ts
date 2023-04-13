import express, { Application, json, Request, Response } from 'express'
import cors from 'cors';
import UserName from "@shared/interface";


const app: Application = express()
app.use(cors())
app.use(json())

const Your_name: UserName[] = [{
    users:'alex'
}]

const port: number = parseInt(process.env.SERVER_PORT || '3001')

app.get('/hello', (req: Request<UserName[]>, res: Response<UserName[]>) => {
res.send(Your_name)
})
app.listen(port, function () {
console.log(`App is listening on port ${port} !`)
})
