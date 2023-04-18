import React from 'react';

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
        name: 'Hieu',
        channel: 'sts_Hieu'
    }

    // trong vi du duoi kia
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    // arrow function
    handleClickButton = () => {
        alert('click me !')
    }

    render() {
        //let name = 'Hieu';

        // hàm return phải return về MỘT khối code. 
        return (
            <>
                <div className='first'>
                    {/* khi muốn dùng javaScript thì mở ngoặc nhọn {} */}
                    {/* Hello my Component, My name is {this.state.name} */}

                    {/* một ví dụ nhỏ về state */}

                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state['name']}
                    {/* CACH 2 */}
                    {/* Hello my Component, My name is {this.state['name']} */}
                </div>

                <div className='second'>
                    My tiktok channel : {this.state.channel}
                </div>

                <div className='third'>
                    <button onClick={() => { this.handleClickButton() }}> Click me </button>
                </div>

            </>
        )
    }// end component
}


// khi muốn sử dụng cái class này để đến cái file khác sử dụng thì export nó
export default MyComponent;
