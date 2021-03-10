import { useMemo, useReducer } from "react";
import AppContext from "./app/context";
import GetButton from "./components/GetButton";
import DetailButton from "./components/DetailButton";
import TotalAmount from "./components/TotalAmount";
import Term from "./components/Term";
import FeeByMonth from "./components/FeeByMonth";
import reducer, { initialState } from "./reducer";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <AppContext.Provider value={contextValue}>
      <div className="container">
        <div className="app-container">
          <h1 className="app-title">Simulá tu cŕedito</h1>
          <TotalAmount />
          <Term />
          <FeeByMonth />
          <div className="button-container">
            <GetButton />
            <DetailButton />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
