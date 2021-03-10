import { useCallback, useContext, useMemo } from "react";
import { setAmount } from "../reducer/action";
import AppContext from "../app/context";
import Slider from "./Slider";

const TotalAmount = () => {
  const { state, dispatch } = useContext(AppContext);
  const { min, max, current } = useMemo(() => {
    return {
      min: state.amount.min,
      max: state.amount.max,
      current: state.amount.current,
    };
  }, [state.amount]);
  const handleChange = useCallback(
    (amount) => {
      dispatch(setAmount(amount));
    },
    [dispatch]
  );
  return (
    <Slider
      label="Monto Total"
      min={min}
      max={max}
      current={current}
      amountPrefix="$"
      onChange={handleChange}
    />
  );
};

export default TotalAmount;
