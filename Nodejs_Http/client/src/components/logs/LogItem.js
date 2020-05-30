import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logActions';


const LogItem = ({log, deleteLog, setCurrent}) => {
    const onDelete = () => {
        deleteLog(log.id);
    }
    return (
        <li className="collection-item">
            <div>
               <a 
                 href="#!"
                 className={`modal-trigger ${log.working ? 'red-text':'blue-text'}`}>{log.work}</a>
                 <a href="#edit-log-modal" className="modal-trigger secondary-content" onClick={() => setCurrent(log)} >+Add</a>
               <br/>
               <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span>{' '}
                    <span className="blac-text">{log.tech}</span> <br/> Surveyed on {' '}
                    <Moment format="MMM Do YYYY, h:mm:ss a'"></Moment>
               </span>
               <a href="#!" onClick={onDelete} className="secondary-content">-Remove</a>
               </div>
               <br/>   
               
          
        
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, {deleteLog, setCurrent})(LogItem);