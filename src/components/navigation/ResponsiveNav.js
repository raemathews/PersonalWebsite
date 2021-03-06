import React, { useState, useEffect } from 'react';
import { BurgerMenu } from './BurgerMenu';
import { Burger } from './Burger';
import { DesktopNav } from './DesktopNav';

function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {

        function handleResize() {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export function ResponsiveNav(options) {

    const size = useWindowSize();
    const [open, setOpen] = useState(false);

    return (
        <>
            {((size.width < 1000)) || (size.height < 600) ?
                <>
                    <Burger open={open} setOpen={setOpen} />
                    <BurgerMenu options={options} open={open} setOpen={setOpen} />
                </>
                :
                <DesktopNav options={options} />

            }
        </ >
    )
}

export default ResponsiveNav;
