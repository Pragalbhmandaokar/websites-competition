import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyInformation from './screens/MyInformation/MyInformation'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import OtpForm from "./screens/LoginScreen/OtpForm";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import Verification from "./screens/RegisterScreen/Verification";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<LoginScreen />} exact />
        <Route path="/register" element={<RegisterScreen />} exact />
        <Route path="/verify" element={<Verification/>} exact />
        <Route path="/myinfo" element={<MyInformation />} />
        <Route path="/otpForm" element={<OtpForm />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);


export default App;
