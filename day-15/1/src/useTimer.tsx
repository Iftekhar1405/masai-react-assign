import { useRef, useState } from "react"


const useTimer = () => {

    const[timer,setTimer] = useState<number>(0)
    const[running,setRunning] = useState<boolean>(false)
    const timerInterval = useRef<NodeJS.Timout | null>(null)


    const startTimer = () => {
        if(!running){
        setRunning(true)

        timerInterval.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000);}
    }
    const resetTimer = () =>{
        setRunning(false)
        clearInterval(timerInterval.current)
        setTimer(0)
    }

    const stopTimer = () =>{
        setRunning(false)
        clearInterval(timerInterval.current)
    }

    return{startTimer,stopTimer,resetTimer,timer}
}

export default useTimer