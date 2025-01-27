import React,{ useState, useEffect }  from 'react';
import { FaAngleUp } from 'react-icons/fa';

import './index.css';

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 50,
            behavior: 'smooth',
        });
    };
    return (
        <div className="top-to-btm">
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        </div>
    );
};
export default ScrollToTop;