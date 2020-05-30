import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLog} from '../../actions/logActions';


const AddLogModal = ({addLog}) => {
    const [work, setWork] = useState('');
    const [working, setWorking] = useState(false);
    const [tech, setTech] = useState(''); 
    
    const onSubmit = () => {
        const newLog = {
            work,
            working,
            tech,
            date: new Date()
        }
        addLog(newLog);
    }
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Employee Details</h4>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='work' value={work} onChange={e => setWork(e.target.value)} />
                        <label htmlFor="work" className="active">
                            Log Work
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                            <option value='' disabled>
                                Select Employee
                            </option>
                            <option value='john Doe'>john doe</option>
                            <option value='sam smith'>sam smith</option>
                            <option value='sara williams'>sara williams</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={working} value={working} onChange={e => setWorking(!working)} />
                                <span>Working</span>
                            </label> 
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    href="#!" 
                    onClick={onSubmit} 
                    className="modal-close waves-effect blue waves-light btn"
                    >
                        Enter
                        </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired
}


export default connect(null, {addLog})(AddLogModal);