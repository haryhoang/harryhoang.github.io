import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] text-white py-3 px-6 flex items-center justify-between shadow-md">
      {/* Phía bên trái (Giữ nguyên logo UIT và tên) */}
      <div className="flex items-center gap-3">
        <div className="bg-[#FFFFFF] p-1.5 rounded-sm flex items-center justify-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/C510BAQHUtwuBizstCg/company-logo_200_200/company-logo_200_200/0/1630606553765/university_of_information_technology_viet_nam_national_university_ho_chi_minh_city_logo?e=2147483647&v=beta&t=uzTAJNz3-mS5etMYUpDqVDQ62QejUdrKtjASyzgfhIo" 
            alt="UIT Logo" 
            className="w-5 h-5 object-contain" // Giữ nguyên, không invert
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="bg-[#333] px-3 py-1 rounded border border-white/10">
          <span className="font-bold text-sm tracking-tight">Harry Hoang</span>
        </div>
      </div>

      {/* Giữa*/}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
        <a href="#lecture-notes" className="hover:text-white hover:opacity-100 transition-all">
          Lecture notes
        </a>
      </div>

      {/* Phía bên phải */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium hidden sm:inline opacity-90">CE</span>
        {/* Container cho logo mới */}
        <div className="bg-white/90 p-1 rounded-sm flex items-center justify-center"> 
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pkeQLxaPKZrL0Naua8g4Wk1Y1fbOMJ6Ymw&s" // T
            alt="Computer Engineering Logo" 
            className="w-8 h-8 object-contain" // Điều chỉnh kích thước (w-8 h-8) để logo vuông hiển thị cân đối
          
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </nav>
  );
};
