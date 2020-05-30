import React,{useEffect, useState} from 'react'
import LogItem from './LogItem';
import LogSurvey from './LogSurvey';


 const Logs = () => {
      const [logs, setLogs] = useState([]);
      const [loading, setLoading] = useState(false);
      const [tech, setTech] = useState('');

     useEffect(() => {
         getLogs();
         //es-lint-disable-next-line
     }, [])

      const getLogs = async () => {
          setLoading(true);
          const res = await fetch('/logs');
          const data = await res.json();

          setLogs(data);
          setLoading(false);
      }

     if(loading || logs === null){
         return <h4>Loading...</h4>
     }

    return (
        <div className="container">
        <ul className="collection with-header">
            <li className="collection-header">
            
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                            <option value='' disabled> 
                                Employee
                            </option>
                            <option value='john Doe'>john doe</option>
                            <option value='sam smith'>sam smith</option>
                            <option value='sara williams'>sara williams</option>
                        </select>
                    </div>
                
            </li>
            {!loading && logs.legth === 0 ? (<p className="center">No employees to show</p>) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>


        <ul className="collection with-header">
            <li className="collection-header">
            
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                            <option value='' disabled> 
                                Assigned Employee
                            </option>
                            <option value='ramu'>john doe</option>
                            <option value='shyam'>sam smith</option>
                            <option value='ram'>sara williams</option>
                        </select>
                    </div>
                
            </li>
            {!loading && logs.legth === 0 ? (<p className="center">No employees to show</p>) : (
                logs.map(log => <LogSurvey log={log} key={log.id} />)
            )}
        </ul>
        </div>
    )
}

export default Logs;