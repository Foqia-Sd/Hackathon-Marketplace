import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { IoIosContact, IoIosSearch } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <>
      <div className="p-4">
        {/* Header for Large Screens */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Search Bar */}
          <div className="flex items-center">
            <IoIosSearch size={20} className="text-gray-600" />
          </div>

          {/* Logo in Center */}
          <h1 className="text-[#22202E] text-[20px] font-semibold">Avion</h1>
          

          {/* Cart and Contact Icons */}
          <div className="flex items-center gap-4">
            <IoCartOutline size={24} className="text-gray-600" />
            <IoIosContact size={24} className="text-gray-600" />
          </div>
        </div>
        <div className="border-b-2 bg-neutral-100 mt-6 md:block hidden"></div>

        {/* Navigation Links Centered */}
        <div className="hidden lg:flex justify-center mt-4">
          <ul className="flex gap-8 text-[15px] text-[#726E8D]">
            <li className="cursor-pointer"><Link href={"/"}>Home</Link></li>
            <li className="cursor-pointer"><Link href={"/about"}>About</Link></li>
            <li className="cursor-pointer">Plant Pots</li>
            <li className="cursor-pointer">Ceramics</li>
            <li className="cursor-pointer">Tables</li>
            <li className="cursor-pointer">Chairs</li>
            <li className="cursor-pointer">Crockery</li>
            <li className="cursor-pointer">Tableware</li>
            <li className="cursor-pointer">Cutlery</li>
          </ul>
        </div>

        {/* Header for Mobile Screens */}
        <div className="flex lg:hidden items-center justify-between">
          {/* Logo on Left */}
          <h1 className="text-[#22202E] text-[20px] font-semibold">Avion</h1>

          {/* Hamburger Menu and Search Icon on Right */}
          <div className="flex items-center gap-4">
            <IoIosSearch size={20} className="text-gray-600" />
            <Sheet>
              <SheetTrigger>
                <Menu size={24} />
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link href={"/about"}>About</Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Header;
