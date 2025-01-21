'use client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link'; 
import { CgEye } from 'react-icons/cg';

const Furniture = ({ fur }: { fur: any }) => {
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 py-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* Furniture Image */}
          <Image
            src={urlFor(fur.images[0]).url()} 
            alt={fur.name}
            width={180}
            height={180}
            className="object-contain"
          />
        </div>
        {/* btn group */}
        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 
        group-hover:opacity-100 transition-all duration-300 '>
          <Link href={`/products/${fur.product_id}`}>
            <button className='btn-icon btn-primary rounded-sm'>
              <CgEye size={26}/>
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Furniture;
