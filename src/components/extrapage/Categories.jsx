import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const categories = [
    { value: "all", label: "All Products" },
    { value: "colostomy", label: "One-piece Colostomy Bag" },
    { value: "ostomy", label: "One-piece Ostomy Bag" },
    { value: "two-piece", label: "Two-piece Ostomy Bag" },
    { value: "skin", label: "Two-piece Skin Barrier" },
  ];
  const [selected, setSelected] = useState("all");
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Vulval", pack: "Pack", image: "home-pro1.png", rating: 4.7, reviews: 23, ref: "REF CHK-001", desc: "Description for Vulval." },
    { id: 2, name: "Colostomy", pack: "Box of 10", image: "home-pro2.png", rating: 4.5, reviews: 12, ref: "REF COL-123", desc: "Description for Colostomy." },
    { id: 3, name: "Ostomy", pack: "Single", image: "home-pro7.png", rating: 4.8, reviews: 31, ref: "REF OST-456", desc: "Description for Ostomy." },
    { id: 4, name: "Skin Barrier", pack: "Set of 5", image: "home-pro2.png", rating: 4.6, reviews: 19, ref: "REF SKN-786", desc: "Description for Skin Barrier." },
    { id: 5, name: "Excel", pack: "Set of 5", image: "home-pro3.png", rating: 4.6, reviews: 19, ref: "REF SKN-789", desc: "Description for Excel." },
    { id: 6, name: "Bright", pack: "Set of 5", image: "home-pro4.png", rating: 4.6, reviews: 19, ref: "REF SKN-783", desc: "Description for Bright." },
    { id: 7, name: "Fresh", pack: "Set of 5", image: "home-pro5.png", rating: 4.6, reviews: 19, ref: "REF SKN-782", desc: "Description for Fresh." },
    { id: 8, name: "Tablet", pack: "Set of 5", image: "home-pro6.png", rating: 4.6, reviews: 19, ref: "REF SKN-781", desc: "Description for Tablet." },
    { id: 9, name: "Ulcer", pack: "Set of 5", image: "home-pro7.png", rating: 4.6, reviews: 19, ref: "REF SKN-780", desc: "Description for Ulcer." },
    { id: 10, name: "Headache", pack: "Set of 5", image: "home-pro8.png", rating: 4.6, reviews: 19, ref: "REF SKN-782", desc: "Description for Headache." },
    { id: 11, name: "Skin", pack: "Set of 5", image: "home-pro9.png", rating: 4.6, reviews: 19, ref: "REF SKN-788", desc: "Description for Skin." },
    { id: 12, name: "Pain", pack: "Set of 5", image: "home-pro10.png", rating: 4.6, reviews: 19, ref: "REF SKN-754", desc: "Description for Pain." },
  ];
  // Filter categories search (keeps your original behavior)
  const filtered = categories.filter((cat) =>
    cat.label.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-8 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Categories Box (Left) */}
        <aside className="w-full md:w-72 h-[400px] bg-white rounded-md shadow border border-gray-200 flex-shrink-0 overflow-y-auto">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Search categories"
            />
          </div>
          <div
            onClick={() => setOpen((s) => !s)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setOpen((s) => !s)
            }
            className="flex items-center justify-between px-5 py-6 cursor-pointer select-none border-b border-gray-200"
          >
            <h3 className="text-2xl font-semibold tracking-tight">Categories</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-6 h-6 text-gray-600 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </div>
          {open && (
            <div className="px-5 pb-5">
              <ul className="space-y-1 mt-4">
                {filtered.map((cat) => (
                  <li
                    key={cat.value}
                    className="flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer hover:bg-emerald-50"
                    onClick={() => setSelected(cat.value)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") && setSelected(cat.value)
                    }
                    aria-pressed={selected === cat.value}
                  >
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                        selected === cat.value ? "border-emerald-600 bg-emerald-600" : "border-gray-300 bg-white"
                      }`}
                      aria-hidden="true"
                    >
                      {selected === cat.value && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="text-[15px] text-gray-700">{cat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
        {/* Cards Section (Right) */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {products.map((p) => (
              <article
                key={p.id}
                className="flex flex-col shadow-md w-full max-w-[250px] py-3 px-4 bg-white rounded-md"
              >
                <div>
                  <img src={p.image} alt={p.name} className="w-full h-auto object-contain" />
                </div>
                <div className="font-medium text-sm py-2 leading-tight text-left">
                  <p>{p.name}</p>
                  <p>{p.pack}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="text-xs text-gray-400">{p.rating}</p>
                  <img src="star-1.png" alt="star" />
                  <img src="star-1.png" alt="star" />
                  <img src="star-1.png" alt="star" />
                  <img src="star-1.png" alt="star" />
                  <img src="star-2.png" alt="half-star" />
                  <p className="text-xs text-gray-400">({p.reviews})</p>
                </div>
                <div className="font-medium text-sm py-2 mb-2 text-left">
                  <p>{p.ref}</p>
                </div>
                <div className="bg-[#4EA291] text-white text-center py-1.5 rounded-md">
                  {/* Navigate to /product/:id and send product object in state */}
                  <button
                    className="text-sm w-full"
                    type="button"
                    onClick={() => navigate(`/product/${p.id}`, { state: p })}
                  >
                    View Detail
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Categories;