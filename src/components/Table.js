import { useState } from 'react'
import ReactTable from 'react-table-v6'
import { Icon } from '@iconify/react'
import FireIcon from '@iconify/icons-mdi/fire-alert'
import StormIcon from '@iconify/icons-mdi/weather-hurricane'
import VolcanoIcon from '@iconify/icons-mdi/terrain'
import SeaIcon from '@iconify/icons-mdi/waves'
import UnknowTypeIcon from '@iconify/icons-mdi/alarm-off'

import InfoBox from './LocationInfoBox'


const Table = ({ events }) => {

    const [locationInfo, setLocationInfo] = useState({ show: false, data: null })

    const onClose = () =>{
        console.log('close')
        setLocationInfo({ show: false, data: null })
    }

    const displayIcon = ({ id, title }) => {
        switch (id) {
            case 8: return <span className="fire"><Icon icon={FireIcon} /> {title}</span>
            case 10: return <span className="storm"><Icon icon={StormIcon} /> {title}</span>
            case 12: return <span className="volcano"><Icon icon={VolcanoIcon} /> {title}</span>
            case 15: return <span className="sea"><Icon icon={SeaIcon} /> {title}</span>
            default: return <span className="unknow"><Icon icon={UnknowTypeIcon} /> {title}</span>
        }
    }

    const data = events
    const columns = [
        {
            Header: "ID",
            accessor: 'id',
            minWidth: 150,
        },
        {
            Header: "Category",
            accessor: 'categories[0]',
            Cell: props => displayIcon(props.value),
            minWidth: 200,
        },
        {
            Header: "Title",
            accessor: 'title',
            minWidth: 400,
        }
    ]

    const getTdProps = (state, rowInfo, column, instance) => {
        return {
            onClick: (e, handleOriginal) => {
                // console.log('A Td Element was clicked!')
                // console.log('it produced this event:', e)
                // console.log('It was in this column:', column)
                // console.log('It was in this row:', rowInfo)
                // console.log('It was in this table instance:', instance)

                setLocationInfo({
                    show: true,
                    data: rowInfo.original
                })
                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.
                if (handleOriginal) {
                    handleOriginal()
                }
            }
        }
    }

    return (
        <div>
            <ReactTable
                data={data}
                columns={columns}
                getTdProps={getTdProps}
            />
            { locationInfo.show && <InfoBox info={locationInfo.data} close={onClose}/>}
        </div>
    )
}

export default Table
