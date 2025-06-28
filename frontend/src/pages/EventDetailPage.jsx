import { useParams } from "react-router-dom"

export default function EventDetailPage() {

    const param = useParams();


    return (
        <>
            <h1> Event Detail Page</h1>
            <p> Event mit ID: {param.id}</p>
        </>
    )
}