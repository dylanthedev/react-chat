import React, { Component } from 'react'

class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    onChange(e) {
        this.setState({ username: e.target.value })
    }

    render() {
        const styles = {
            div: {
                margin: '0',
                textAlign: 'center'
            },
            form: {
                margin: '0'
            },
            input: {
                height: '50px',
                width: '300px',
                border: 'none',
                borderBottom: '1px solid black',
                padding: '3px',
                margin: '5px',
                fontSize: '18px',
                
            },
            button: {
                height: '50px',
                width: '100px',
                border: 'none',
                color: 'f1f1f1',
                backgroundColor: 'f1f1f1',
                padding: '3px',
                fontSize: '18px',
                
            },
            ':hover': {
                color: 'white'
            }
        }
        return(
            <div>
                <div style={styles.div}>
                    <h1>Welcome to ReactChat</h1>
                    
                    <form style={styles.form} onSubmit={this.onSubmit}>
                        <input style={styles.input} type="text" placeholder="Enter your username" onChange={this.onChange}/>
                        <input style={styles.button} type="submit" />
                    </form>
                </div>
            </div>
        )
    }  
}

export default UsernameForm