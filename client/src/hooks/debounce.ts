import { useEffect, useState } from "react";



export default function useDebounce(value: string, delay: number = 300) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {

        const timerId =  setTimeout(() => {
            setDebounced(value)
        }, delay);
        return () => clearTimeout(timerId)

    }, [value, delay])


    return debounced
}