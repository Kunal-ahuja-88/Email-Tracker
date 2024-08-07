import { Hono } from "hono";
import {v4 as uuid} from "uuid"

const app = new Hono()

app.post('/send-email',async(c) => {
     const {emails,password} = await c.req.json()

     if(!emails || !password) return c.json({error : "Emails and Password are invalid"})

    if(password!=Bun.env.PASSWORD) return c.json({error : "Wrong Passowrd , try again"});
})
 

export default app