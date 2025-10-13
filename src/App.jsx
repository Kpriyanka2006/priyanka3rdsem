function App() {
  return (
    <>
      <div className="p-20">
        {/* Navbar */}
        <div className="flex justify-between items-center gap-4 bg-fuchsia-100 text-black p-5 rounded-2xl shadow">
          <div className="text-2xl font-bold">Metacord</div>

          <div className="flex justify-center gap-6">
            <div>About</div>
            <div>Product</div>
            <div>How it works</div>
            <div className="bg-amber-50 text-blue-400 px-4 py-2 rounded-2xl">
              Signup
            </div>
            <div className="bg-blue-950 text-amber-50 px-4 py-2 rounded-2xl">
              Start for free
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex justify-between items-center bg-fuchsia-100 p-10 rounded-2xl mt-5">
          {/* Left Side Text */}
          <div className="text-6xl text-fuchsia-950 font-bold space-y-3">
            <div>Evaluate your</div>
            <div>meeting with AI</div>
            <div>powered recording</div>
            <div className="text-lg text-black mt-5">
              <p>
                With our advanced artificial intelligence technology, your
                meetings are not just recorded — they’re transformed into
                valuable insights and productivity boosters.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-5 mt-8">
              <button className="bg-fuchsia-950 text-blue-50 px-6 py-2 rounded-2xl">
                Sign up for free
              </button>
              <button className="bg-cyan-50 text-black px-6 py-2 rounded-2xl">
                Watch demo
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-1/2 flex justify-end">
            <img
              src="class.jpg"
              alt="Meeting"
              className="rounded-2xl shadow-lg w-96 h-auto object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex gap-20 bg-fuchsia-100 text-black text-4xl p-10 rounded-2xl mt-10 justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold">10K+</div>
            <div className="text-2xl">Active users / month</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold">15+</div>
            <div className="text-2xl">Countries active</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
