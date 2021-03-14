import { createContext, useEffect, useState } from "react";
const MOBILE_MAX_WIDTH = 512;

const Context = createContext();
export function Provider({ children }) {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < MOBILE_MAX_WIDTH; //width under MOBILE_MAX_WIDTH
  const headerHeight = mobile ? 64 : 96;
  const mainHeight = windowSize.height - headerHeight;
  const scrollBarWidth =
    windowSize.width - document.documentElement.clientWidth;
  const serviceNavWidth = mobile ? 96 : 256;
  const serviceWidth = windowSize.width - serviceNavWidth - scrollBarWidth;

  const theme = {
    main: { height: mainHeight + "px" },
    header: { zIndex: 8, height: headerHeight + "px" },
    ourServices: {
      serviceWidth: serviceWidth + "px",
      serviceNavWidth: serviceNavWidth + "px",
      serviceNavZIndex: 7,
    },
    common: {
      infoIconBox: {
        order: mobile ? 2 : 0,
        flexDirection: mobile ? "column" : "row",
        iconWidth: mobile ? "50%" : "100%",
      },
      iconText: {
        iconWidth: mobile ? "50%" : "50%",
        fontSize: mobile ? ".5rem" : "1rem",
      },
    },
  };
  return (
    <Context.Provider value={{ theme, windowSize, mobile, mainHeight }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
//useWindowSize
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    scrollWidth: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
