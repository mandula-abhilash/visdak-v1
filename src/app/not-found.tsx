import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Link 
          href="/" 
          className="inline-block bg-primary-emerald text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}