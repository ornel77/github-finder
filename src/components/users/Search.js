import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'


const Search = ({ showClear, clearUsers,setAlert }) => {
    const githubContext = useContext(GithubContext)
    const [text, setText] = useState('')
    
    
    const onChange = (e) => setText(e.target.value)
    
    const onSubmit =(e) => {
        if(text==='') {
            setAlert('Please enter something', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('')
        }
        
        e.preventDefault()
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit} >
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    value={text} 
                    onChange={onChange}
                />
                <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"
                />
            </form>
            {/* Si showClear est vrai alors le bouton apparait */}
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers} >Clear</button>}
            
        </div>
    )
    
}

Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search
