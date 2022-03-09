import React from 'react'
import styles from './styles.module.css'

function BoontarTVWidget(props) {
    return (<iframe id="boontar-tv-widget" src={`https://boontar.tv/get${props.getId}`} width="100%" height="100%" frameBorder="0">
                Your browser does not support iframes!
            </iframe>);
}

export default BoontarTVWidget;