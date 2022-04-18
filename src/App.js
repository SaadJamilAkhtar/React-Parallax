import moon from './moon.png'
import cat from './cat.gif'
import land from './land.png'
import './App.css'
import {Parallax} from "react-spring/addons";
import {ParallaxLayer} from "react-spring/addons";

function App() {
    return (
        <div className={'Main'}>
            <Parallax pages={3}>
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage: `url(${moon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '-8rem, 0rem'
                    }}
                />

                <ParallaxLayer
                    offset={1}
                    speed={1}
                    factor={4}
                    style={{
                        backgroundImage: `url(${land})`,
                        backgroundSize: 'cover'
                    }}
                />

                <ParallaxLayer
                    offset={0.2}
                    speed={0.05}
                >
                    <div className="centerContent">
                        <h2>Welcome to My Web</h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={2}
                >
                    <div className="centerContent">
                        <h2>The Parallax Effect</h2>
                    </div>
                </ParallaxLayer>

                {/*<ParallaxLayer*/}
                {/*    sticky={{*/}
                {/*        start: 0.8, end: 2.2*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <div className="centerContent">*/}
                {/*        <img src={cat} alt=""/>*/}
                {/*    </div>*/}
                {/*</ParallaxLayer>*/}
            </Parallax>
        </div>
    );
}

export default App;
