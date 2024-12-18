import React, { useState } from "react";

/**
 * EventForm component
 * @author Peter Rutschmann
 * @param onAddEvent
 * @returns {Element}
 */
function EventForm({onAddEvent}) {
    const [eventName, setEventName] = useState("");
    const [eventType, setEventType] = useState("Meeting");
    const [isPublic, setIsPublic] = useState(false);
    const [participantCount, setParticipantCount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            name: eventName,
            type: eventType,
            public: isPublic,
            participants: participantCount,
        };
        onAddEvent(newEvent);
        setEventName("");
        setEventType("Meeting");
        setIsPublic(false);
        setParticipantCount("");
    };

    return (
        <>
            <h2>Event erfassen</h2>
            <form onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
                <div>
                    <label>Veranstaltungsname: </label>
                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Typ: </label>
                    <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                        <option value="Meeting">Meeting</option>
                        <option value="Party">Party</option>
                        <option value="Workshop">Workshop</option>
                    </select>
                </div>
                <div>
                    <label>
                        Öffentlich:
                        <input
                            type="checkbox"
                            checked={isPublic}
                            onChange={(e) => setIsPublic(e.target.checked)}
                        />
                    </label>
                </div>
                <div>
                    <label>Teilnehmeranzahl: </label>
                    <input
                        type="number"
                        value={participantCount}
                        onChange={(e) => setParticipantCount(e.target.value)}
                    />
                </div>
                <button type="submit">Hinzufügen</button>
            </form>
        </>
    );
};

export default EventForm;