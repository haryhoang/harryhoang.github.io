import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] text-white py-3 px-6 flex items-center justify-between shadow-md">
      {/* Phía bên trái */}
      <div className="flex items-center gap-3">
        <div className="bg-[#8c1515] p-1 rounded-sm flex items-center justify-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/C510BAQHUtwuBizstCg/company-logo_200_200/company-logo_200_200/0/1630606553765/university_of_information_technology_viet_nam_national_university_ho_chi_minh_city_logo?e=2147483647&v=beta&t=uzTAJNz3-mS5etMYUpDqVDQ62QejUdrKtjASyzgfhIo" 
            alt="UIT Logo" 
            className="w-6 h-6 object-contain" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="bg-[#2a2a2a] px-3 py-1 rounded border border-white/10">
          <span className="font-bold text-sm tracking-tight">Harry Hoang</span>
        </div>
      </div>

      {/* Giữa */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
        <a href="#lecture-notes" className="hover:text-white hover:opacity-100 transition-all">
          Lecture notes
        </a>
      </div>

      {/* Phía bên phải */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium hidden sm:inline opacity-90">Harry Hoang</span>
        <div className="flex items-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2eggVL9PXsqLGieoXyBD-fROPc1_6RBNEw&s" 
            alt="UIT Logo" 
            
            className="w-10 h-auto brightness-0 invert opacity-90" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </nav>
  );
};
