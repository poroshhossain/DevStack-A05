import { Suspense, useState } from "react";
import Header from "./Components/Header/Header"
import Technologies from "./Pages/Technologies"
import type { ITechnologyType } from "./type";


const getTechnologyApi = async ():Promise<ITechnologyType[]> => {
  const res = await fetch('/data/technology.json');
  const data = await res.json();
  return data;
}
const App = () => {
  const [technologyData] = useState(() => getTechnologyApi());
  return (
    <>
      <Header />
      <Suspense fallback={<p>Lodding...</p>}>
        <Technologies technologyData={technologyData} />
      </Suspense>
    </>
  )
}

export default App