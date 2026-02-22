import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.1]"></div>
      <nav className="navbar px-8 pt-6">
        <div className="flex-1">
          <span className="font-russo text-2xl tracking-tighter uppercase">
            IRIS
          </span>
        </div>
      </nav>

      <main className="flex flex-col items-center pt-20 px-4">
        {/* Main Headline */}
        <div className="max-w-5xl text-center">
          <h1 className="font-russo text-6xl md:text-9xl uppercase leading-[0.85] tracking-tighter">
            Commit. Push. <br />
            <span className="text-primary italic">Graduate.</span>
          </h1>

          {/* Bento Grid Container */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">

            {/* Card 1: Main RSVP (Spans 2 columns) */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm flex flex-col justify-between">
              <div className="text-left">
                <span className="text-primary font-russo text-xs uppercase tracking-[0.2em]">Deployment Status</span>
                <p className="mt-4 text-xl leading-snug opacity-90">
                  The final pull request has been merged. Join us for the official
                  farewell celebration of the Batch of 2026.
                </p>
              </div>
              <div className="mt-8">
                <Link href={"/rsvp"}>
                  <button className="btn btn-primary rounded-full btn-lg h-16 px-8 flex items-center gap-3 group w-full md:w-auto">
                    <span className="font-bold">RSVP NOW</span>
                    <div className="bg-black/20 rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </button>

                </Link>
              </div>
            </div>

            {/* Card 2: Venue Details (Accent Card) */}
            <div className="bg-secondary text-white p-8 rounded-3xl flex flex-col justify-between shadow-xl">
              <div className="text-left">
                <span className="font-russo text-xs uppercase tracking-[0.2em] opacity-80">Location</span>
                <h2 className="font-russo text-3xl mt-2 leading-none uppercase tracking-tighter">Some <br /> Restaurant</h2>
                <p className="mt-4 text-sm opacity-90 font-medium tracking-tight">Near Some Place, Mangalore</p>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div className="text-left">
                  <span className="block text-xs uppercase opacity-70 tracking-widest">Save the Date</span>
                  <span className="text-2xl font-bold font-russo tracking-tighter">MAR 20</span>
                  <span className="block text-xs font-bold opacity-80">AT 5:30 PM</span>
                </div>
                <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
                  <span className="text-xl">📍</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-20 mb-10 flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 font-russo text-[10px] md:text-xs uppercase tracking-[0.3em]">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Local: 127.0.0.1</div>
          <div>Branch: Main</div>
          <div>Build: Successful</div>
          <div>Year: 2026</div>
          <div>Author: Team IRIS</div>
        </div>
      </main>
    </div>
  );
}