import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';


const LogItem = ({log}) => {
    return (
        <li className="collection-item">
            <div>
               <a 
                 href="#!"
                 className={`modal-trigger ${log.working ? 'red-text':'blue-text'}`}>{''}</a>
                 <a href="#edit-log-modal" className="modal-trigger secondary-content">+Add</a>
               <br/>
               <span className="grey-text">
                    <span className="black-text">{log.tech}</span>{' '}
                    <span className="blac-text">ID #{log.id}</span> <br/> Surveyed on {' '}
                    <Moment format="MMM Do YYYY, h:mm:ss a'"></Moment>
               </span>
               <a href="#!" className="secondary-content">-Remove</a>
               </div>
               <br/>   
               
          
        
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired
    
}

export default LogItem;