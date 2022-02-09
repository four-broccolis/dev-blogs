import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./component/layout/PageWrapper";
import FeedPage from "./page/FeedPage";
import MemberPage from "./page/MemberPage";

function App() {
  return (
    <PageWrapper>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/member" element={<MemberPage />} />
        </Routes>
    </PageWrapper>
  );
}

export default App;
