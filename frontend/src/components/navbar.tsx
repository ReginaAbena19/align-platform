export default function Navbar(){
    return (
        <header className="flex items-center justify-between border-b px-8 py-5 bg-white">
            <h1 className="text-5xl font-black tracking-tight">
                ALIGN
            </h1>

            <button className="border rounded-xl px-5 py-3 hover:bg-gray-100 transition">
                My bookings 
            </button>
        </header>
    );
}
