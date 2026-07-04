export default function CalendarLegend() {
    return (
        <div className="flex gap-6 mt-6">

            <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span>Available</span>
            </div>

            <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                <span>Unavailable</span>
            </div>

        </div>
    );
}