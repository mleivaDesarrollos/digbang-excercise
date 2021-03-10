import { useContext, useMemo } from "react";
import AppContext from "../../app/context";
import "./index.css";

const FeeByMonth = () => {
  const { state } = useContext(AppContext);
  console.log("state: ", state);
  const total = useMemo(() => {
    const amount = parseInt(state.amount.current, 10);
    const term = parseInt(state.term.current, 10);
    if (Number.isNaN(amount) || Number.isNaN(term)) {
      return 0;
    }
    return amount / term;
  }, [state]);
  return (
    <div className="fee-by-month-container">
      <span className="fee-by-month-label">cuota fija por mes</span>
      <span className="fee-by-month-total">{`$ ${total.toFixed(2)}`}</span>
    </div>
  );
};

export default FeeByMonth;
