import React from "react"
import Joke from "./Joke"

function App () {
    return (
        <div>
            <Joke 
                punchLine="I don't know, but the flag is a big plus!"
            />
            <Joke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />
            <Joke 
                question="Hear about the new restaurant called Karma?" 
            />
            <Joke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />
            <Joke 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            />
        </div>
    )
}

export default App