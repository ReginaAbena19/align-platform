import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import BookingForm from "./BookingForm";
import Navbar from "./navbar";
import CalendarLegend from "./CalendarLegend";
import "../index.css";

type Booking = {
    id: number;
    date: string;
    time: string;
};

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5019/bookings")
            .then((response) => response.json())
            .then((data) => setBookings(data))
            .catch((error) => console.error(error));
    }, []);

    const calendarEvents = bookings.map((booking) => ({
        title: "Booked",
        start: booking.date,
        color: "grey",
    }));

    return (
        <>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950">
            <Navbar />

            <main className="max-w-7xl mx-auto px-8 py-10">

                <h1 className="text-5xl font-bold">
                    Book a Session
                </h1>

                <p className="text-gray-500 mt-2 mb-8">
                    Select a date to book your free session.
                </p>

                <div className="flex items-start gap-12">

                    <div className="bg-white rounded-2xl border shadow-sm p-8">

                        <FullCalendar
                            plugins={[dayGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            events={calendarEvents}
                            height="auto"
                            fixedWeekCount={false}
                            dayMaxEventRows={1}
                            headerToolbar={{
                                left: "prev",
                                center: "title",
                                right: "next",
                            }}
                            dateClick={(info) => {
                                setSelectedDate(info.dateStr);
                            }}
                        />

                        <CalendarLegend />

                    </div>

                </div>

            </main>

            {selectedDate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

                    <BookingForm
                        selectedDate={selectedDate}
                        bookings={bookings}
                        onClose={() => setSelectedDate(null)}
                    />

                </div>
            )}
        </div>
        </>
    );
}