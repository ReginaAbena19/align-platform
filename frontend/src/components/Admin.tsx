import {useEffect, useState} from 'react';

type Booking = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    injuries: string;
    sessionType: string;
    location: string;
    experienceLevel: string;
    date: string;
    time: string; 
};

export default function Admin() {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5019/bookings")
        .then((response) => response.json())
        .then((data) => setBookings(data))
        .catch((error) => console.log(error));
    }, []);
    
    return (
        <div className="min-h-screen bg-gray-100 p-10">

            <h1 className="text-4xl font-bold mb-8">
                Admin Dashboard
            </h1>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-semibold mb-6">
                    Bookings
                </h2>

                <table className="w-full">

                    <thead className="border-b">

                        <tr className="text-left">

                            <th className="py-3">Date</th>
                            <th>Time</th>
                            <th>Client</th>
                            <th>Experience</th>
                            <th>Session</th>
                            <th>Location</th>

                        </tr>

                    </thead>

                    <tbody>

                        {bookings.map((booking) => (

                            <tr
                                key={booking.id}
                                className="border-b hover:bg-gray-50"
                            >

                                <td className="py-4">
                                    {booking.date}
                                </td>

                                <td>
                                    {booking.time}
                                </td>

                                <td>
                                    {booking.firstName} {booking.lastName}
                                </td>

                                <td>
                                    {booking.experienceLevel}
                                </td>

                                <td>
                                    {booking.sessionType}
                                </td>

                                <td>
                                    {booking.location}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}