import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'


const Search = ({ setAlert }) => {
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
            {githubContext.users.length > 0  && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers} >Clear</button>}
            
        </div>
    )
    
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default Search
