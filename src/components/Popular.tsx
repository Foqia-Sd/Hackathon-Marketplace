import { client } from "@/sanity/lib/client";
import Link from 'next/link';
import PopularCarousel from "./PopularCarousel";

const getData = async () => {
  const query = `*[_type == 'product'] {
    _id,
    product_id,
    name,
    description,
    images,
    price_id,
    price
  }`;

  const data = await client.fetch(query);
  return data;
};

const Popular = async () => {
  const furniture = await getData();

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4">Most Popular Products</h1>
        <p className="text-center mb-6 text-gray-500">
          The World&apos;s Premium Brand In One Destination.
        </p>

        {/* Carousel Component */}
        <PopularCarousel furniture={furniture} />

        <div className="flex justify-center mt-8">
          <Link href='/pro'>
            <button className="btn bg-[#2A254B] text-white rounded-lg px-6 py-2 hover:bg-[#413567] transition-all">
              See all furniture
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Popular;
