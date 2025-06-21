
const send = require('gmail-send')({
    user: 'doan.notifier@gmail.com', // email address to send messages
    pass: 'jolnxvmaiqmmixdk', //application password for this email
    to: 'antdoan1999@gmail.com', //change this to whatever email messages should be sending to
    subject: `Connect - Message from Customer`,
  });

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const body = req.body
            const { result } = await send(body)
            res.status(200).json({msg:"Successfully sent the email.", result:result})
        }
        catch (error) {
            res.status(400).json({msg:"Something went wrong when sending the email."})
        }
    }
  }