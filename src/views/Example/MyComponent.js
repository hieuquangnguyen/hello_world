import React from 'react';

// import component con
import ChildComponent from './ChildComponent';

import AddComponent from './AddComponent';

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
        arrJobs: [
            { id: '1', title: 'Developer', salary: '500' },
            { id: '2', title: 'Tester', salary: '400' },
            { id: '3', title: 'Project Manager', salary: '1000' }

        ]
    }

    addNewJob = (Job) => {
        console.log('check job from parent: ', Job)
        //c1
        let currentJobs = this.state.arrJobs;
        currentJobs.push(Job);

        //
        this.setState({
            //c1
            arrJobs: currentJobs

            //c2
            // [] tạo array
            // ... toán tử coppy
            // job kiểu là một phần tử mới
            //arrJobs: [...this.state.arrJobs, Job]

        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);

        this.setState({
            arrJobs: currentJobs
        })
    }

    // re-render when setState
    render() {
        console.log('>>> render', this.state)
        // hàm return phải return về MỘT khối code. 
        return (
            <>
                <AddComponent

                    // truyền props sang con
                    addNewJob={this.addNewJob} // vi addNewJob có thuộc tính Job nên chúng ta khi truyen khong co dau () addNewJob = {this.addNewJob()}

                />

                <ChildComponent
                    // name là một props
                    // cú pháp: tên biến hoặc thuộc tính = { 'data' }
                    // name={this.state.firstName}
                    // age={'23'}
                    // address={'Da Nang'}
                    arrayJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

                {/* <ChildComponent name={'child 2'} />
                <ChildComponent name={'child 3'} /> */}

            </>
        )
    }// end component
}


// khi muốn sử dụng cái class này để đến cái file khác sử dụng thì export nó
export default MyComponent;
