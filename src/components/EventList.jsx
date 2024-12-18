import React from "react";

/**
 * EventList component
 * @author Peter Rutschmann
 * @param events
 * @returns {Element}
 * @constructor
 */
function EventList({events}) {
    return (
        <div>
            <h2>Veranstaltungen</h2>
            {events.length === 0 ? (
                <p>Keine Veranstaltungen geplant.</p>
            ) : (
                <table border="1" style={{width: "100%", borderCollapse: "collapse"}}>
                    <thead>
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
};

export default EventList;