import {useState} from 'react';


type BookingFormProps = {
    selectedDate: string;
};

export default function BookingForm({selectedDate}: BookingFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [injuries, setInjuries] = useState("");
    const [sessionType, setSessionType] = useState("");
    const [experienceLevel, setExperienceLevel] = useState("");
    const [time, setTime] = useState("");

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

        alert(data.message);
    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
        }

    return (
        <form 
            className = "t-6 p-6 border rounded-lg shadow-md max-w-lg"
            onSubmit={handleSubmit}
        >

            <h2 className="text-2xl font-bold mb-4">
                Book Your Session
            </h2>

            <p className="mb-4">
                <strong>Selected Date:</strong> {selectedDate}
            </p>

            <div className="mb-3">
                <label>First Name</label>
                <input
                    className="border rounded p-2 w-full"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Last Name</label>
                <input
                    className="border rounded p-2 w-full"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Email</label>
                <input
                    className="border rounded p-2 w-full"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Age</label>
                <input
                    className="border rounded p-2 w-full"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Injuries / Anything I Should Know</label>
                <textarea
                    className="border rounded p-2 w-full"
                    value={injuries}
                    onChange={(e) => setInjuries(e.target.value)}
                />
            </div>

            <div className="mb-3">
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

            <div className="mb-3">
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

            <div className="mb-3">
                <label>Time</label>
                <select
                    className="border rounded p-2 w-full"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {Array.from({ length: 24 }, (_, i) => {
                        const hour = i.toString().padStart(2, '0');
                        return <option key={i} value={`${hour}:00`}>{`${hour}:00`}</option>;
                    })}
                </select>
            </div>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
            >
                Book Session
            </button>
        </form>
    );
}