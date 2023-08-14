import React from "react";
import '../scss/Chart.scss'

function Chart() {

    const BarCreator = ({ numBars, color, prio }) => {
        const bars = []

        for (let i = 0 ; i < numBars ; i++) {
            bars.push(<div key={i} className="bar" style={{height: (Math.floor(Math.random() * 200) + prio) }}></div>)
        }
        
        return <div className={`bars ${color}-bars`}>{bars}</div>

    }

    return(
        <div id='chart'>
            <div className="bottom">
                <BarCreator numBars={5} color='blue' prio={150}/>
            </div>
            <div className="bottom">
                <BarCreator numBars={5} color='orange' prio={50}/>
            </div>
            <div className="bottom">
                <BarCreator numBars={5} color='yellow' prio={0}/>
            </div>
        </div>
    )
}

export default Chart;