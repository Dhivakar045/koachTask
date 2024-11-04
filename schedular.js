// scheduler.js

class Scheduler {
    constructor() {
      this.events = [];
    }
  
    // Method to check for overlapping events
    hasOverlap(newEvent) {
      return this.events.some(event => {
        return (
          (newEvent.start_time >= event.start_time && newEvent.start_time < event.end_time) ||
          (newEvent.end_time > event.start_time && newEvent.end_time <= event.end_time)
        );
      });
    }
  
    // Method to add an event if no overlap is detected
    addEvent(newEvent) {
      if (newEvent.start_time < 0 || newEvent.end_time > 23 || newEvent.start_time >= newEvent.end_time) {
        throw new Error("Invalid event time");
      }
      if (!this.hasOverlap(newEvent)) {
        this.events.push(newEvent);
        return true;
      } else {
        return false; // Overlap detected, event not added
      }
    }
  
    // Method to retrieve all events
    getEvents() {
      return this.events;
    }
  }
  
  module.exports = Scheduler;
  