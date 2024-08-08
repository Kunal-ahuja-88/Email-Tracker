import { Hono } from "hono";
import {v4 as uuid} from "uuid"
import Track from "../model/track.model";
import { sendEmail } from "../utils/sendEmail";

const app = new Hono()

app.post('/send-email',async(c) => {
     const {emails,password} = await c.req.json()

     if(!emails || !password) return c.json({error : "Emails and Password are invalid"})

    if(password!==Bun.env.PASSWORD) return c.json({error : "Wrong Passowrd , try again"});


    //trackingId , data => db
    const trackingId = uuid()

try {
    await Track.create({trackingId})
    await sendEmail(emails,trackingId)
    return c.json({
        trackingId:trackingId,
        message : "Email sent successfully"
    })
} catch (error) {
     return c.json({error: "Failed to send email"})
}
})




 

export default app
