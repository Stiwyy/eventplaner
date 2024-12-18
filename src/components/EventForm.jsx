import React, { useState } from "react";

function EventForm({ onAddEvent }) {
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
        <div>
            <h2 className="mb-4">Event erfassen</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Veranstaltungsname:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Typ:</label>
                    <select
                        className="form-select"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                    >
                        <option value="Meeting">Meeting</option>
                        <option value="Party">Party</option>
                        <option value="Workshop">Workshop</option>
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={isPublic}
                        onChange={(e) => setIsPublic(e.target.checked)}
                    />
                    <label className="form-check-label">Öffentlich</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Teilnehmeranzahl:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={participantCount}
                        onChange={(e) => setParticipantCount(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Hinzufügen
                </button>
            </form>
        </div>
    );
}

export default EventForm;
