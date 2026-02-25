'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { createRegistration } from "./actions/rsvp";

function Letter() {


  const para = useSearchParams()
  return (
    <div className="min-h-screen bg-white font-serif p-4 md:p-16 text-black">
      <div className="max-w-4xl mx-auto border-t-[3px] border-black pt-8">

        <div className="flex justify-between items-start mb-10">
          <div className="space-y-1 text-sm">
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-bold">From:</span>
              <span>Team IRIS &lt;team@iris.nitk.ac.in&gt;</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-bold">To:</span>
              <span>IRIS 26 &lt;iris26@iris.nitk.ac.in&gt;</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-bold">Sent:</span>
              <span>20 March 2026 5:30 PM</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-bold">Subject:</span>
              <span className="bg-black highlight:text-white px-1 font-bold">Farewell For Members in IRIS Files Leaks</span>
            </div>
            <div className="grid grid-cols-[80px_1fr] mt-4">
              <span className="font-bold">Importance:</span>
              <span>High</span>
            </div>
          </div>

          <img
            src="/iris.svg"
            alt="IRIS Logo"
            className="w-24 h-auto opacity-90 brightness-0"
          />
        </div>

        {/* Message */}
        <div className="mb-12 text-[15px] leading-snug">
          <div className="mb-12 text-[15px] leading-snug">
            <div className="max-w-2xl mx-auto p-6 border border-gray-800 bg-opacity-50">
              <h2 className="text-xl font-bold mb-6 tracking-tighter">Presence Confirmed</h2>

              <p className="mb-6 font-normal leading-relaxed">
                Your presence has been confirmed. See you in the 
                <span className="bg-black italic font-semibold"> IRIS'26 </span>
                 party.
              </p>

              <div className="border-l-4 border-black pl-4 mb-9">
                <p className="text-sm uppercase tracking-widest opacity-80">
                  Identity: <Suspense fallback={<span className="bg-black text-white px-1 uppercase">name</span>}>{para.get('name')}</Suspense> <br />
                  Arrival: 20 March, 5 PM<br />
                  VENUE: <Link className="underline hover:bg-black hover:text-white" href={"https://maps.app.goo.gl/Sy4vTq5QtrgUctCW9"}>Avatar Hotels, Manglore</Link>
                </p>
              </div>

              <p className="mb-9 font-normal leading-relaxed italic">
                Your entertainment will be available immediately on arrival
              </p>

              <p className="text-xs opacity-50">
                Note: Upon closing this window, this session will
                <span className="bg-black text-white px-1 uppercase">Self-Terminate</span>.
                Do not screenshot this confirmation.
              </p>
            </div>

          </div>



        </div>

        <div className="mt-16 pt-4">
          <p className="text-[13px] mb-2 font-sans">----- Original Message -----</p>
          <div className="space-y-0 text-[13px]">
            <p><span className="font-bold">From:</span> Team IRIS &lt;team@nitk.ac.in&gt;</p>
            <p><span className="font-bold">To:</span> IRIS 26 &lt;iris26@nitk.ac.in&gt;</p>
            <p><span className="font-bold">Subject:</span><span className="bg-black highlight:text-white px-1 font-bold">Farewell For Members in IRIS Files Leaks</span></p>
          </div>

          <p className="mt-6 text-[14px] leading-relaxed">
            Do you think the party is unfit for you. Dw no one is over <span className="bg-black highlight:text-white px-1 font-bold">_____</span>, and all are very <span className="bg-black highlight:text-white px-1 font-bold">____</span>.  I have planted the seed with our invite today. Hope your <span className="bg-black highlight:text-white px-1 font-bold">____</span> will be able to handle it. Here is the final final.<br />...
          </p>
        </div>
        <br />
        {/* Footer Reference Line */}
        <div className="max-w-4xl mx-auto border-t-[3px] border-gray-800 pt-8"></div>

      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center font-mono text-sm animate-pulse">
        DECRYPTING DIRECTIVE...
      </div>
    }>
      <Letter />
    </Suspense>
  )
}