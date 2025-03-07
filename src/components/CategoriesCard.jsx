import Title from "./UI/title";

function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Title title={"Featured Categories"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
          <a href="/categories">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
              alt="Electronics"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Electronics</h3>
            </div>
          </a>
        </div>

        <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
          <a href="/categories">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050"
              alt="Fashion"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Fashion</h3>
            </div>
          </a>
        </div>

        <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
          <a href="/categories">
            <img
              src="https://images.unsplash.com/photo-1484101403633-562f891dc89a"
              alt="Home &amp; Living"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">
                Home &amp; Living
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
