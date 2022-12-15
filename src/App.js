import HERO_IMAGE from './assets/hero-image.png'

import ZANG_IMAGE from './assets/zang.png'
import ZI_IMAGE from './assets/zi.png'
import ZNGUYET_IMAGE from './assets/znguyet.png'
import ZPHY_IMAGE from './assets/zphy.png'

import './App.scss'
import Author from './components/Author/Author';

function App() {
  return (
    <div className="App">
      <header>
        <img src={HERO_IMAGE} />
        <h1>HỌC CÙNG PENGUIN</h1>
      </header>
      <article>
        <h2>Điều khoản sử dụng ứng dụng</h2>
        <p className='bold'>Bằng việc tải xuống, cài đặt, và/hoặc sử dụng Ứng dụng Học cùng penguin, bạn đồng ý rằng bạn đã đọc và đã đồng ý Điều khoản sử dụng Ứng dụng (sau đây gọi là “Điều khoản sử dụng”). Những Điều khoản sử dụng này cấu thành một thỏa thuận giữa bạn và Học cùng penguin và áp dụng cho việc truy cập và sử dụng Ứng dụng Học cùng penguin.<br />
          Vui lòng xoá bỏ vĩnh viễn Ứng dụng từ các thiết bị của bạn nếu bạn không đồng ý hoặc không mong muốn chấp thuận các Điều khoản sử dụng này.<br />
          <br />
          VUI LÒNG ĐỌC KỸ ĐIỀU KHOẢN SỬ DỤNG NÀY, ĐIỀU KHOẢN & ĐIỀU KIỆN CÙNG CHÍNH SÁCH BẢO MẬT & QUYỀN RIÊNG TƯ CỦA CHÚNG TÔI TRƯỚC KHI TẢI ỨNG DỤNG XUỐNG HOẶC ĐANG SỬ DỤNG SẢN PHẨM, DỊCH VỤ CỦA CHÚNG TÔI TRONG LẦN ĐẦU TIÊN.
        </p>
        <p className='bold'>Học cùng penguin xây dựng các công nghệ và dịch vụ giúp đỡ trẻ em từ 3-6 tuổi có cơ hội được tiếp cận với bảng chữ cái tiếng Việt và các bộ từ vựng cơ bản thông qua các hình thức là viết, đọc và nhận biết. Ngoài ra, chúng tôi còn xây dựng một hệ thống kiểm tra và đánh giá giúp phụ huynh và các bé có cái nhìn rõ rang hơn về trình độ của con trong quá trình tiếp cận từ vựng Tiếng Việt.</p>
        <p className='secondary'>1.	Chúng tôi thu thập và xử lý các thông tin của bạn, như là tên, địa chỉ email khi bạn đăng ký. Bạn phải cung cấp chính xác và đầy đủ thông tin, cập nhật thông tin và đồng ý cung cấp cho chúng tôi bất kỳ bằng chứng nào về danh tính theo yêu cầu hợp lý của chúng tôi. Nếu các thông tin mà bạn cung cấp cho chúng tôi thay đổi, ví dụ, nếu bạn thay đổi địa chỉ email, hoặc nếu bạn muốn hủy tài khoản, xin vui lòng cập nhật chi tiết bằng cách gửi yêu cầu đến chúng tôi. Chúng tôi, trong khả năng của mình, sẽ nỗ lực thực hiện thay đổi theo yêu cầu trong ba mươi (30) ngày làm việc kể từ khi nhận được thông báo về thay đổi.
          2.	Chúng tôi ghi âm giọng nói và thu thập hình ảnh từ người dùng để phục vụ cho việc đánh giá kết quả học tập.
          3.	Chỉ có bạn mới có thể sử dụng tài khoản của mình và phải đảm bảo không cho phép người khác sử dụng danh tính hoặc tài khoản. Bạn không được quyền chuyển giao hoặc chuyển nhượng tài khoản của mình cho bất kỳ các bên nào khác. Bạn phải giữ mật khẩu tài khoản và mọi thông tin mà chúng tôi cung cấp đến bạn một cách an toàn và bảo mật. Chúng tôi không giải quyết các vấn đề liên quan tới việc mất tài khoản trong quá trình chuyển giao.<br />
          4.	Bạn chỉ có một tài khoản Học cùng penguin và có thể cài đặt trên nhiều thiết bị do chính bạn sở hữu và có email đăng ký tài khoản sử dụng thiết bị trùng với email mà bạn đã đăng ký với chúng tôi.<br />
          5.	Bạn cam kết rằng bạn sẽ sử dụng Ứng dụng chỉ cho mục đích học tiếng Anh. Bạn không được phép lạm dụng hoặc sử dụng Ứng dụng cho các mục đích gian lận hoặc để gây bất tiện cho người khác.<br />
          6.	Bạn không được phép làm tổn hại, chỉnh sửa hoặc bổ sung Ứng dụng và/hoặc Website hoặc cố tình đe dọa, chỉnh sửa hoặc bổ sung Ứng dụng và/hoặc Website bằng bất kỳ cách nào. Chúng tôi không chịu trách nhiệm nếu bạn không có một thiết bị tương thích hoặc nếu bạn đã tải xuống sai phiên bản của Ứng dụng trên thiết bị của bạn. Chúng tôi bảo lưu các quyền ngăn cấm bạn tiếp tục sử dụng Ứng dụng, nếu bạn sử dụng Ứng dụng với một thiết bị không tương thích hoặc trái phép hoặc nếu bạn sử dụng Ứng dụng cho các mục đích khác với mục đích mà Ứng dụng hướng tới. Bạn cam kết rằng bạn sẽ chỉ sử dụng một điểm truy cập mà bạn được phép sử dụng.<br />
          7.	Bạn được phép cài đặt file ứng dụng vào điện thoại khi kết nối điện thoại với máy tính.<br />
          8.	Bạn hiểu và đồng ý rằng việc sử dụng Ứng dụng của bạn cũng phụ thuộc vào Điều khoản & Điều kiện có thể được bổ sung tùy từng thời điểm. Đồng thời, bằng việc sử dụng Ứng dụng, bạn cũng đồng ý tuân thủ các yêu cầu của Chính sách bảo mật & Quyền riêng tư của chúng tôi.<br />
          9.	Bằng cách cung cấp thông tin cho chúng tôi, bạn tuyên bố rằng bạn có quyền cung cấp cho chúng tôi thông tin để sử dụng và chia sẻ với Nhà cung cấp dịch vụ cho chúng tôi.<br />
        </p>
      </article>
      <article>
        <h2>ABOUT US</h2>
        <p>“Học để bắt kịp thời đại”<br />
          <br />
          Việc khởi đầu việc học không bao giờ là sớm đối với thời đại 4.0 ngày nay.  Bất cứ bậc cha mẹ nào muốn con mình có sự khởi đầu sớm bằng cách tiếp xúc với bảng chữ cái và từ vựng đều có thể tìm đến chúng tôi.<br />
          Chúng tôi rất lấy làm vinh dự để có thể giúp đỡ các bé trong quá trình thành thạo tiếng Việt.<br />
        </p>
        <h3>Phụ huynh cần một môi trường cho các bé phát triển ngôn ngữ mẹ đẻ?</h3>
        <p>Ứng dụng Học cùng penguin được chúng tôi xây dựng và phát triển kể từ năm 2022. Với mục tiêu tạo ra một hệ thống học tập dành cho các bé có độ tuổi từ 3-6, giúp các bé có một khởi đầu sớm và tốt hơn đối với tiếng Việt, chúng tôi tự tin đây sẽ là một trong những ứng dụng hàng đầu cho việc trải nghiệm và luyện tập sử dụng tiếng Việt.<br />
          <br />
          Phụ huynh sẽ không cần mất bất kì chi phí nào để sử dụng dịch vụ của chúng tôi, chỉ cần một thiết bị điện tử như điện thoại thông minh hay máy tính bảng là đã có thể tiếp cận tới dịch vụ tuyệt hữu ích này.<br />
        </p>
        <h3>Đội ngũ phát triển</h3>
        <p className='bold'>Đội ngũ chúng tôi gồm 4 người, đến từ đại học Công nghệ thông tin - Đại học quốc gia thành phố Hồ Chí Minh</p>
        <div className='author-group'>
          <Author avatar={ZANG_IMAGE} name={"Bùi Thị Hoàng Giang"} />
          <Author avatar={ZI_IMAGE} name={"Trần Ngọc Nhật Vy"} />
          <Author avatar={ZPHY_IMAGE} name={"Võ Như Phi"} />
          <Author avatar={ZNGUYET_IMAGE} name={"Phạm Nguyệt Quỳnh"} />
        </div>
      </article>
      <footer>
        <p>Thông tin liên hệ<br />
          Email: bt.hoanggiang@gmail.com<br />
          Số điện thoại : 0971241268<br />
          Địa chỉ :  Đường Hàn Thuyên, khu phố 6, thành phố Thủ Đức, thành phố Hồ Chí Minh, Việt Nam<br />
        </p>
      </footer>
    </div>
  );
}

export default App;
