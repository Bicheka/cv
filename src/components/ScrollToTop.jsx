import {useEffect} from "react";
import {useLocation} from "react-router-dom";

// This component makes the page scroll to the top when the route changes
export default function ScrollToTop() {
    const {pathname} = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}