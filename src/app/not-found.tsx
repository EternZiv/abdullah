import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.03] blur-[150px] animate-blob" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.02] blur-[120px] animate-blob-2" />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>
      <div className="text-center px-6 animate-fade-in-up">
        <div className="mb-6">
          <span className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold font-heading leading-none bg-gradient-to-b from-accent to-accent/20 bg-clip-text text-transparent">
            404
          </span>
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 rounded-full mx-auto mb-6" />
        <h1 className="text-2xl md:text-3xl font-bold font-heading text-heading mb-3">
          Page Not Found
        </h1>
        <p className="text-[15px] md:text-[17px] text-muted max-w-md mx-auto mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
