export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-12 space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hello World
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            Welcome to your new Next.js application
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              Get Started
            </div>
            <div className="px-6 py-3 border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:border-purple-300 hover:text-purple-600 transition-colors duration-300 cursor-pointer">
              Learn More
            </div>
          </div>
          
          <div className="pt-8 text-sm text-gray-400">
            Built with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  );
}