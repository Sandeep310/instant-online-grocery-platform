function App() {
  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      price: "$5",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
    },
    {
      id: 2,
      name: "Tomatoes",
      price: "$3",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337"
    },
    {
      id: 3,
      name: "Milk",
      price: "$2",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Instant Grocery Platform
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">
              {product.name}
            </h2>

            <p className="text-green-600 font-bold">
              {product.price}
            </p>

            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;