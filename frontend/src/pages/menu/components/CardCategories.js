import React, { useState } from "react";
import Modal from "./Modal";
import categories from "../../../data/Categories"; 
export default function CardCategories() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <section className="hero container">
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col md:flex-row items-center mb-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 relative hero-image mb-8 md:mb-0">
            <div className="relative hero-image">
              <div className="overlay inset-0 bg-black opacity-35 z-10"></div>
              <img
                src="https://www.miops.com/cdn/shop/articles/Food_Photography___How_to_Take_Unique_and_Creative_Food_Photos_5.jpg?v=1661150733"
                alt="hero"
                className="absolute inset-0 md:relative w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2 lg:w-1/ px-4 md:px-0 md:pl-8 flex flex-col justify-center">
            <div className="ps-10">
              <h1 className="text-3xl md:text-5xl leading-tight mb-4">{category.name}</h1>
              <h2 className="text-base md:text-lg mb-6 tracking-wide">{category.description}</h2>
              <div>
                <a
                  href={`/menu/category/${category.slug}`}
                  className="border border-black text-black hover:bg-black hover:text-white rounded-sm px-8 py-3 mt-4 inline-block flex-none transition duration-200"
                >
                  View Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {showModal && <Modal handleShowModal={handleShowModal} />}
    </section>
  );
}
