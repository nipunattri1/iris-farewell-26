'use client';
import { useState } from "react";
import { createRegistration } from "./actions/rsvp";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function RSVPPage() {
  const [name, setName] = useState("")
  const [rollNo, setRollNo] = useState("")
  const [attending, setAttending] = useState(true)
  const [loading, setLoading] = useState(false)
  const [responseCode, setResponseCode] = useState("")

  async function onSubmit(e: React.SubmitEvent) {
    e.preventDefault(); // Stop the page reload

    // Call the server action with the data
    try {
      await createRegistration({ name, rollNo, attending });
      alert("Saved successfully!");
    } catch (error) {
      console.error("Failed to save:", error);
    }
  }
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-[0.05]"></div>

      <main className="max-w-2xl mx-auto pt-20 px-6 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary font-russo text-sm uppercase tracking-widest hover:underline mb-8"
        >
          <MoveLeft className="w-4 h-4" />
          Back to Terminal
        </Link>

        <h1 className="font-russo text-5xl uppercase tracking-tighter mb-2">
          RSVP <span className="text-primary">Config</span>
        </h1>
        <p className="opacity-60 mb-10">Confirm your presence for the IRIS X Final Release.</p>

        <form className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm" onSubmit={onSubmit}>
          {/* Name Input */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-russo uppercase tracking-widest text-xs opacity-70">Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full bg-background/50 border-white/10 focus:border-primary focus:outline-none" onChange={(props) => setName(props.target.value)} value={name} required />
          </div>

          {/* RollNo */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-russo uppercase tracking-widest text-xs opacity-70">Roll Number</span>
            </label>
            <input type="text" placeholder="221CS01" className="input input-bordered w-full bg-background/50 border-white/10 focus:border-primary focus:outline-none" onChange={(props) => setRollNo(props.target.value)} value={rollNo} required />
          </div>

          {/* Attendance Toggle */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-russo uppercase tracking-widest text-xs opacity-70">Attendance Status</span>
            </label>
            <select className="select select-bordered w-full bg-background/50 border-white/10 focus:border-primary focus:outline-none" onChange={(props) => setAttending(props.target.value == "true")} value={attending ? "true" : "false"} >
              <option value={"true"}>Confirmed (I'll be there)</option>
              <option value={"false"}>Aborted (Can't make it)</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full rounded-full h-14 mt-4 font-russo uppercase tracking-widest text-lg " >
            Push Confirmation →
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] opacity-40">
          Syncing with production database...
        </div>
      </main>
    </div>
  );
}