# Yêu cầu

1.  Yarn
2.  Nodejs v12
3.  Visual code studio code để đem lại trải nghiệm đồng nhất :D

# Mong muốn

1. Các tính năng được chia nhỏ, dễ maintain về sau
2. Dễ mở rộng
3. Code rõ ràng, tách bạch giữa view và logic
4. Nhiều người có thể cùng tham gia dự án

# Công nghệ sử dụng

1.  Base: [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
2.  [Typescript](https://www.typescriptlang.org/)
3.  [Redux, redux-saga](https://redux-saga.js.org/)
4.  Call api đến graphql server sử dụng [relayjs](https://relay.dev/)
5.  [Ant design](https://ant.design/)

# Cơ bản

- Source code có 2 phần chính: phần **config bên ngoài root folder** và phần **code bên trong folder src**
- Phần config bên ngoài root là các config liên quan đến cấu hình chung như: format code .prettierrc, config typescript tsconfig.json, tslint.json và phần cấu hình relay (graphql)
- Phần src code chính xem giải thích ở phía phần sau
- Ngoài ra còn có folder .vscode, chứa file setting của vscode để đồng bộ setting khi nhiều người join dự án

# Cấu trúc thư mục

```bash
src
 - assets
 - commons	       // Chứa các component dùng chung, 1 số config cơ bản
   -- layouts
   -- Notification
   -- Skeletons
 - configs
 - graphql         // Chứa file schema.graphql
 - helpers
 - hoc	           // High order component
 - modules	       // Module hoá tính năng thành các module riêng biệt
 - redux	       // Phần config redux cho toàn app
```

# Module

Module là tổng hợp các tính năng phục vụ 1 công việc nhất định
Các module sẽ được đặt trong folder src/modules/{ModuleNameFolder} => MNF
Tất cả phần code của module sẽ nằm gọn trong MNF, bao gồm cấu hình router, redux, service, các template component...

# Cách hoạt động

### Quản lý state

1.  Redux-saga được sử dụng để quản lý state của toàn app (root state)
2.  Mỗi module sẽ có phần state riêng
3.  Tất cả module state được combine vào root state (src/redux)

### Router

1. Mỗi module có file router config riêng
2. src/router.ts sẽ tổng hợp lại tất cả router từ các module
3. Sử dụng react-router-config để render tất cả router thông qua EmptyLayout Component (xem file src/router.ts)
