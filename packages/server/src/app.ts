import express, { Application, json, Request, Response } from 'express'
import cors from 'cors';
import Nome from "@shared/interface";


const app: Application = express()
app.use(cors())
app.use(json())

const Your_name: Nome[] = [{
    names:'alex'
}]

const port: number = parseInt(process.env.SERVER_PORT || '3001')

app.get('/hello', (req: Request<Nome[]>, res: Response<Nome[]>) => {
res.send(Your_name)
})
app.listen(port, function () {
console.log(`App is listening on port ${port} !`)
})
