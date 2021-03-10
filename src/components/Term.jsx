import { useCallback, useContext, useMemo } from "react";
import { setTerm } from "../reducer/action";
import AppContext from "../app/context";
import Slider from "./Slider";

const Term = () => {
  const { state, dispatch } = useContext(AppContext);
  const { min, max, current } = useMemo(() => {
    return {
      min: state.term.min,
      max: state.term.max,
      current: state.term.current,
    };
  }, [state.term]);
  const handleChange = useCallback(
    (term) => {
      dispatch(setTerm(term));
    },
    [dispatch]
  );
  return (
    <Slider
      label="Plazo"
      min={min}
      max={max}
      current={current}
      onChange={handleChange}
    />
  );
};

export default Term;
