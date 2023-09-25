var event_date = document.getElementById("event_date").value;

const events = [
    {
      start: event_date,
      end: event_date
    }
];
new Calendar({
    id: "#color-calendar",
    theme: "basic",
    eventsData: events,
    customMonthValues: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogs', 'Sep', 'Okt', 'Nov', 'Dis'],
    customWeekdayValues: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
    disableMonthYearPickers: true,
    disableDayClick: true,
    disableMonthArrowClick: true
}).setDate(event_date);
