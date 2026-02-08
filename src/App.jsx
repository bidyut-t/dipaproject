import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from "./pages/auth/login/login";
import SignUpPage from "./pages/auth/signup";
import Deshboard from "./pages/deskboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
