
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Create from "./page/Create";
import Detail from "./page/Detail";
import Edit from "./page/Edit";
import Home from "./page/Home";




function App() {
  return (
    <>
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/detail/:id" element={<Detail />} />

      </Routes>
      </Layout>
    </>
  );
}

export default App;
