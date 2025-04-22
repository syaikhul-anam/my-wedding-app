import Image from "next/image";
import { Suspense } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import MusicPlayer from "@/components/MusicPlayer";
import MapSection from "@/components/MapSection";
import BankDetails from "@/components/BankDetails";
import RSVPForm from "@/components/RSVPForm";
import Guestbook from "@/components/Guestbook";
import ShareButtons from "@/components/ShareButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Music */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/t1.jfif"
            alt="Wedding Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            John & Jane
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Are getting married
          </p>
          <p className="text-lg">
            June 15, 2024 • 4:00 PM
          </p>
          <div className="mt-8">
            <Suspense fallback={<div>Loading...</div>}>
              <CountdownTimer targetDate="2024-06-15T16:00:00" />
            </Suspense>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-20">
          <MusicPlayer />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 text-lg">
            <p className="mb-6">
              We met at a coffee shop in downtown, where John was working as a barista and Jane was a regular customer. 
              After months of friendly conversations and shared lattes, we finally went on our first date.
            </p>
            <p>
              Three years later, John proposed during a sunset picnic at our favorite park. 
              We're excited to start this new chapter of our lives together and can't wait to celebrate with you!
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section with Maps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Event Details
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ceremony
              </h3>
              <p className="text-gray-600 mb-2">St. Mary's Church</p>
              <p className="text-gray-600 mb-2">123 Wedding Lane</p>
              <p className="text-gray-600 mb-4">4:00 PM - 5:00 PM</p>
              <MapSection 
                location="St. Mary's Church, 123 Wedding Lane"
                type="ceremony"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Reception
              </h3>
              <p className="text-gray-600 mb-2">Grand Ballroom</p>
              <p className="text-gray-600 mb-2">456 Celebration Ave</p>
              <p className="text-gray-600 mb-4">6:00 PM - 11:00 PM</p>
              <MapSection 
                location="Grand Ballroom, 456 Celebration Ave"
                type="reception"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Wedding Gift
          </h2>
          <div className="max-w-2xl mx-auto">
            <BankDetails />
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            RSVP
          </h2>
          <div className="max-w-2xl mx-auto">
            <RSVPForm />
          </div>
        </div>
      </section>

      {/* Guestbook Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Guestbook
          </h2>
          <div className="max-w-4xl mx-auto">
            <Guestbook />
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Share Our Joy
          </h2>
          <ShareButtons />
        </div>
      </section>
    </main>
  );
}
