import nodemailer from 'nodemailer';

const sendEmail = async(email,subject,text) => {
    try {
        const transporter = nodemailer.createTransport({
            host : process.env.HOST,
            service : process.env.SERVICE,
            PORT : process.env.PORT,
            secure : true,
            auth : {
                user : process.env.USER,
                pass : process.env.PASS
            },
        });

        await transporter.sendMail({
            from : process.env.USER,
            to : email,
            subject,
            text
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.log(error,"Email not sent");
    }
}

export {sendEmail}