import React from 'react'
import * as styles from './style.module.css'

export default function Spinner() {
    return (
        <div>
            <div class={styles.loader}></div>
        </div>
    )
}
