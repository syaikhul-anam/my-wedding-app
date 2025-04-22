'use client';

interface MapSectionProps {
  location: string;
  type: 'ceremony' | 'reception';
}

export default function MapSection({ location, type }: MapSectionProps) {
  const encodedLocation = encodeURIComponent(location);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedLocation}`;

  return (
    <div className="mt-4">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={mapUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Get Directions
      </a>
    </div>
  );
} 