const nodemailer = require("nodemailer");

const create_query = async (req, res) => {
  try {
    const data = req.body;
    
    // ----------- VALIDATION -----------
    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({ message: "Invalid Email Address" });
    }
    
    // Validate Mobile Number (10 - 15 digits)
    // ----------- VALIDATION END -----------

    // ----------- NODEMAILER -----------
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD  // App Password Recommended
      }
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: "fcandsonsconsulting@gmail.com",
      subject: "Web Portal Query Received",
      text: `Full Name: ${data.name}\n
Email: ${data.email}\n
Phone: ${data.phone}\n
Service: ${data.subject}\n
Message: ${data.message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(400).json({ message: "Query Not Sent!" });
      } else {
        return res.status(200).json({ message: "Query Sent Successfully!" });
      }
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

module.exports = { create_query };
