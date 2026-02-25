import Link from "next/link";
import { allResponses } from "../letter/actions/responses";
import { DeleteButton } from "../components/deleteButton";

// Next.js passes searchParams to the page props automatically
export default async function ResponsesPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const password = (await searchParams).pass;
    const AUTHORIZED_PASS = "showhite";

    if (password !== AUTHORIZED_PASS) {
        return (
            <div className="min-h-screen bg-white font-serif flex items-center justify-center p-4">
                <div className="max-w-sm w-full border-2 border-black p-8 text-center">
                    <h1 className="text-sm text-black font-bold uppercase tracking-widest mb-6">Terminal Access Required</h1>
                    <form className="space-y-4">
                        <input
                            name="pass"
                            type="password"
                            placeholder="ENTER ACCESS KEY"
                            className="w-full bg-transparent border-b text-black border-black py-2 text-center focus:outline-none"
                        />
                        <button className="text-[12px] font-bold underline hover:bg-black text-black hover:text-white px-2 py-1 transition-all">
                            AUTHENTICATE
                        </button>
                    </form>
                    <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-tighter">
                        Unauthorized access is logged and reported.
                    </p>
                </div>
            </div>
        );
    }

    const responses = await allResponses();

    return (
        <div className="min-h-screen bg-white font-serif p-4 md:p-16 text-black">
            <div className="max-w-4xl mx-auto border-t-[3px] border-black pt-8">
                <div className="flex justify-between items-start mb-10">
                    <div className="space-y-1 text-sm">
                        <div className="grid grid-cols-[80px_1fr]">
                            <span className="font-bold">Access:</span>
                            <span className="bg-green-600 text-white px-1 w-fit uppercase text-[10px]">Granted</span>
                        </div>
                    </div>
                    <img src="/iris.svg" alt="IRIS Logo" className="w-24 h-auto opacity-90 brightness-0" />
                </div>

                <div className="mt-12 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black text-[11px] uppercase tracking-wider">
                                <th className="py-2 px-4">#</th>
                                <th className="py-2 px-4">Full Legal Name</th>
                                <th className="py-2 px-4">Roll Number</th>
                                <th className="py-2 px-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-[14px]">
                            {responses.map((response, index) => (
                                <tr key={response.id || index} className="border-b border-black/10 hover:bg-black/5 transition-colors group">
                                    <td className="py-3 px-4 font-mono text-[12px] text-gray-500">{String(index + 1).padStart(3, '0')}</td>
                                    <td className="py-3 px-4 font-bold">{response.name}</td>
                                    <td className="py-3 px-4 font-mono">{response.rollNo}</td>
                                    <td className="py-3 px-4 text-right">
                                        <DeleteButton id={response.id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12">
                    <Link href="/responses" className="text-[11px] text-gray-400 hover:text-black">Logout Session</Link>
                </div>
            </div>
        </div>
    );
}