const express = require('express');
const {
    getBookings,
    showAddForm,
    addBooking,
    deleteBooking,
    showUpdateForm,
    updateBooking
} = require('../controllers/bookingController');

const router = express.Router();

router.get("/bookings", getBookings);
router.get("/bookings/add", showAddForm);
router.post("/bookings/add", addBooking);

router.get("/bookings/delete/:id", deleteBooking);

router.get("/bookings/update/:id", showUpdateForm);
router.post("/bookings/update/:id", updateBooking);

module.exports = router;