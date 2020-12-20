import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading"/>
            <p>Fetching Data</p>
        </div>
    )
}

export default Loader
