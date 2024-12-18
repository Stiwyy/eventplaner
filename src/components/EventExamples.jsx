import React from "react";
import images from "../img/images.jpg"

/**
 * EventExamples component
 * @author Peter Rutschmann
 * @param events
 * @returns {Element}
 * @constructor
 */
function EventExamples({events}) {
    return (
        <div>
            <h2>Ideen für Events</h2>
            <section>
                <header>
                    <h2>Events für jeden Geschmack</h2>
                    <p>Lassen Sie sich inspirieren</p>
                </header>
                <aside>
                    <h3>Wein Degustation</h3>
                    <img
                        src={images}
                        alt="Freiluft Kino unter Sternenhimmel"
                        style={{width: "100%", borderRadius: "8px", marginTop: "1rem"}}
                    />
                    <p>Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus,</p>
                    <p><small>*dies Jahr zu Pinot Noir</small></p>
                </aside>
                <aside>
                    <h3>Freiluft Kino</h3>
                    <p>
                        Das Freiluft Kino ist das Highlight des Sommers! Genieße unvergessliche Filmabende unter freiem
                        Himmel
                        mit Freunden und Familie. Packe deine Picknickdecke, Snacks und gute Laune ein und erlebe
                        Klassiker
                        sowie aktuelle Filme in einer einzigartigen Atmosphäre.
                        <sup> Das Sommer-Event</sup>
                    </p>
                    <img
                        src={images}
                        alt="Freiluft Kino unter Sternenhimmel"
                        style={{width: "100%", borderRadius: "8px", marginTop: "1rem"}}
                    />
                </aside>
                <aside>
                    <h3>Herbstmarkt</h3>
                    <p>voluptates repudiandae sint et molestiae non recusandae.
                        Itaque earum rerum hic tenetur a sapiente delectus.
                    </p>
                    <img
                        src={images}
                        alt="Freiluft Kino unter Sternenhimmel"
                        style={{width: "100%", borderRadius: "8px", marginTop: "1rem"}}
                    />
                    <p>ut aut reiciendis voluptatibus
                        maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                </aside>
            </section>
        </div>
    );
};

export default EventExamples;