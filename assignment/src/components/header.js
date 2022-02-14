const Banner = {
    render() {
        return /* html */`
        
      <div class="bg-blue-900 px-4 text-white">
        Rikka shop 
      </div>
      <div class="bg-white-100 px-4 h-12 flex">
        
        <img class="p-1 " src="./img/logo (1).png" alt="">
        
        <div>
          <ul class="flex mt-2 ml-40">
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="">Trang chủ</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="product">Sản phẩm</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="about">Blog</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="contact">Giới thiệu</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="">Liên hệ</a></li>
          </ul>
        </div>
        <div class="flex ml-20">
          <i class="fa-thin fa-user"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-plus"></i>
          <i class="fas fa-phone-alt header__call-icon mt-4 ml-12"></i>
        </div>
      </div>
      <div style="background-image: url('./img/banner.jpg')" class="w-full bg-no-repeat bg-cover relative h-96">
        <div class="text-center pt-20 text-white font-medium">
          <p>RIKKA SHOP</p>
          <h1 class="text-3xl my-2">FIGURE ĐẸP, PHỤ KIỆN XỊN<br>GHÉ QUA RIKKA SHOP VÀ XÁCH ĐỒ VỀ.</h1>
          <p>Hàng chất lượng cao, chăm sóc khách hàng tận tình chu đáo</p>
          <button class="mx-4 border border-black rounded-2xl bg- bg-red-500 h-10 px-4  mt-3 roundef-full hover:bg-transparent hover:border-white transition-all">Xem sản phẩm</button>
        </div>
      </div>
        `;
    },
};
export default Banner;
