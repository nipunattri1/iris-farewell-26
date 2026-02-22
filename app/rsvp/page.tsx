'use client';
import { useState } from "react";

export default function RSVPPage() {
  const [name, setName] = useState("")
  const [rollNo, setRollNo] = useState("")
  const [attending, setAttending] = useState(true)
  const [foodType, setFoodType] = useState("Veg")
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-[0.05]"></div>

      <main className="max-w-2xl mx-auto pt-20 px-6 pb-20">
        <a href="/" className="text-primary font-russo text-sm uppercase tracking-widest hover:underline mb-8 inline-block">
          ← Back to Terminal
        </a>

        <h1 className="font-russo text-5xl uppercase tracking-tighter mb-2">
          RSVP <span className="text-primary">Config</span>
        </h1>
        <p className="opacity-60 mb-10">Confirm your presence for the IRIS X Final Release.</p>

        <form className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
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

          {/* Food Preference (DaisyUI Radio) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-russo uppercase tracking-widest text-xs opacity-70">Fuel Type (Meal)</span>
            </label>
            <div className="flex gap-4">
              <label className="label cursor-pointer gap-2">
                <input type="radio" name="food" className="radio radio-primary" defaultChecked/>
                <span className="label-text">Non-Veg</span>
              </label>
              <label className="label cursor-pointer gap-2">
                <input type="radio" name="food" className="radio radio-primary" />
                <span className="label-text">Veg</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full rounded-full h-14 mt-4 font-russo uppercase tracking-widest text-lg">
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