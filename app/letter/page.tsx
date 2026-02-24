'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Letter() {

  const para = useSearchParams()
  return (
    <div className="min-h-screen bg-white font-serif p-4 md:p-16 text-black">
      <div className="max-w-4xl mx-auto border-t-[3px] border-black pt-8">

        <div className="flex justify-between items-start mb-10">
          <div className="space-y-1 text-sm">
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-bold">From:</span>
              <span> Team IRIS[iris@nitk.ac.in]</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-bold">Sent:</span>
              <span>20 March 2026 5:30 PM</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-bold">To:</span>
              <span>iris.batch.26@nitk.ac.in</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-bold">Subject:</span>
              <span>Re: Farewell For Members in IRIS Files Leaks</span>
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
              <h2 className="text-xl font-bold mb-6 tracking-tighter">CONFIRMATION_LOGGED</h2>

              <p className="mb-6 font-normal leading-relaxed">
                Your coordinates have been pinned. The
                <span className="italic font-semibold"> IRIS'26 </span>
                contingency plan is now in effect.
              </p>

              <div className="border-l-4 border-black pl-4 mb-9">
                <p className="text-sm uppercase tracking-widest opacity-80">
                  Identity: {para.get('name')}<br />
                  Arrival: 5 PM<br />
                  Extraction Point: <Link className="underline hover:bg-black hover:text-white" href={"https://maps.app.goo.gl/Sy4vTq5QtrgUctCW9"}>Avatar Hotels, Manglore</Link>
                </p>
              </div>

              <p className="mb-9 font-normal leading-relaxed italic">
                "The silence is the only thing we have left to protect."
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
            <p><span className="font-bold">From:</span> Team IRIS[iris@nitk.ac.in]</p>
            <p><span className="font-bold">To:</span> iris.batch.26@nitk.ac.in</p>
            <p><span className="font-bold">Sent:</span><span className="bg-black text-white px-1 font-bold">REDACTED</span></p>
            <p><span className="font-bold">Subject:</span>Farewell For Members in IRIS Files Leaks</p>
          </div>

          <p className="mt-6 text-[14px] leading-relaxed">
            Dear IRIS'26 Member
            <br />
            The worst has happened. IRIS Files have been leaded the cache includes clear evidence of <span className="bg-black highlight:text-white px-1 font-bold italic">REDACTED</span> being carried
            out in the lab,,
          </p>
        </div>
        <br />
        {/* Footer Reference Line */}
        <div className="max-w-4xl mx-auto border-t-[3px] border-gray-800 pt-8"></div>

      </div>
    </div>
  );
}