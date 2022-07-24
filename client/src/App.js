import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
import EditForm from "./components/EditForm";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProfileForm />}></Route>
          <Route path="/page" element={<ProfilePage />}></Route>
          <Route path="/page/edit/:id" element={<EditForm />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
