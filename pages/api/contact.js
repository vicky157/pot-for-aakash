import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password',  // Replace with your email password or app-specific password
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: 'vikashjohn2505@gmail.com', // Replace with your email
      subject: `Contact form submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
