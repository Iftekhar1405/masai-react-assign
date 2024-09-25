import { useState } from "react";

const useToggle = (a, b = 0) => {
    const initialIndex = a.length > b ? b : 0;
    
    const [index, setIndex] = useState(initialIndex);

    const toggleState = () => {
        setIndex((prevIndex) => 
            prevIndex < a.length - 1 ? prevIndex + 1 : 0
        );
    };

    return [a[index], toggleState];
};

export default useToggle;
