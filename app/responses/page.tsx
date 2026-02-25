'use server'

import { allResponses } from "../../letter/actions/responses"

export default async function ResponsesPage() {
    const responses = allResponses();
    return (
        (await responses).map((response) => <div>{response.name}</div>)
    )
}