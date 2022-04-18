import moon from './moon.png'
import cat from './cat.gif'
import land from './land.png'
import './App.css'
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

function App() {
    return (
        <div className={'Main'}>
            <Parallax pages={4}>
                <ParallaxLayer
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage: `url(${moon})`,
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="centerContent">
                        <h2>Welcome to My Web</h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={1}
                    factor={4}
                    style={{
                        backgroundImage: `url(${land})`,
                        backgroundSize: 'cover'
                    }}
                >
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
