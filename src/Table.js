

const Table = ({weather}) => {
  return (
    <div>
    {
        JSON.stringify(weather) =='{}'
        ? <table className="table">
        <tr className="list">
           <td>temp</td>
           <td>-</td>
        </tr>
        <tr className="list">
           <td>description</td>
           <td>-</td>
        </tr>
        <tr className="list">
           <td>country</td>
           <td>-</td>
        </tr>
        <tr className="list">
           <td>city</td>
           <td>-</td>
        </tr>
    
       </table>
        :
        <table className="table" >
            <tr className="temp" >
                <td>Temp</td>
                <td>{(weather.main.temp - 273.15).toFixed(2)}°C</td>
            </tr>
            <tr className="description" >
                <td>description</td>
                <td>{weather.weather[0].description}</td>
            </tr>
            <tr className="country" >
                <td>Country</td>
                <td>{weather.sys.country}</td>
            </tr>
            <tr className="city" >
                <td>City</td>
                <td>{weather.name}</td>
            </tr>
        </table>
}
    </div>
  )
}

export default Table