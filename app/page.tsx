"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { createRegistration } from "./letter/actions/rsvp";

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState("");
  // const [rollNo, setRollNo] = useState("")
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.SubmitEvent) {
    e.preventDefault(); // Stop the page reload
    setLoading(true);
    try {
      await createRegistration({ name });
      const encodedName = encodeURIComponent(name);
      router.push(`/letter?name=${encodedName}`);
    } catch (error) {
      console.error("Failed to save:", error);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white font-serif p-4 md:p-16 text-black">
      <div className="max-w-4xl mx-auto border-t-[3px] border-black pt-8">
        <div className="flex flex-row justify-between items-start gap-4 mb-10">
          <div className="space-y-1 text-sm min-w-0">
            <div className="grid grid-cols-[100px_1fr] gap-x-2">
              <span className="font-bold">From:</span>
              <span className="break-all md:break-normal">
                Team IRIS &lt;team@iris.nitk.ac.in&gt;
              </span>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-x-2">
              <span className="font-bold">To:</span>
              <span className="break-all md:break-normal">
                IRIS 26 &lt;iris26@iris.nitk.ac.in&gt;
              </span>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-x-2">
              <span className="font-bold">Sent:</span>
              <span>20 March 2026 5 PM</span>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-x-2 items-start">
              <span className="font-bold">Subject:</span>
              <div>
                <span className="bg-black highlight:text-white px-1 font-bold inline-block">
                  Farewell For Members in IRIS Files Leaks
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-x-2 mt-4">
              <span className="font-bold">Importance:</span>
              <span className="font-bold uppercase tracking-tight">High</span>
            </div>
          </div>

          <img
            src="/iris.svg"
            alt="IRIS Logo"
            className="w-16 md:w-24 h-auto opacity-90 brightness-0 shrink-0"
          />
        </div>

        <div className="mb-12 text-[15px] leading-snug">
          <div className="mb-12 text-[15px] leading-snug">
            <p className="mb-9 font-normal leading-relaxed">
              Do you think the party is unfit for you. Dw no one is over{" "}
              <span className="bg-black highlight:text-white px-1 font-bold">
                _____
              </span>
              , and all are very{" "}
              <span className="bg-black highlight:text-white px-1 font-bold">
                ____
              </span>
              . I have planted the seed with our invite today. Hope your{" "}
              <span className="bg-black highlight:text-white px-1 font-bold">
                ____
              </span>{" "}
              will be able to handle it. Here is the final final. I have decided
              to make a change of the venue from{" "}
              <span className="bg-black highlight:text-white px-1 font-bold">
                ____
              </span>{" "}
              to{" "}
              <Link
                className="underline hover:bg-black hover:text-white"
                href={"https://maps.app.goo.gl/Sy4vTq5QtrgUctCW9"}
              >
                The Avatar Flexi - 1st Floor
              </Link>{" "}
              to reduce the number of travel minutes. I have specially
              handpicked both{" "}
              <span className="bg-black highlight:text-white px-1 font-bold">
                Pizzas
              </span>{" "}
              and{" "}
              <span className="bg-black highlight:text-white px-1 font-bold">
                Drinks
              </span>{" "}
              to suit all your needs. We have pizzas, grape juice and ice creams
              waiting for you on 20th March 5 PM. I was unfortunately not able
              to get my hands on cheese and hotdog. Whoops!
              <br />
              Honestly I'd like to speak on the phone as that's way easier. I'll
              be off with snowhite then.
              <br />
              You'll regret missing the party as it's definitely gonna be a
              memorable experience.
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="max-w-md space-y-6 py-4">
              <div className="flex flex-col border-l border-black/20 pl-4">
                <label className="text-[11px] font-bold uppercase mb-1">
                  Full Legal Name:
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b border-black/40 py-1 focus:outline-none focus:border-black text-[14px]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* <div className="flex flex-col border-l border-black/20 pl-4">
                <label className="text-[11px] font-bold uppercase mb-1">Roll Number:</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-black/40 py-1 focus:outline-none focus:border-black text-[14px]"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  required
                />
              </div> */}
            </div>
            {/* <Link href={'/letter?name={subject}'} type="submit"> */}
            <button
              type="submit"
              className={`text-[13px] font-bold underline decoration-1 underline-offset-2 ${loading ? `animate-pulse` : ``} hover:bg-black hover:text-white px-1 transition-all`}
            >
              Submit Response
            </button>
            {/* </Link> */}
          </form>
          <div className="mt-10"></div>
        </div>

        <div className="mt-16 pt-4">
          <p className="text-[13px] mb-2 font-sans">
            ----- Original Message -----
          </p>
          <div className="space-y-0 text-[13px]">
            <p>
              <span className="font-bold">From:</span> IRIS 26
              &lt;iris26@iris.nitk.ac.in&gt;
            </p>
            <p>
              <span className="font-bold">To:</span> Team IRIS
              &lt;team@iris.nitk.ac.in&gt;
            </p>
            <p>
              <span className="font-bold">Sent:</span>
              <span className="bg-black text-black px-1 font-bold">
                REDACTED
              </span>
            </p>
            <p>
              <span className="font-bold">Subject:</span>seems like farewell is
              going to be epic
            </p>
          </div>

          <p className="mt-6 text-[14px] leading-relaxed">
            We are still on the fence about the event. I need to know if the
            environment is going to be 'correct' for what we discussed. I need a
            setup that is efficient and private. Let me know if you can fix the
            travel and if the 'entertainment' is actually what you promised.
            <br />
            Waiting on the final details.
          </p>
        </div>

        {/* Footer Reference Line */}
        <div className="mt-16 text-gray-400 break-all text-[10px] tracking-widest">
          {"*".repeat(95)}
        </div>
      </div>
    </div>
  );
}
