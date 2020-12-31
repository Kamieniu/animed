export default function Gallery() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex">
        <img
          className="object-cover"
          src="https://s2.manifo.com/usr/6/6e88/f7/manager/_dsc2817.jpg"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 grid-rows-2 gap-4">
        <img
          className="object-cover h-80 w-full"
          src="https://s2.manifo.com/usr/6/6e88/f7/manager/_dsc2817.jpg"
          alt=""
        />
        <img
          className="object-cover h-80 w-full"
          src="https://s2.manifo.com/usr/6/6e88/f7/manager/_dsc2817.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
