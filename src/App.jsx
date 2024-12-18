import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventHome from "./components/EventHome";
import EventExamples from "./components/EventExamples";

const App = () => {
    const [events, setEvents] = useState([
        {
            name: "Freiluft Kino",
            type: "Outdoor",
            public: true,
            participants: 150,
        },
    ]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
        <Router>
            <div>
                <header className="bg-primary text-white py-3">
                    <h1 className="text-center">Event-Planer</h1>
                </header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            Home
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/examples">
                                        Beispiele
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/form">
                                        Neue Veranstaltung
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/list">
                                        Veranstaltungen
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="container mt-4">
                    <Routes>
                        <Route path="/" element={<EventHome />} />
                        <Route path="/examples" element={<EventExamples />} />
                        <Route path="/form" element={<EventForm onAddEvent={addEvent} />} />
                        <Route path="/list" element={<EventList events={events} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
