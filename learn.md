# About nuxt
- Kế thừa từ vue
- Bao gồm vue, vue router, vuex, vue server render, vue meta

# `nuxt.config.js`: Config nuxt project với nuxt.config.js

- `build`: 
- `css`: (Array) - define các file css, modules, thư viện bạn muốn thêm global.
- `dev`: (boolean - default true) - config chế độ của dự án (prop or dev)
    - Nó sẽ tự gán giá trị là true khi chạy với lệnh `nuxt`
    -  false khi chạy với lệnh `nuxt build`, `nuxt start`, `nuxt generate`.
- `env`: (object) - define các biến môi trường.
- `generate`: (object) - Cấu hình việc chuyển trang web ssr thành web tĩnh. Khi chạy lệnh `nuxt generate` hoặc gọi `nuxt.generate()` thì Nuxtjs sẽ sử dụng config này.
- `head`: (object) - define các thẻ meta trên header html.
- `loading`: (boolean, object, tring) -  tùy chình component loading thay vì sử dụng default
- `modules`: (array) - add các module vào project
- `modulesDir`: (array - default ['node_modules']) - set thư mục chứa module, mặc định là node_modules.
- `plugins`: (array or string) - xác định các plugin js nên được chạy trước khi khởi tạo ứng dụng vue.js góc.

.....

# `/Pages`
Mỗi page component là 1 Vue component nhưng Nuxt.js thêm một sốt thuộc tính và phương thức đặc biệt giúp xây dựng ứng dụng dễ dàng hơn.
- `asyncData`: https://nuxtjs.org/guide/async-data
    - fetch và pre-render data trên server mà ko sử dụng store
    - Được gọi trước mỗi lần load page component. Nó sẽ được gọi ở phía server-side một lần (first request) và gọi ở client-side những lần tiếp theo.
    - Ko thể gọi this ở hàm này vì nó chưa được khởi tạo.
- `fetch`: https://nuxtjs.org/api/pages-fetch
    - dùng để fill store trước khi render page component
    - Tương tự với asyncData ngoại trừ nó không set component data như asyncData (tự động lấy giá trị trả về thêm vào dữ liệu data của commponent).

- `head`: https://nuxtjs.org/api/pages-head
    - Set các thẻ meta trong trang hiện tại
- `layout`: https://nuxtjs.org/api/pages-layout
    - set layout
- `layout`: https://nuxtjs.org/api/pages-layout
    - set layout
- `loading`: https://nuxtjs.org/api/configuration-loading
- `transition`: https://nuxtjs.org/api/pages-scrolltotop#the-scrolltotop-property
- `scrollToTop`: https://nuxtjs.org/api/pages-scrolltotop#the-scrolltotop-property
    - default false
- `validate`: https://nuxtjs.org/api/pages-validate#the-validate-method
    - validate param cho các route dynamic
- `middleware`: https://nuxtjs.org/guide/routing#middleware
    - define middle ware trong trang, nó được gọi trước khi tải trang.