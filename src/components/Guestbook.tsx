'use client';

import { useState } from 'react';

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      message: 'Wishing you a lifetime of love and happiness!',
      date: '2024-03-15',
    },
    {
      id: '2',
      name: 'Michael Brown',
      message: 'May your love grow stronger with each passing day.',
      date: '2024-03-14',
    },
  ]);

  const [newEntry, setNewEntry] = useState({
    name: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry: GuestbookEntry = {
      id: Date.now().toString(),
      name: newEntry.name,
      message: newEntry.message,
      date: new Date().toISOString().split('T')[0],
    };
    setEntries([entry, ...entries]);
    setNewEntry({ name: '', message: '' });
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={newEntry.name}
            onChange={(e) =>
              setNewEntry({ ...newEntry, name: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            value={newEntry.message}
            onChange={(e) =>
              setNewEntry({ ...newEntry, message: e.target.value })
            }
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-600 transition-colors"
        >
          Leave a Message
        </button>
      </form>

      <div className="space-y-6">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {entry.name}
              </h3>
              <span className="text-sm text-gray-500">{entry.date}</span>
            </div>
            <p className="text-gray-600">{entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 