import {TypeAnimation} from "react-type-animation";

import './Styles/NameAnimation.css';

const NameAnimation = () => {
    return (
        <div className={`name-container`}>
            <TypeAnimation
                sequence={['Gavin Lynch', 1000]}
                wrapper="span"
                cursor={true}
                speed={200}
                className="typing-animation"
            />
        </div>
    );
};

export default NameAnimation;
