import React from 'react';

// đặt tên class giống tên file

// Đây là Class Component
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    // viết một arrow function
    // function thi viet ngoai render
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }


    // re-render when setState
    render() {
        // this.props kiem tra duoc cai data từ thèn cha truyền xuống
        // kiểu dữ liệu luôn là object.
        console.log('>> check props: ', this.props)

        //c1:
        // let name = this.props.name;
        // let age = this.props.age;

        //c2
        let { name, age, address, arrayJobs } = this.props; // đặt tên biến giống y key trong object thì mới đc
        let { showJobs } = this.state;

        // sử dụng cú pháp điều kiện, tối ưu code
        // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';

        return (
            <>
                {/* truyền biến name từ component cha xuống thèn con */}
                {/* This is a Child Component : {this.props.name} - {this.props.age} year old */}
                {/*  showJobs === true && khi sử dụng các dấu điều kiện thì phải có  <> </> | && ở đây có nghĩa là khi cái đó đúng thì thực hiện những cái phía sau && */}

                This is a Child Component : {name} - {age} year old - {address}
                {/* sau operator thì phải dùng <> </> */}
                {showJobs === false ?
                    <>
                        <div>
                            <button onClick={() => this.handleShowHide()}> Show </button>
                        </div>
                    </>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrayJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.tittle} - {item.salary} $
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}> Hide </button>
                        </div>
                    </>
                }

            </>
        )
    }// end component
}


// Đây là Function Component
// Chỉ lên dùng Function Component khi biết Hooks
// Khi chưa biết Hooks, thì chỉ dùng Function Component khi muốn lấy dữ liệu và render những dữ liệu đó. Không thể quản lí State
// Function Component giúp code ngắn gọn.
// const ChildComponent = (props) => {
//     let { arrayJobs } = props; // đặt tên biến giống y key trong object thì mới đc

//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrayJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.tittle} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                         else {
//                             return (
//                                 <div>
//                                     Null
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }








// khi muốn sử dụng cái class này để đến cái file khác sử dụng thì export nó
export default ChildComponent;
