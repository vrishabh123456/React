import React from "react";

function Product() {
  const products = [
    {
      id: 1,
      name: "Iphone 13 ",
      price: "399.99$",
      image:
        "https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg",
      description:
        "Apple iPhone 13 mini 512 Go (PRODUCT)RED (MLKE3F/A) - Achat Smartphone.",
      color: "red",
    },
    {
      id: 2,
      name: "oneplue",
      price: "122.99$",
      image:
        "https://image01-in.oneplus.net/ebp/202404/07/1-M00-52-A5-CpgM7mYR-t-AD9lKAAWYyOWBY10861.png?x-amz-process=image/format,webp/quality,Q_80",
      description: "OnePlus Nord CE48 GB RAM + 128 GB StorageCeladon Marble",
      color: "green",
    },
    {
      id: 3,
      name: "samsung s23 ultra",
      price: "6.630,46$",
      image:
        "https://samsungbrshop.vtexassets.com/arquivos/ids/227227-600-auto?v=638405122903900000&width=600&height=auto&aspect=true",
      description:
        "Celular Samsung Galaxy S24 Ultra256GB | 12GB de RAM | Tela de 6.8",
      color: "gray",
    },
    {
      id: 4,
      name: "redmi",
      price: "49.99$",
      image:
        "https://tiendasigloxxi.es/171330-large_default/xiaomi-redmi-note-13-4g-8gb-256gb-yellow-ocean-sunset-dual-sim.jpg",
      description:
        "Xiaomi Redmi Note 13 4G 8GB/256GB Yellow (Ocean Sunset) Dual SIM",
      color: "yellow",
    },
    {
      id: 5,
      name: "Poco",
      price: "159.99$",
      image:
        "https://myshops.az/images/CONTENT/new/00000009718/M6-Purple-2.webp",
      description: "Xiaomi Poco M6 Pro 8 GB 256 GB Purple",
      color: "purple",
    },
    {
      id: 5,
      name: "smart watch",
      price: "99.99$",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/4/IC/NC/ED/13004536/hw12-fullscreen-38-mm-smart-watch.jpg",
      description:
        "Pink Rectangular HW12 Fullscreen 38 Mm Smart Watch, For Daily, 132 Grams",
      color: "pink",
    },
  ];

  return (
    <div className="">
      {/* ... existing code */}
      <h1 className="p-4 font-bold">product</h1>
      <div className="container  ">
        <div className="  w-full bg-black shadow-lg rounded-3xl p-6">
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="mb-4 bg-black border-2 rounded-xl p-4 border-white flex flex-col justify-between"
              >
                {/* Render product details */}
                <div className="flex flex-col gap-y-3">
                  <div className="relative h-62 w-full mb-3 ">
                    {/* ... */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full object-fill rounded-2xl "
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {product.name}
                  </h2>
                  <p className="text-gray-400">{product.description}</p>
                  <p className="text-white text-2xl font-bold ">
                    Price: ${product.price}
                  </p>
                  <div className="flex justify-center">
                    <div
                      className={`text-white rounded-full p-2  max-w-32 bg-${product.color}-700`}
                    >
                      color: {product.color}
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded-lg">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ... existing code */}
    </div>
  );
}

export default Product;
