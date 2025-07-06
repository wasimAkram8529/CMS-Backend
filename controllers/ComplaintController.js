const Complaint = require("../models/Complaint");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("Email Transporter Error:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

const sendEmail = async (subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"CMS" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject,
      html,
    });
    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error("Email send failed:", err);
  }
};

exports.createComplaint = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();

    await sendEmail(
      "New Complaint Submitted",
      `<h3>Title: ${complaint.title}</h3>
      <p><strong>Category:</strong> ${complaint.category}</p>
      <p><strong>Priority:</strong> ${complaint.priority}</p>
      <p><strong>Description:</strong>: ${complaint.description}</p>`
    );

    res.status(201).json(complaint);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

exports.getComplaints = async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
};

exports.updateComplaint = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: "Status is required" });
  }

  try {
    const updated = await Complaint.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Complaint not found" });
    }

    await sendEmail(
      "Complaint Status Updated",
      `<h3>Title: ${updated.title}</h3>
      <p>Status changed to <strong>${
        updated.status
      }</strong> on ${new Date().toLocaleString()}</p>`
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteComplaint = async (req, res) => {
  const { id } = req.params;
  await Complaint.findByIdAndDelete(id);
  res.json({ message: "Complaint deleted" });
};
