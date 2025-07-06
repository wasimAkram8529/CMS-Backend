const express = require("express");
const router = express.Router();
const {
  createComplaint,
  getComplaints,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/ComplaintController");

router.post("/complaints", createComplaint);
router.get("/complaints", getComplaints);
router.get("/:id", complaintController.getComplaintById);
router.put("/complaints/:id", updateComplaint);
router.delete("/complaints/:id", deleteComplaint);

module.exports = router;
