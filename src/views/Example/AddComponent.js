import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    // envent change first name
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    // event change last name
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    // arrow function submit
    handleSubmit = (event) => {
        event.preventDefault() // hàm này ngăn chặn việc load lại website 
        console.log(">>> check data input: ", this.state)
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 111),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })

    }


    render() {
        return (
            <>
                {/* tạo một form  */}
                <form action="/action_page.php">
                    <label htmlFor="fname">Job's Title:</label>
                    <br />

                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label>
                    <br />

                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br />

                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />

                </form>

            </>
        )
    }


}

export default AddComponent;