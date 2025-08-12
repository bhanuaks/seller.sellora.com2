
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const nodemailer = require('nodemailer'); 
import axios from 'axios';

// export async function sendMailByNodeMailer(to, subject, htmlContent, isBcc=false) {
    
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com', // Use your SMTP server here
//         port: 465,
//         secure: true, // true for port 465, false for port 587
//         auth: {
//           user: process.env.EMAIL_USER || "php1@aksindia.com",  
//           pass: process.env.EMAIL_PASS || "jjcgeyodnzeigeyn", 
//         },
//       });

//       const mailOptions = {
//         from: '"sellora.com" php1@aksindia.com', // Sender address
//         to: to, // Recipient email
//         subject: subject, // Email subject
//         html: htmlContent, // Rendered HTML 
//       };

//       if (isBcc) {
//         mailOptions.bcc = 'amitkumar735194@gmail.com'; // Add your BCC recipient
//     }

//         // Send the email
//         try {
//             const info = await transporter.sendMail(mailOptions);
//             console.log('Email sent:', info.messageId);
//             return  info.messageId
//         } catch (error) {
//             console.log(error);
//             return  error
//         }

// }


// ====================send mail using microsoft mail===========================

// export async function sendMailByNodeMailer(to, subject, htmlContent, isBcc = false) {
//     // Office365 SMTP configuration with your provided settings
//     const transporter = nodemailer.createTransport({
//         host: "smtp.office365.com",
//         port: 587,
//         secure: false, // Use STARTTLS (not SSL/TLS)
//         requireTLS: true, // Force STARTTLS
//         auth: {
//             user: "server@sellora.com",
//             pass: "@Sellora$0033%",
//         },
//         tls: {
//             ciphers: 'SSLv3',
//             // Remove rejectUnauthorized if you have proper certificates
//             rejectUnauthorized: true // Recommended for production
//         }
//     });

//     const mailOptions = {
//         from: '"sellora.com" <server@sellora.com>', 
//         to: to,
//         subject: subject,
//         html: htmlContent,
//     };

//     if (isBcc) {
//         mailOptions.bcc = 'php1@aksindia.com';
//     }

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent:', info.messageId);
//         return info.messageId;
//     } catch (error) {
//         console.error('Email sending failed:', error);
//         throw error;
//     }
// }

  

 
// export async function sendMailByNodeMailer(to, subject, htmlContent, isBcc = false) {
// sendMailByGraphAPI
export async function sendMailByNodeMailer(to, subject, htmlContent, isBcc = false) {
  const tenantId = process.env.TENANT_ID ;
  const clientId = process.env.CLIENT_ID ;
  const clientSecret = process.env.CLIENT_SECRET  ;
  const senderEmail = process.env.EMAIL_USER  ;

  try {
    // 1. Get OAuth2 token for Microsoft Graph
    const tokenResponse = await axios.post(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: clientId,
        scope: 'https://graph.microsoft.com/.default',
        client_secret: clientSecret,
        grant_type: 'client_credentials'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // 2. Prepare email payload
    const mailPayload = {
      message: {
        subject,
        body: {
          contentType: 'HTML',
          content: htmlContent
        },
        from: {
          emailAddress: {
            name: 'Sellora.com',         
            address: senderEmail
          }
        },
        toRecipients: [
          {
            emailAddress: {
              address: to
            }
          }
        ],
        ...(isBcc && {
          bccRecipients: [
            {
              emailAddress: {
                address: 'php1@aksindia.com'
              }
            }
          ]
        })
      },
      saveToSentItems: 'true'
    };

    // 3. Send mail via Microsoft Graph
    const graphResponse = await axios.post(
      `https://graph.microsoft.com/v1.0/users/${senderEmail}/sendMail`,
      mailPayload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Email sent successfully via Microsoft Graph.');
    return true;
  } catch (error) {
    console.error('Email sending failed:', error.response?.data || error.message);
    throw error;
  }
}
