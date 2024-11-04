// index.js

const Scheduler = require('./schedular');
const scheduler = new Scheduler();

try {
  // Adding events
  console.log(scheduler.addEvent({ start_time: 9, end_time: 12 })); // Should return true
  console.log(scheduler.addEvent({ start_time: 13, end_time: 15 })); // Should return true
  console.log(scheduler.addEvent({ start_time: 10, end_time: 11 })); // Should return false (overlap)

  // Retrieve all events
  console.log(scheduler.getEvents());
} catch (error) {
  console.error(error.message);
}
