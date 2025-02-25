import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";

import interactionPlugin from "@fullcalendar/interaction";

import timeGridPlugin from "@fullcalendar/timegrid";

// Button компоненті осында анықталған

const Button = ({ children, onClick }) => (
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
    onClick={onClick}
  >
    {children}
  </button>
);

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: "Meeting", start: new Date().toISOString() },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt("Оқиға атауын енгізіңіз:");

    if (title) {
      setEvents([...events, { title, start: arg.date }]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Кешенді Күнтізбе</h1>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable
        selectable
      />

      <Button onClick={() => setEvents([])}>Барлығын өшіру</Button>
    </div>
  );
};

export default Calendar;
