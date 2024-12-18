import React from "react";
import images from "../img/images.jpg";

function EventExamples() {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Ideen für Events</h2>
            <header className="text-center mb-5">
                <h3>Events für jeden Geschmack</h3>
                <p className="text-muted">Lassen Sie sich inspirieren</p>
            </header>
            <div className="row">
                {/* Wein Degustation */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img
                            src={images}
                            className="card-img-top"
                            alt="Wein Degustation"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Wein Degustation</h5>
                            <p className="card-text">
                                Et harum quidem rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat facere possimus.
                            </p>
                            <p className="text-muted"><small>*dies Jahr zu Pinot Noir</small></p>
                        </div>
                    </div>
                </div>
                {/* Freiluft Kino */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img
                            src={images}
                            className="card-img-top"
                            alt="Freiluft Kino"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Freiluft Kino</h5>
                            <p className="card-text">
                                Das Freiluft Kino ist das Highlight des Sommers! Genieße
                                unvergessliche Filmabende unter freiem Himmel mit Freunden und
                                Familie. Packe deine Picknickdecke, Snacks und gute Laune ein
                                und erlebe Klassiker sowie aktuelle Filme in einer einzigartigen
                                Atmosphäre.
                            </p>
                            <p className="text-muted"><sup>Das Sommer-Event</sup></p>
                        </div>
                    </div>
                </div>
                {/* Herbstmarkt */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img
                            src={images}
                            className="card-img-top"
                            alt="Herbstmarkt"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Herbstmarkt</h5>
                            <p className="card-text">
                                Voluptates repudiandae sint et molestiae non recusandae. Itaque
                                earum rerum hic tenetur a sapiente delectus.
                            </p>
                            <p className="card-text">
                                Ut aut reiciendis voluptatibus maiores alias consequatur aut
                                perferendis doloribus asperiores repellat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventExamples;
