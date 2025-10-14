function App() {
  return (
    <>
      <div className="p-20">
        <div className="flex justify-between gap-4 bg-fuchsia-100 text-black">
          <div className=" text-4xl"> Metacord</div>

          <div className="flex justify-center gap-4 margin-5 p-5">
            <div>About</div>
            <div>Product</div>
            <div>How it works</div>
            <div className="flex  bg-amber-50 text-blue-400 rounded-2xl ">
              <div>Signup</div>
            </div>
            <div className="flex bg-blue-950 rounded-2xl text-amber-50">
              <div>start for free</div>
            </div>
          </div>
        </div>
        <div className=" flex gap-10 bg-fuchsia-100 p-5 px-4 text-6xl text-fuchsia-950 bold grid-cols-3">
          <div>
            <div>Evaluate your</div>
            <div>meeting with Ai</div>
            <div> Powered recording </div>
          </div>
          <img
            src="https://images.pexels.com/photos/2176593/pexels-photo-2176593.jpeg?_gl=1*1qdqk6e*_ga*NzI1MjQ4Njg1LjE3NjA0MjUzNDE.*ga_8JE65Q40S6*czE3NjA0MzA5MDgkbzIkZzEkdDE3NjA0MzI0NjUkajIyJGwwJGgw"
            alt="pexel image"
            className=" e-50 h-50 rounded-xl shadow-lg border-gray-300 hover:scale-125 transition-transform duration-100"
          />
          <img
            src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?_gl=1*1p8odhi*_ga*NzI1MjQ4Njg1LjE3NjA0MjUzNDE.*_ga_8JE65Q40S6*czE3NjA0MzA5MDgkbzIkZzEkdDE3NjA0MzI3NDckajYwJGwwJGgw"
            alt="pexel image"
            className=" e-50 h-50 rounded-xl shadow-lg border-gray-300 hover:scale-125 transition-transform duration-100"
          />
        </div>

        <div className=" bg-fuchsia-100 text-black">
          <div>with our advanced artificial inteligence tecnology. your </div>
          <div>
            meeting are not just recorded. they transformed into variable{" "}
          </div>
          <div>insights and productivitynbooster</div>
        </div>
        <div className="flex p-5 bg-fuchsia-100 gap-5">
          <div className=" bg-fuchsia-950 text-blue-50 rounded-2xl">
            sing to free
          </div>
          <div className=" bg-cyan-50 text-black rounded-2xl">watch demo</div>
        </div>
        <div className="flex gap-10  bg-fuchsia-100 text-black text-4xl">
          <div>
            <div className=" text-5xl text-black">10+k</div>
            <div className=" text-black text-2xl">Active users mont</div>
          </div>
          <div className=" flex gap-20 ">
            <div>
              <div className=" text-5xl text-black">15+k</div>
              <div classname="   text-black text-1xl">
                Active in many contry
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?_gl=1*1p8odhi*_ga*NzI1MjQ4Njg1LjE3NjA0MjUzNDE.*_ga_8JE65Q40S6*czE3NjA0MzA5MDgkbzIkZzEkdDE3NjA0MzI3NDckajYwJGwwJGgw"
              alt="pexel image"
              className=" e-50 h-50 rounded-xl shadow-lg border-gray-300 hover:scale-125 transition-transform duration-100"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
