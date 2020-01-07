import React, { Component } from 'react'

class User extends Component {
    componentDidMount () {
        //pour avoir le login courant on utilise match.params
        this.props.getUser(this.props.match.params.login)
    }
    
    render() {
        const { name,avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } 
        =this.props.user

        const {loading} = this.props
        return (
            <div>
                Hello
                {name}
            </div>
        )
    }
}

export default User
