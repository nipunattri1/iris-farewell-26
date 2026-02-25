'use client';
import { useState } from 'react';
import { deleteResponse } from '../letter/actions/responses';

export function DeleteButton({ id }: { id: number }) {
    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {
        setIsDeleting(true);
        await deleteResponse(id);
        setIsDeleting(false);
    }

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`text-[10px] font-bold uppercase tracking-tighter border border-red-800 text-red-800 px-2 py-0.5 hover:bg-red-800 hover:text-white transition-all ${isDeleting ? 'opacity-30' : ''}`}
        >
            {isDeleting ? 'Purging...' : 'Delete'}
        </button>
    );
}