'use client';

import { useState } from 'react';

interface RSVPFormData {
  name: string;
  attendance: 'attending' | 'not-attending';
  message: string;
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    attendance: 'attending',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We have received your RSVP. We look forward to celebrating with you!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Will you attend?
        </label>
        <div className="mt-2 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="attending"
              checked={formData.attendance === 'attending'}
              onChange={(e) =>
                setFormData({ ...formData, attendance: e.target.value as 'attending' | 'not-attending' })
              }
              className="h-4 w-4 text-pink-600 focus:ring-pink-500"
            />
            <span className="ml-2 text-gray-700">Yes, I will attend</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="not-attending"
              checked={formData.attendance === 'not-attending'}
              onChange={(e) =>
                setFormData({ ...formData, attendance: e.target.value as 'attending' | 'not-attending' })
              }
              className="h-4 w-4 text-pink-600 focus:ring-pink-500"
            />
            <span className="ml-2 text-gray-700">No, I cannot attend</span>
          </label>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message (Optional)
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-600 transition-colors"
      >
        Submit RSVP
      </button>
    </form>
  );
} 