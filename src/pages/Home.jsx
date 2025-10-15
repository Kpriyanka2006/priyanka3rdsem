import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleNavigateToAbout() {
    navigate("/about");
  }

  return (
    <>
      <div>
        <h1>Home page</h1>
        <p>This is the home page with button-based routing.</p>
        <button
          onClick={handleNavigateToAbout}
          className=" border-2 rounded-2xl"
        >
          Go to About Page
        </button>
      </div>
    </>
  );
}
export default Home;
