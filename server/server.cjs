const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const emailjs = require("emailjs-com");
const corsOptions = {
  origin: "https://quanha.vercel.app/", 
  optionsSuccessStatus: 200
};
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.listen(PORT, () => console.log("backend init"));

app.post("/api/send-form", async (req, res) => {
  const { name, email, message } = req.body;
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_EMAILJS_PRIVATE_KEY;
  console.log(
    "name: ",
    name,
    "mail: ",
    email,
    "mess: ",
    message,
    "serviceID: ",
    serviceID,
    "templateID: ",
    templateID,
    "pk: ",
    publicKey
  );
  const templateParams = {
    from_name: name,
    email: email,
    message: message,
  };
  console.log("template: ", templateParams);
  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        template_params: templateParams,
        accessToken: privateKey,
      }
    );
    if (response.status === 200) {
      res
        .status(200)
        .json({ success: true, message: "Message sent successfully" });
    }
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});
