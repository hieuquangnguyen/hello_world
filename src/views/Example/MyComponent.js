import React from 'react';

// import component con
import ChildComponent from './ChildComponent';

// đặt tên class giống tên file

class MyComponent extends React.Component {
    /* shift + Alt + A để tạo ra cmt khối */
    /* 
    *
    * JSX : return block
    * tragment:
    * state: những dữ liệu có thể thay đổi, giúp cần cập nhập dữ liệu mà không cần phải load lại trang. Khi giá trị của state thay đổi thì JSX tự động thay đổi. 
    * 
    */

    // KEY: VALUE
    // state như một object
    state = {
        firstName: '',
        lastName: '',
        address: '',
        arrJobs: [
            { id: '1', tittle: 'Developer', salary: '500' },
            { id: '2', tittle: 'Tester', salary: '400' },
            { id: '3', tittle: 'Project Manager', salary: '1000' }

        ]
    }

    // envent change first name
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    // event change last name
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    // arrow function submit
    handleSubmit = (event) => {
        event.preventDefault() // hàm này ngăn chặn việc load lại website 
        console.log(">>> check data input: ", this.state)
    }


    // re-render when setState
    render() {
        console.log('>>> render', this.state)
        // hàm return phải return về MỘT khối code. 
        return (
            <>
                {/* tạo một form  */}
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label>
                    <br />

                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label>
                    <br />

                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />

                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    // name là một props
                    // cú pháp: tên biến hoặc thuộc tính = { 'data' }
                    name={this.state.firstName}
                    age={'23'}
                    address={'Da Nang'}
                    arrayJobs={this.state.arrJobs}

                />

                {/* <ChildComponent name={'child 2'} />
                <ChildComponent name={'child 3'} /> */}

            </>
        )
    }// end component
}


// khi muốn sử dụng cái class này để đến cái file khác sử dụng thì export nó
export default MyComponent;
