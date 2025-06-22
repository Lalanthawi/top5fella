import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 sm:p-20 bg-black text-white font-sans">
      <main className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          🚧 We're Under Maintenance
        </h1>
        <p className="text-lg sm:text-xl max-w-md text-gray-300">
          We're currently making some updates to improve your experience. Please
          check back soon.
        </p>
      </main>
    </div>
  );
}
