import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {useState } from 'react';
import interactionPlugin from '@fullcalendar/interaction';
import BookingForm from "./BookingForm";


// dummy data to test available slots/responsive design/ booked and unavilable states 

const events = [

     {
        title: 'unavailable',
        start: "2026-07-13",
        end: "2026-07-17",
        color: 'grey',
        extendedProps: {
            reason: 'booked'
        }
    },

]

export default function Calendar(){
    const [selectedDate, setSelectedDate] = useState<string | null> (null);

    return(
        <>
            <FullCalendar 
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick={(info)=> {
                    setSelectedDate(info.dateStr)
                }}
            />

            {selectedDate && (
                <BookingForm selectedDate={selectedDate} />
            )}
        </>
    );
}