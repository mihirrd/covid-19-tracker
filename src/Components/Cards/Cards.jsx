import React from 'react'
import styles from './Cards.module.css'
import CountUp from 'react-countup'


function Cards({data: {confirmed, recovered, deaths, lastUpdate}} ) {
    if(!confirmed){
        return "Loading..."
    }
    
    return (
        <div className = {styles.container}>
            <div className = {styles.active}>
                <h3 style={{color:'gray'}}>Active</h3>
                <CountUp className={styles.data_act}
                    start = {0}
                    end = {confirmed.value}
                    duration = {1.5}
                    seperator=","
                />
            </div>

            <div className = {styles.recovered}>
                <h3 style={{color:'gray'}}>Recovered</h3>
                <CountUp className={styles.data_rec}
                    start = {0}
                    end = {recovered.value}
                    duration = {1.5}
                    seperator=","
                />
            </div>

            <div className = {styles.deaths}>
                <h3 style={{color:'gray'}}>Deaths</h3>
                <CountUp className={styles.data_death}
                    start = {0}
                    end = {deaths.value}
                    duration = {1.5}
                    seperator=","
                />
            </div>
          
        </div>
    )
}

export default Cards

