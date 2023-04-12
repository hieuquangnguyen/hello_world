# Bắt đầu với Create React App

Dự án này đã được khởi động với [Create React App] (https://github.com/facebook/create-react-app).

## Available Scripts

Trong thư mục dự án, bạn có thể chạy:

### `npm start` : Chạy ứng dụng React của bạn trên môi trường phát triển và mở trình duyệt của bạn để xem ứng dụng.

### `npm test` : Chạy các bài kiểm tra (tests) cho ứng dụng React của bạn

### `npm run build`: Tạo một phiên bản sản phẩm của ứng dụng React của bạn để triển khai trên môi trường sản phẩm.

### `npm run eject` : Xóa các giới hạn và cấu hình mặc định của Create React App và cho phép bạn thay đổi cấu trúc của dự án của mình.
** Lưu ý: đây là một hoạt động một chiều. Một khi bạn ‘xua đuổi’, bạn không thể quay trở lại!**

### `npm install -g create-react-app`: Cài đặt Create React App, một công cụ giúp bạn nhanh chóng tạo ra một ứng dụng React mới.

### `npm install --save-dev enzyme enzyme-adapter-react-16`: Cài đặt Enzyme, một thư viện kiểm tra (testing library) cho React, và Enzyme Adapter, một bộ chuyển đổi để sử dụng Enzyme với phiên bản React 16.

### `npm install react-router-dom`: Cài đặt React Router DOM, một thư viện định tuyến (routing library) cho React.



## Learn More

Bạn có thể tìm hiểu thêm trong [Create React App documentation] (https://facebook.github.io/create-react-app/docs/getting-started).

Để tìm hiểu về React, hãy kiểm tra tài liệu React (https://reactjs.org/).

### Code Splitting
Code Splitting là một kỹ thuật trong lập trình web để tách các đoạn mã của ứng dụng thành các phân đoạn nhỏ hơn và tải chúng theo nhu cầu. Kỹ thuật này giúp cải thiện tốc độ tải trang web bằng cách tối ưu hóa việc tải các tài nguyên (resources) của trang web, giảm thời gian phản hồi và cải thiện trải nghiệm người dùng.

Khi một trang web được tải lần đầu tiên, toàn bộ mã của trang đó được tải xuống và thiết lập trong bộ nhớ của trình duyệt. Nếu trang web có nhiều đoạn mã lớn, điều này có thể làm chậm tốc độ tải trang và gây ra tình trạng "treo" trang. Code Splitting cho phép bạn tách các đoạn mã của ứng dụng thành các phân đoạn nhỏ hơn và chỉ tải các phân đoạn đó khi cần thiết. Khi người dùng chuyển đến một phần của trang web yêu cầu một phân đoạn nào đó, phân đoạn đó sẽ được tải xuống và cài đặt vào bộ nhớ của trình duyệt của người dùng.

Các kỹ thuật Code Splitting phổ biến trong các framework và thư viện JavaScript như React, Vue và Angular, và các công cụ tạo ứng dụng web như Webpack và Rollup hỗ trợ kỹ thuật này.

### Analyzing the Bundle Size
Analyzing the Bundle Size là quá trình đánh giá kích thước của các tập tin được đóng gói (bundled files) của ứng dụng web, bao gồm các tệp JavaScript, CSS, hình ảnh và các tài nguyên khác. Kích thước của bundle có thể ảnh hưởng đến tốc độ tải trang web và trải nghiệm người dùng của trang web.

Quá trình Analyzing the Bundle Size giúp bạn hiểu rõ hơn về cách các tệp được đóng gói lại với nhau và xem xét cách tối ưu hóa các tệp để giảm kích thước bundle và cải thiện hiệu suất của trang web.

Có nhiều công cụ hỗ trợ việc Analyzing the Bundle Size như Webpack Bundle Analyzer, Source Map Explorer và Bundlephobia. Các công cụ này cho phép bạn xem xét kích thước của các tệp được đóng gói, xem xét tệp được sử dụng nhiều nhất và đánh giá cách tối ưu hóa bundle để giảm thiểu kích thước tệp. Việc Analyzing the Bundle Size là một phần quan trọng trong quá trình tối ưu hóa và cải thiện hiệu suất của trang web.


### Making a Progressive Web App
Making a Progressive Web App (PWA) là quá trình phát triển một ứng dụng web tiên tiến và tương thích với nhiều thiết bị khác nhau, với mục tiêu mang lại trải nghiệm người dùng tốt nhất có thể. PWA được xây dựng để chạy trên bất kỳ thiết bị nào với các trình duyệt web tiên tiến, từ desktop đến điện thoại di động và tablet.

PWA có các tính năng tiên tiến như khả năng hoạt động offline, cập nhật tự động, tải nhanh và hỗ trợ push notification. Các tính năng này giúp cho ứng dụng web có thể hoạt động mượt mà và hiệu quả, giống như các ứng dụng di động thông thường. Nó cũng giúp tăng tương tác và tương tác với người dùng, do khả năng tích hợp các tính năng đó vào trang web.

Việc phát triển một PWA thường bao gồm các yếu tố như tối ưu hóa tải trang, cung cấp nội dung tương tác, tối ưu hóa hiệu suất và tăng tính bảo mật. Nhiều công cụ và framework, chẳng hạn như React và Angular, đã tích hợp các tính năng của PWA để giúp lập trình viên dễ dàng phát triển ứng dụng web tiên tiến và tương thích với nhiều thiết bị khác nhau.

### Advanced Configuration
Trong React, Advanced Configuration có thể ám chỉ đến việc tùy chỉnh các cài đặt nâng cao của ứng dụng, bao gồm các tùy chọn đóng gói (bundling options), tùy chọn tối ưu hóa (optimization options), cấu hình Webpack (Webpack configuration) và các tùy chọn khác.

Việc cấu hình nâng cao này cho phép bạn tinh chỉnh ứng dụng của mình để đáp ứng các yêu cầu cụ thể, ví dụ như tối ưu hóa hiệu suất, cung cấp kích thước bundle tối thiểu, hoặc xử lý một số cấu hình đặc biệt cho ứng dụng của bạn.

Các công cụ như Webpack, Babel, và các trình xử lý tệp (file processors) khác cung cấp các tùy chọn tùy chỉnh để đáp ứng các yêu cầu khác nhau của ứng dụng web.

Tuy nhiên, việc cấu hình nâng cao cũng có thể phức tạp và đòi hỏi kinh nghiệm. Vì vậy, nếu bạn mới bắt đầu với React, bạn có thể muốn bắt đầu với các cấu hình mặc định hoặc sử dụng các framework cung cấp cấu hình trước (preset configuration) để giảm thiểu sự phức tạp trong việc cấu hình.


### Deployment
Deployment trong React là quá trình triển khai ứng dụng React của bạn lên môi trường sản phẩm hoặc môi trường chạy thực tế để người dùng có thể truy cập vào ứng dụng. Việc triển khai (deployment) thường được thực hiện sau khi hoàn thành việc phát triển ứng dụng, kiểm thử và đóng gói ứng dụng.

Trong quá trình triển khai, các tệp ứng dụng, tệp hình ảnh, tệp mã nguồn và các tệp liên quan khác sẽ được chuyển đến máy chủ hoặc nơi lưu trữ đám mây để có thể được truy cập từ xa qua Internet.

Để triển khai ứng dụng React, bạn có thể sử dụng các dịch vụ đám mây như AWS, Azure, Heroku hoặc Netlify. Bạn cũng có thể tự triển khai ứng dụng của mình trên các máy chủ riêng tư hoặc máy chủ của doanh nghiệp.

Sau khi triển khai, ứng dụng của bạn sẽ sẵn sàng để sử dụng cho người dùng. Tuy nhiên, việc triển khai không phải là một quá trình đơn giản và có thể có những thách thức riêng biệt phụ thuộc 
vào môi trường mà bạn đang triển khai.


### `npm run build` fails to minify

#### `npm run build` là một lệnh được sử dụng để tạo ra phiên bản sản phẩm cuối cùng của ứng dụng React bằng cách đóng gói tất cả các tệp, tập tin và thư viện cần thiết vào một số tệp tĩnh. Điều này thường làm cho ứng dụng tải nhanh hơn và giúp tối ưu hóa hiệu suất.

#### Nếu lệnh `npm run build` fails to minify, có nghĩa là quá trình đóng gói và tối ưu hóa của ứng dụng của bạn đã thất bại trong việc giảm kích thước của các tệp để tạo ra phiên bản tối ưu hơn. Có thể có nhiều nguyên nhân dẫn đến lỗi này, ví dụ như mã nguồn của ứng dụng không hợp lệ, hoặc có lỗi xảy ra trong quá trình sử dụng các công cụ tối ưu hóa như uglifyjs hoặc terser.

#### Để giải quyết vấn đề này, bạn có thể kiểm tra thông báo lỗi được hiển thị và tìm hiểu nguyên nhân cụ thể của lỗi. Bạn có thể thử sử dụng các công cụ tối ưu hóa khác hoặc cập nhật các phiên bản phần mềm để giải quyết vấn đề này. Ngoài ra, bạn có thể thử tắt tùy chọn minify trong quá trình đóng gói để tạo ra một phiên bản ứng dụng tạm thời và sử dụng phiên bản này để tìm ra nguyên nhân của lỗi.

