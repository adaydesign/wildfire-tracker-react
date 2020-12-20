import { useState, useEffect } from 'react'
import Table from './components/Table'
import Loader from './components/Loader'
import Header from './components/Header'
const App = () => {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const fetchEvent = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')

      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }

    fetchEvent()
  }, [])
  return (<>
    <Header />
    <div className="app">
      {!loading ? <Table className="table" events={eventData} /> : <Loader />}
    </div>
  </>
  )
}

export default App;
