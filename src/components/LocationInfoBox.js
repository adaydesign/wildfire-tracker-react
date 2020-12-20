import { Icon } from '@iconify/react'
import FireIcon from '@iconify/icons-mdi/fire-alert'
import StormIcon from '@iconify/icons-mdi/weather-hurricane'
import VolcanoIcon from '@iconify/icons-mdi/terrain'
import SeaIcon from '@iconify/icons-mdi/waves'
import UnknowTypeIcon from '@iconify/icons-mdi/alarm-off'

const LocationInfoBox = ({ info, close }) => {
    
    const displayIcon = ({ id, title }) => {
        switch (id) {
            case 8: return <span className="fire"><Icon icon={FireIcon} /> {title}</span>
            case 10: return <span className="storm"><Icon icon={StormIcon} /> {title}</span>
            case 12: return <span className="volcano"><Icon icon={VolcanoIcon} /> {title}</span>
            case 15: return <span className="sea"><Icon icon={SeaIcon} /> {title}</span>
            default: return <span className="unknow"><Icon icon={UnknowTypeIcon} /> {title}</span>
        }
    }

    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
                <li>DESCRIPTION: <strong>{info.description}</strong></li>
                <li>CATEGORIES: <strong>{displayIcon(info.categories[0])}</strong></li>
                <li>LINK: <strong><a href={info.link} target="_blank" rel="noreferrer">{info.link}</a></strong></li>
            </ul>
            <p>GEOMETRIES</p>
            <ul>
                {
                    info.geometries && info.geometries.map((g,index) => index < 5 && <li key={`g-${info.id}-${index}`}>COORDINATE: <strong>{g.coordinates[0]},{g.coordinates[1]}</strong></li>)
                }
            </ul>
            <button onClick={close}>close</button>
        </div>
    )
}

export default LocationInfoBox

