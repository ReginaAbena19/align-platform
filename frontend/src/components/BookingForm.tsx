import {useState} from 'react';


type BookingFormProps = {
    selectedDate: string;
    bookings: any[]
    onClose: () => void;
};

export default function BookingForm({selectedDate,bookings, onClose}: BookingFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [injuries, setInjuries] = useState("");
    const [sessionType, setSessionType] = useState("");
    const [experienceLevel, setExperienceLevel] = useState("");
    const [time, setTime] = useState("");

    const openingHour = 8;
    const closingHour = 20;

    const allTimes = Array.from(
    { length: closingHour - openingHour + 1 },
    (_, i) => `${String(openingHour + i).padStart(2, "0")}:00`
    );

    const bookedTimes = bookings
    .filter((booking) => booking.date === selectedDate)
    .map((booking) => booking.time);

    const availableTimes = allTimes.filter(
    (time) => !bookedTimes.includes(time)
    );

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const booking = {
            firstName,
            lastName,
            email, 
            age,
            injuries,
            sessionType,
            experienceLevel,
            time,
            selectedDate 
        };

        try {
        const response = await fetch("http://127.0.0.1:5019/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        alert("Booking successful!");
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }
    };

return (
    <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
    >
        {/* Close button */}
        <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-3xl hover:text-gray-600"
        >
            ×
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">
            Book Your Session
        </h2>

        <p className="mb-6">
            <strong>Selected Date:</strong> {selectedDate}
        </p>

        {/* Time + Session Type */}
        <div className="grid grid-cols-2 gap-4 mb-4">

            <div>
                <label>Time</label>
                <select
                    className="border rounded p-2 w-full"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        Select a time
                    </option>

                    {availableTimes.map((availableTime) => (
                        <option
                            key={availableTime}
                            value={availableTime}
                        >
                            {availableTime}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Session Type</label>
                <select
                    className="border rounded p-2 w-full"
                    value={sessionType}
                    onChange={(e) => setSessionType(e.target.value)}
                >
                    <option>Online</option>
                    <option>Mat</option>
                    <option>Reformer</option>
                </select>
            </div>

        </div>

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4 mb-4">

            <div>
                <label>First Name</label>
                <input
                    className="border rounded p-2 w-full"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    className="border rounded p-2 w-full"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>

        </div>

        {/* Email */}
        <div className="mb-4">
            <label>Email</label>
            <input
                className="border rounded p-2 w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>

        {/* Age */}
        <div className="mb-4">
            <label>Age</label>
            <input
                className="border rounded p-2 w-full"
                type="number"
                min="18"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
        </div>

        {/* Injuries */}
        <div className="mb-4">
            <label>Injuries / Anything I Should Know</label>
            <textarea
                className="border rounded p-2 w-full"
                value={injuries}
                onChange={(e) => setInjuries(e.target.value)}
            />
        </div>

        {/* Experience */}
        <div className="mb-4">
            <label>Experience Level</label>
            <select
                className="border rounded p-2 w-full"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
            >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">

            <button
                type="button"
                onClick={onClose}
                className="border rounded-lg px-6 py-2"
            >
                Cancel
            </button>

            <button
                type="submit"
                className="bg-black text-white rounded-lg px-6 py-2"
            >
                Book Session
            </button>

        </div>

    </form>
);
};