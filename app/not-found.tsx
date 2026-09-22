import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section min-h-[60vh] flex items-center">
      <div className="container-l pad-x text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="h2-serif">That page isn't here.</h1>
        <Link href="/" className="btn-black mt-8">Back to home</Link>
      </div>
    </section>
  );
}
