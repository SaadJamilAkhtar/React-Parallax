import './moon.png'
import './cat.gif'
import './land.png'
import './App.css'
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

function App() {
    return (
        <div className={'Main'}>
            <Parallax pages={4}>
                <ParallaxLayer>
                    <div className="centerContent">
                        <h2>Welcome to My Web</h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer>
                    <div className="centerContent">
                        <h2>The Parallax Effect</h2>
                    </div>

                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default App;
