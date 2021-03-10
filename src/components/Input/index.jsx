import "./index.css";

const Input = ({ value, onChange, min, max, amountPrefix, className }) => (
  <>
    {amountPrefix && <div className="app-input-prefix">{amountPrefix}</div>}
    <input
      type="number"
      min={min}
      max={max}
      onChange={(event) => {
        if (onChange) {
          const valueChange = parseInt(event.target.value, 10);
          onChange(valueChange);
        }
      }}
      onBlur={(event) => {
        if (onChange) {
          const valueBlur = parseInt(event.target.value, 10);
          if (valueBlur > max) {
            onChange(max);
          } else if (valueBlur < min) {
            onChange(min);
          } else {
            onChange(valueBlur);
          }
        }
      }}
      value={value}
      className={`${className || ""} app-input`}
    />
  </>
);

export default Input;
