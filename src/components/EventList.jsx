import React from "react";

function EventList({ events }) {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Veranstaltungen</h2>
            {events.length === 0 ? (
                <p className="text-center text-muted">Keine Veranstaltungen geplant.</p>
            ) : (
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Typ</th>
                        <th>Öffentlich</th>
                        <th>Teilnehmer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td>{event.name}</td>
                            <td>{event.type}</td>
                            <td>{event.public ? "Ja" : "Nein"}</td>
                            <td>{event.participants || "N/A"}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default EventList;
