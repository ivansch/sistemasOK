const {
    mailAccountUser,
    mailAccountPassword,
    toEmailAddress  } = process.env;

const nodemailer = require('nodemailer');

const smtpTransport = require('nodemailer-smtp-transport');
     
const sendMail = async (req, res) => {
    const { email, consult } = req.body;

    const fromMail = `${email}`;

    contentHTML = `
        <h1>Consulta de usuario sistema de riego</h1>
        <ul>
            <li>Mail del usuario: ${email}</li>
            <li>Consulta: ${consult}</li>
        </ul>
    `;

    const transport = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        secure: true,
        tls: {
          rejectUnauthorized: false
        },
        auth: {
          user: mailAccountUser,
          pass: mailAccountPassword
        }
      }))
    
      const mail = {
        from: fromMail,
        to: toEmailAddress,
        subject: "Sistema de riego",
        text: "Contacto",
        html: contentHTML
      }
    
      transport.sendMail(mail, function(error, response) {
        if (error) {
          console.log(error);
        } else {
          console.log("Message sent: " + response.message);
        }
    
        transport.close();
      });
    //   res.send(alert('Gracias por su consulta!'));
      res.send('Gracias por su consulta!');
    

}

module.exports = {
    sendMail

}