

import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950">

            {/* Navbar */}
            <header className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

                    <h1 className="text-5xl font-black tracking-tight">
                        ALIGN
                    </h1>

                    <nav className="flex items-center gap-8">
                        <Link
                            to="/booking"
                            className="text-lg font-medium hover:text-purple-700 transition"
                        >
                            Book a Session
                        </Link>

                        <button className="rounded-xl border px-5 py-3 hover:bg-gray-100 transition">
                            My Bookings
                        </button>
                    </nav>

                </div>
            </header>

            {/* Hero */}
            <main className="flex min-h-[calc(100vh-104px)] items-center justify-center px-8">

                <div className="max-w-2xl rounded-3xl bg-white/95 p-12 shadow-2xl">

                    <h2 className="mb-6 text-6xl font-bold text-purple-950">
                        Welcome to Align
                    </h2>

                    <p className="mb-10 text-xl leading-9 text-gray-700">
                        Book a complimentary Mat or Reformer Pilates session with Regina.
                        Every class supports her teacher training journey while helping you
                        move, strengthen and feel your best.
                    </p>

                    <Link
                        to="/booking"
                        className="inline-flex items-center rounded-xl bg-pink-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-pink-700"
                    >
                        Book a Session →
                    </Link>

                </div>

            </main>

        </div>
    );
}