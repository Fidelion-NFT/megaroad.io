import {container, body,image1,image2} from "./styles";
import game1Image from 'assets/game1.png';
import game2Image from 'assets/game2.png';
const GameInfo = () => (
    <div style={container}>
        <div style={body}>
            <img src={game1Image} style={image1}/>
            <img src={game2Image} style={image2}/>
        </div>
    </div>
);
export default GameInfo;