const express = require("express");
const router = express.Router();
const {
  createComplaint,
  getComplaints,
  updateComplaint,
  deleteComplaint,
  getComplaintById,
} = require("../controllers/ComplaintController");

router.post("/complaints", createComplaint);
router.get("/complaints", getComplaints);
router.get("/complaints/:id", getComplaintById);
router.put("/complaints/:id", updateComplaint);
router.delete("/complaints/:id", deleteComplaint);

module.exports = router;
