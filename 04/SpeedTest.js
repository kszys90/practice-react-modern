import React, { useEffect, useRef } from 'react'
import useRandomItem from './hook'

// eslint-disable-next-line react/function-component-definition
const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript'])
    const [text, setText] = React.useState('')
    const [time, setTime] = React.useState(0)
    const intervalID = useRef(null)
    const [timeStamp, setTimeStamp] = React.useState(0)
    const [taskTime, setTaskTime] = React.useState(0)
    const [taskLength, setTaskLength] = React.useState(0)
    const [length, setLength] = React.useState(0)



    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (text === word) {
            // eslint-disable-next-line no-console
            regenerateWord()
            setTimeStamp(time)
            setTaskTime(() => time - timeStamp)
            setTaskLength(text.length)
            setLength(prev => prev + text.length)
            setText('')

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    function handleBlur() {
        clearInterval(intervalID.current)
    }

    function handleFocus() {
        intervalID.current = setInterval(() => { setTime((prevTime) => prevTime + 1) }, 1000)
    }

    return (
        <div>
            <h3>current word:</h3>
            <h1>{word}</h1>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <h2>Time: {time}</h2>
            <br />
            <h2>RESULTS:</h2>
            <h3>Previous Round: </h3>
            <p>time: {taskTime}</p>
            <p>letters: {taskLength}</p>
            <p>pace[letters/s]: {taskTime !== 0 ? taskTime / taskLength : 'task is not finished!'}</p>
            <br />
            <h3>Summary Stats: </h3>
            <p>time: {time}</p>
            <p>letters: {length}</p>
            <p>pace[letters/s]: {time !== 0 ? length / time : 'start challenge!'}</p>

        </div>
    )
}

export default SpeedTest
