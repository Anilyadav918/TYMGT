import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { updateLog } from '../../actions/logActions';


const EditLogModal = ({current, updateLog}) => {
    const [work, setWork] = useState('');
    const [working, setWorking] = useState(false);
    const [tech, setTech] = useState(''); 


    useEffect(() => {
        if(current){
            setWork(current.work);
            setWorking(current.working);
            setTech(current.tech);
        }
    }, [current])

    const onSubmit = () => {
        const updLog = {
            id: current.id,
            work: current.work,
            tech: current.tech,
            working: current.working,
            date: new Date()
        }
        updateLog(updLog);
    }
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Employee Details</h4>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='work' value={work} onChange={e => setWork(e.target.value)} />
                        
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
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

EditLogModal.propTypes = {
    current: PropTypes.object.isRequired,
    updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, {updateLog})(EditLogModal);