'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, SubmitEventHandler, useState } from "react";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [rollNo, setRollNo] = useState("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const encodedName = encodeURIComponent(subject);
    router.push(`/letter?name=${encodedName}`);
  };
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
              <span>Farewell For Members in IRIS Files Leaks</span>
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
            <p className="mb-9 font-normal leading-relaxed">
              Dear IRIS'26 Member
              <br /><br />
              The worst has happened. IRIS Files have been leaded the cache includes clear evidence of <span className="bg-black highlight:text-white px-1 font-bold italic">REDACTED</span> being carried
              out in the lab,, along with full logs of the <span className="bg-black highlight:text-white px-1 font-bold italic">DATA EXPUNGED</span> incident.
              <br /><br />
              Before the authorities, we must convene at
              the island one last time. we need to sync our stories and bid our final
              farewells before we all <span className="bg-black highlight:text-white px-1 font-bold uppercase">vanish</span> from the directory.
              <br />
              Be present, at <Link className="underline hover:bg-black hover:text-white" href={"https://maps.app.goo.gl/Sy4vTq5QtrgUctCW9"}>Avatar Hotels</Link> By 5 PM
              <br /><br />Confirm Your Presence by filling these details
            </p>

          </div>
          <form onSubmit={handleSubmit}>
            <div className="max-w-md space-y-6 py-4">
              <div className="flex flex-col border-l border-black/20 pl-4">
                <label className="text-[11px] font-bold uppercase mb-1">Full Legal Name:</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-black/40 py-1 focus:outline-none focus:border-black text-[14px]"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col border-l border-black/20 pl-4">
                <label className="text-[11px] font-bold uppercase mb-1">Roll Number:</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-black/40 py-1 focus:outline-none focus:border-black text-[14px]"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* <Link href={'/letter?name={subject}'} type="submit"> */}
            <button type="submit" className="text-[13px] font-bold underline decoration-1 underline-offset-2 hover:bg-black hover:text-white px-1 transition-all">
              Submit Response
            </button>
            {/* </Link> */}
          </form>
          <div className="mt-10">

          </div>
        </div>

        <div className="mt-16 pt-4">
          <p className="text-[13px] mb-2 font-sans">----- Original Message -----</p>
          <div className="space-y-0 text-[13px]">
            <p><span className="font-bold">From:</span> IRIS Freshers &lt;freshers@iris.nitk.ac.in&gt;</p>
            <p><span className="font-bold">To:</span> IRIS Seniors</p>
            <p><span className="font-bold">Sent:</span><span className="bg-black text-white px-1 font-bold">REDACTED</span></p>
            <p><span className="font-bold">Subject:</span>seems like farewell is going to be epic</p>
          </div>

          <p className="mt-6 text-[14px] leading-relaxed">
            I want you to realize that if you don't give farewell to your seniors<span className="bg-black hightlight:text-white px-1 font-bold">you won't recive any too</span>
            <br /> So I hope something good is being planned by Team
          </p>
        </div>

        {/* Footer Reference Line */}
        <div className="mt-16 text-gray-400 break-all text-[10px] tracking-widest">
          {"*".repeat(95)}
        </div>
      </div>
    </div >
  );
}