import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { CgChevronLeft } from "react-icons/cg";
import { LuClock, LuPackageCheck, LuRefreshCcw } from "react-icons/lu";

const getData = async (id: string) => {
  const query = `*[_type == 'product' && product_id == $id][0] {
    _id,
    name,
    description,
    price,
    price_id,
    images
  }`;

  const data = await client.fetch(query, { id });
  return data;
};

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  // Fetch the product data
  const pro = await getData(params.id);

  // Ensure the product exists
  if (!pro) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-32 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14 xl:gap-20">
          {/* Image */}
          <div className="xl:flex-1 h-[460px] xl:w-[400px] xl:h-[540px] flex justify-center items-center bg-white shadow-lg rounded-lg">
            {pro.images?.length > 0 ? (
              <Image
                src={urlFor(pro.images[0]).url()}
                alt={pro.name || "Product Image"}
                priority
                width={300}
                height={300}
                className="object-contain rounded-lg"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>

          {/* Product Info */}
          <div className="xl:flex-1 space-y-6">
            <h2 className="text-4xl font-semibold text-gray-800">{pro.name}</h2>
            <p className="text-lg text-gray-600">{pro.description}</p>

            {/* Go back to home link */}
            <div className="mt-6">
              <Link href="/" className="flex items-center text-lg text-primary hover:underline">
                <CgChevronLeft size={24} className="mr-2" />
                Back to Home
              </Link>
            </div>

            <div className="flex items-center gap-3 text-white px-4">
              <button className="btn btn-accent rounded-md">Add to Cart</button>

            </div>
              
              {/* Info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
              <LuPackageCheck size={20} className="text-red-600"/>
                <p>Free shipping on order over $300</p>
              </div>
            
              <div className="flex gap-2">
              <LuRefreshCcw size={20} className="text-red-600"/>
                <p>Free return for 30 days</p>
              </div>
        
              <div className="flex gap-2">
              <LuClock size={20} className="text-red-600"/>
                <p>Fast delivery</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
