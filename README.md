# Food Ordering

Building a food ordering website, including components and features: a homepage, authentication, profile editing page, admin panel
(categories, menu items, users), listing products, menu items, and cart page

💻 Admin: authentication, products management, categories management, security.

💻 Client: featured products, latest products, add-to-card, stripe checkout, show orders, all products page, single product page.

# 💻 Tech:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->

<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 191108.png" />

<br/>

# 🤖 Đăng nhập | Đăng ký

### Đăng ký

<p>Màn hình đăng ký: có thể đăng ký bằng user/password </p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 192232.png" />

<br/>

<p>Đăng ký thành công</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 192241.png" />

<br/>

<p>Đăng ký xảy ra lỗi</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 192250.png" />

<br/>

<p>Màn hình đăng nhập: đăng nhập thông qua user/password hoặc đăng nhập bằng dịch vụ Google</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 192432.png" />

<br/>

<p>Đăng nhập thành công</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 193624.png" />

<br/>

<p>Next auth | Oauth Google</p>

```
//src\app\utils\auth.js

export const authOptions = {
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    session: {
      // Set it as jwt instead of database
      strategy: "jwt",
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({
        name: 'Credentials',
        id: 'credentials',
        credentials: {
          username: { label: "Email", type: "email", placeholder: "email@example.com" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          // if(credentials){
          console.log(credentials) //check credentials
          // }
          const email = credentials?.email;
          const password = credentials?.password;

          mongoose.connect(process.env.MONGO_URL);
          const user = await User.findOne({ email });

          const passwordOk = user && bcrypt.compareSync(password, user.password);
          if (passwordOk) {
            console.log(user)
            return user;
          }

          return null
        }
      })
    ],

  };
```

```
//src\app\api\auth\[...nextauth]\route.js

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
```

<p>Kiểm tra quản trị viên?</p>

```
export async function isAdmin() {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if (!userEmail) {

      return false;
    }
    const userInfo = await UserInfo.findOne({ email: userEmail });
    if (!userInfo) {

      return false;
    }
    // console.log(userInfo.admin); //test value admin

    return userInfo.admin;
  }
```

# 🤖 Các thành phần trang chủ

<p>Header</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 195927.png" />

<br/>

<p>Phần giới thiệu</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 200427.png" />

<br/>

<p>Món ăn được ưa thích và mua nhiều nhất (hiển thị 3 món ăn đứng đầu)</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 200623.png" />

<br/>

<p>Thành phần: Món ăn</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 201844.png" />

<br/>

<p>Khi tương tác (click) vào nút thêm vào giỏ hàng tại các sản phầm ở mục món ăn được ưa thích nhất</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 201510.png" />

<br/>

<p>Bảng chọn kích thước và thành phần ăn phụ kèm món ăn theo được bật lên trước khi xác nhận mua</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 202619.png" />

<p>Code xử lý giá tiền theo chuẩn VND: tại đây giá tiền sẽ được lưu theo kiểu String và khi cần xử lý về mặt toán học sẽ đổi thành Number</p>

```
Number(value).toLocaleString("vi-VN") // Number -> String (format xxx.xxx.xxx vnd)
```

<br/>

<p>Về chúng tôi</p>
<img align="center" alt="Coding" width="fit-content" height="fit-content" src="./screen/Ảnh chụp màn hình 2024-12-02 200826.png" />

<br/>

# 🤖 Roll Admin

<p>comming soon</p>

# 🖥📲 Roll Client

<p>comming soon</p>

# 🖥📲 Cluster Database (MongoDB)

<p>comming soon</p>
