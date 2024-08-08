import {createTransport} from "nodemailer"

const transport = createTransport({
    host:'smtp.gmail.com',
    auth : {
        user : process.env.SMTP_MAIL,
        pass : process.env.MAIL_PASSOWORD
    }
})

export const sendEmail = async(emails : string[] ,trackingId : string) => {
    const trackingURL = `${Bun.env.BASE_URL}/track/track-mail/${trackingId}`;
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: emails,
        subject : 'Tracking dead pixel Id',
        text : `Your tracking Id is ${trackingId}`,
        html : 
        `<h1> Tracking Id : ${trackingId}</h1>
         <img src = '${trackingURL}' alt= "dead-pixel" 
         style="display:none;"
         />`
    }

    try {
        await transport.sendMail(mailOptions)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to send email")
    }
}
