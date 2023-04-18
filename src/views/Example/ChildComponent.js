import React from 'react';

// đặt tên class giống tên file

class ChildComponent extends React.Component {
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
        lastName: ''
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
        // this.props kiem tra duoc cai data từ thèn cha truyền xuống
        // kiểu dữ liệu luôn là object.
        console.log('>> check props: ', this.props)

        //c1:
        // let name = this.props.name;
        // let age = this.props.age;

        //c2:
        let { name, age } = this.props; // đặt tên biến giống y key trong object thì mới đc

        return (
            <>
                <div>
                    {/* truyền biến name từ component cha xuống thèn con */}
                    {/* This is a Child Component : {this.props.name} - {this.props.age} year old */}
                    This is a Child Component : {name} - {age} year old
                </div>
            </>
        )
    }// end component
}


// khi muốn sử dụng cái class này để đến cái file khác sử dụng thì export nó
export default ChildComponent;
