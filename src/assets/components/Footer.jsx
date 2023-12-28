import React, { useState, useRef, useEffect } from 'react';
import image from "../images/me.jpg";

const Footer = () => {
    const [showText, setShowText] = useState(false);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                textRef.current &&
                !textRef.current.contains(event.target) &&
                imageRef.current &&
                !imageRef.current.contains(event.target)
            ) {
                setShowText(false);
            }
        };

        const handleScroll = () => {
            // Set the threshold to 80% of the page height
            const threshold = 0.98;
            const scrollPosition =
                window.innerHeight + window.scrollY;
            const triggerPosition = threshold * document.body.offsetHeight;

            if (scrollPosition >= triggerPosition) {
                setShowText(true);
            } else {
                setShowText(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer>
            <img
                src={image}
                id="me"
                onClick={() => {
                    setShowText(!showText);
                }}
                ref={imageRef}
            />
            {showText ? (
                <div className="text" ref={textRef}>
                    <p className="attribution">
                        Made with ❤️ by <a href="#">Saad Hesham</a>.
                    </p>
                </div>
            ) : null}
        </footer>
    );
};

export default Footer;
