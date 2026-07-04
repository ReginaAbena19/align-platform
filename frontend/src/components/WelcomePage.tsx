import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  const [isOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-purple-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-purple-100 rounded-lg p-6 max-w-md w-full mx-4 border-2 border-purple-300">
            <div className="flex items-center gap-3 mb-4">
              </div>
              <h2 className="text-xl font-bold text-purple-800">Welcome to Align </h2>
            <p className="mb-6 text-purple-700">
              Book a free Mat or Reformer Pilates session with Regina. Every class you take helps her complete her teacher training - thank you for being part of it! 
            </p>
            <div className="flex justify-end gap-3">
              <Link to="/booking">
                <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
                  Book a session
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}