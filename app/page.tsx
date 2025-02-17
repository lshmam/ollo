import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 space-y-24">
      {/* Hero Section */}
      <section className="space-y-8 text-center">
        <h1 className="text-2xl font-serif">
          Not all those who wander are lost.
        </h1>
        <Image
          src="/images/bag.png"
          alt="Terra device showing walking icon"
          width={300}
          height={300}
          className="mx-auto"
          priority
        />
        <p className="text-xs text-center max-w-sm mx-auto text-gray-600">
          ollo IS A COMPANION ON UNPLANNED WANDERING providing a link to the
          invisible guides that compass the way we move.
        </p>
      </section>

      {/* Photo Grid */}
      <section className="grid grid-cols-2 gap-4">
        <Image
          src="/images/bag.png"
          alt="Person holding device"
          width={300}
          height={400}
          className="w-full object-cover"
        />
        <Image
          src="/images/bag.png"
          alt="Person walking on crosswalk"
          width={300}
          height={400}
          className="w-full object-cover"
        />
      </section>

      {/* Device Details */}
      <section className="space-y-8">
        <div className="text-center">
          <input
            type="text"
            placeholder="2 FORUM.MA"
            className="text-center border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
          />
        </div>
        <div className="space-y-4">
          <Image
            src="/images/bag.png"
            alt="Terra device front"
            width={300}
            height={300}
            className="mx-auto"
          />
          <Image
            src="/images/bag.png"
            alt="Terra device back"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Second Photo Grid */}
      <section className="grid grid-cols-2 gap-4">
        <Image
          src="/images/bag.png"
          alt="Person in green coat"
          width={300}
          height={400}
          className="w-full object-cover"
        />
        <Image
          src="/images/bag.png"
          alt="Close up of coat"
          width={300}
          height={400}
          className="w-full object-cover"
        />
      </section>

      {/* Icons Grid */}
      <section className="grid grid-cols-3 gap-8 max-w-sm mx-auto">
        {["mushroom", "flower pattern", "sun", "flower", "splash", "dots"].map(
          (icon, i) => (
            <div key={i} className="aspect-square bg-black rounded-full p-4">
              <div className="w-full h-full bg-white/10 rounded-full"></div>
            </div>
          )
        )}
      </section>

      {/* Colored Stones */}
      <section className="flex justify-center gap-8">
        {["bg-purple-400", "bg-gray-400", "bg-green-400"].map((color, i) => (
          <div
            key={i}
            className={`w-16 h-16 rounded-full ${color} opacity-80`}
          />
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center space-y-8">
        <Image
          src="/images/bag.png"
          alt="Terra logo"
          width={100}
          height={30}
          className="mx-auto"
        />
        <p className="text-xs text-gray-600 max-w-sm mx-auto">
          © 2024 MyTerra. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
