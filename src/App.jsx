import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './css/mvp.css';
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventHome from "./components/EventHome";
import EventExamples from "./components/EventExamples.jsx";

/**
 * @author Andrin Renggli
 * @version 11.12.2024
 */
const App = () => {
    const [events, setEvents] = useState([
        {
            name: "Freiluft Kino",
            type: "Outdoor",
            public: true,
            participants: 150,
        }
    ]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
        <Router>
            <div>
                <h1>Event-Planer</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/examples">Beispiele</Link></li>
                        <li><Link to="/form">Neue Veranstaltung</Link></li>
                        <li><Link to="/list">Veranstaltungen</Link></li>
                    </ul>
                </nav>
                <hr />

                <Routes>
                    <Route path="/" element={<EventHome />} />
                    <Route path="/examples" element={<EventExamples />} />
                    <Route path="/form" element={<EventForm onAddEvent={addEvent} />} />
                    <Route path="/list" element={<EventList events={events} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
