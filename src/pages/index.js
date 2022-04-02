import * as React from "react"
import "../../styles/index.css"

// markup
const IndexPage = () => {
    return (
        <main>
            <title>FMCgo</title>
            <h1>
                Hello FMCgo!
            </h1>
            <div className="drawers-container">
                <div id="carrefour" className="container">
                    <div className="cube">
                        <div className="side front">Carrefour</div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side back"></div>
                    </div>
                </div>
                <div id="pepsi" className="container">
                    <div className="cube">
                        <div className="side front">Pepsi</div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side back"></div>
                    </div>
                </div>
                <div id="desperados" className="container">
                    <div className="cube">
                        <div className="side front">Desperados</div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side back"></div>
                    </div>
                </div>
                <div id="heineken" className="container">
                    <div className="cube">
                        <div className="side front">Heineken</div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side back"></div>
                    </div>
                </div>
                <div id="develey" className="container">
                    <div className="cube">
                        <div className="side front">Develey</div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side back"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default IndexPage
