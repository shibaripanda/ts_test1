import nodemailer from 'nodemailer'
export async function email(targetEmail: string, subjectEmail: string, textMessage: string, fromEmail: string): Promise<void> {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'remontf10@gmail.com',
            pass: 'hiae lioc gcin vulx',
        },
    })

    const result = await transporter.sendMail({
        from: fromEmail,
        to: targetEmail,
        subject: subjectEmail,
        text: textMessage,
        html: `${textMessage}`,
    })

    console.log(result)
}