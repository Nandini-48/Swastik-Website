import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import signback from "../assets/signback.png"; // ✅ Import background image

const LoginSignup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");

  useEffect(() => {
    setIsSignUp(location.pathname === "/signup");
  }, [location.pathname]);

  

  // ✅ Redirect to Home Page after Sign In/Sign Up
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); // Redirect to Home Page
  };

  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center">
      {/* ✅ Blurred Fullscreen Background Image */}
      <div
        className="absolute w-full inset-0 bg-cover bg-center blur-lg"
        style={{
          backgroundImage: `url(${signback})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* ✅ Glassmorphism Login Box */}
      <div
        className="relative z-10 w-full max-w-lg p-10 rounded-xl shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(20,20,20,0.8), rgba(40,40,40,0.9))",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 0 20px rgba(255, 94, 0, 0.5)",
        }}
      >
       <h2 
  className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text drop-shadow-md leading-tight"
  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
>
  {isSignUp ? "Create Account" : "Sign In"}
</h2>




        {/* Form Fields */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600"
          />

          {/* ✅ Updated Button Text: "Sign In" & "Sign Up" */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-orange-900 transition-all duration-300"
          >
            {isSignUp ? "Sign Up" : "Sign Up"}
          </button>
        </form>

        {/* Switch Between Sign In & Sign Up */}
       
      </div>
    </div>
  );
};

export default LoginSignup;
