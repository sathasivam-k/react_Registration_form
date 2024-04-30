// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
    state = {firstname: '', lastname: '', firstNameError: false, lastNameError: false, isForSubmit: false}

    onChangeFirstname = (event) => {
        this.setState({firstname: event.target.value})
    }

    onBlurFirstname = () => {
        const isValidateFirstName = this.validateFirstName()
        this.setState({firstNameError: !isValidateFirstName})
    }

    validateFirstName = () => {
        const {firstname} = this.state
        return firstname !== ""
    }

    onChangeLastname = (event) => {
        this.setState({lastname: event.target.value})
    }

    onBlurLasttname = () => {
        const isValidateLastName = this.validateLastName()
        this.setState({lastNameError: !isValidateLastName})
    }

    validateLastName = () => {
        const {lastname} = this.state
        return lastname !== ""
    }
    
    firstNameAccess = () => {
        const {firstname} = this.state
        return(
            <div>
                <label htmlFor="firstname">FIRST NAME</label>
                <input 
                    id="firstname"
                    value = {firstname}
                    type="text"
                    onChange={this.onChangeFirstname}
                    onBlur={this.onBlurFirstname}
                    placeholder="First name"
                />
            </div>
        )
    }


    lastNameAccess = () => {
        const {lastname} = this.state
        return(
            <div>
                <label htmlFor="lastname">LAST NAME</label>
                <input
                    id="lastname"
                    value={lastname}
                    type="text"
                    onChange={this.onChangeLastname}
                    onBlur={this.onBlurLastname}
                    placeholder="Last name"
                />
            </div>
        )
    }

    onSubmitFn = (event) => {
        event.preventDefault()
        const isValidateFirstName = this.validateFirstName()
        const isValidateLastName = this.validateLastName()
        if (isValidateFirstName && isValidateLastName) {
            this.setState({isForSubmit: true})
        }
        else{
            this.setState({isForSubmit: false, firstNameError: !isValidateFirstName, lastNameError: !isValidateLastName})
        }

    }

    renderRegForm = () => {
        const {firstNameError, lastNameError} = this.state
        return(
            <form onSubmit={this.onSubmitFn}>
                {this.firstNameAccess()}
                {firstNameError && <p>Required</p>}
                {this.lastNameAccess()}
                {lastNameError && <p>Required</p>}
                <button type="submit">Submit</button>
            </form>
        )
    }

    submitAnotherResponse = () => {
        this.setState((prevState) => ({isForSubmit: !prevState.isForSubmit, firstname: "", lastname: ""}))
    }
    
    successFn = () => (
        <>
            <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="success"/>
            <p>Submitted Successfully</p>
            <button type="button" onClick={this.submitAnotherResponse}>
                Submit Another Resopnse
            </button>
        </>
    )

    render() {
        const {isForSubmit} = this.state
        return (
        <div>
            <h1>Registration</h1>
            {isForSubmit ? this.successFn() : this.renderRegForm()}
        </div>
        )
    }
}

export default RegistrationForm
