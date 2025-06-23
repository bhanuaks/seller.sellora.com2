
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const nodemailer = require('nodemailer'); 

export async function sendMailByNodeMailer(to, subject, htmlContent, isBcc=false) {
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Use your SMTP server here
        port: 465,
        secure: true, // true for port 465, false for port 587
        auth: {
          user: process.env.EMAIL_USER || "php1@aksindia.com",  
          pass: process.env.EMAIL_PASS || "jjcgeyodnzeigeyn", 
        },
      });

      const mailOptions = {
        from: '"sellora.com" php1@aksindia.com', // Sender address
        to: to, // Recipient email
        subject: subject, // Email subject
        html: htmlContent, // Rendered HTML 
      };

      if (isBcc) {
        mailOptions.bcc = 'amitkumar735194@gmail.com'; // Add your BCC recipient
    }

        // Send the email
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.messageId);
            return  info.messageId
        } catch (error) {
            console.log(error);
            return  error
        }

}





// export async function sendMailByNodeMailer(to, subject, htmlContent, isBcc = false) {
//     // Recommended configuration for Office365 SMTP
//     const transporter = nodemailer.createTransport({
//         host: "smtp.office365.com",
//         port: 587, // Recommended port for Office365
//         secure: false, // true for 465, false for other ports (587)
//         auth: {
//             user: process.env.EMAIL_USER || "php1@aksindia.com",
//             pass: process.env.EMAIL_PASS || "jjcgeyodnzeigeyn",
//         },
//         tls: {
//             ciphers: 'SSLv3',
//             rejectUnauthorized: false // Only use this in development if you encounter certificate issues
//         }
//     });

//     const mailOptions = {
//         from: '"sellora.com" <php1@aksindia.com>', // Properly formatted sender
//         to: to,
//         subject: subject,
//         html: htmlContent,
//     };

//     if (isBcc) {
//         mailOptions.bcc = 'amitkumar735194@gmail.com';
//     }

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent:', info.messageId);
//         return info.messageId;
//     } catch (error) {
//         console.error('Email sending failed:', error);
//         throw error; // Better to throw the error so caller can handle it
//     }
// }