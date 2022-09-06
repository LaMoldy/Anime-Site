import './hamburger.css';

import { FC, useState } from 'react';

import { ROUTES } from '../../App';

export const Hamburger: FC = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    
    function toggleMenu() {
        setIsDisplayed(!isDisplayed);
    }

    return (
        <div>
            {
                isDisplayed && (
                    <div className={"menu"}>
                        <ul>
                            <li>
                                <a href={ROUTES.home}>Home</a>
                            </li>
                            <li onClick={toggleMenu}>
                                <p className={"mouse-pointer"}><b>Close</b></p>
                            </li>
                        </ul>
                    </div>
                )
            }
            {
                !isDisplayed && (
                    <div 
                        className={"hamburger-icon flex-column"}
                        onClick={toggleMenu}>
                        <div className={"line"}></div>
                        <div className={"line"}></div>
                        <div className={"line"}></div>
                    </div>
                )
            }
            <div 
                onClick={toggleMenu}>
            </div>
        </div>
    );
}
