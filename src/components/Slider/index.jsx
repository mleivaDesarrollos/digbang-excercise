import RcSlider from "rc-slider";
import Input from "../Input";
import "rc-slider/assets/index.css";
import "./index.css";

const Slider = ({ label, min, max, current, amountPrefix, onChange }) => (
  <div className="slider-container">
    <div className="slider-labelinput-container">
      <span className="slider-label">{label}</span>
      <Input
        min={min}
        max={max}
        value={current}
        onChange={onChange}
        amountPrefix={amountPrefix}
        className="slider-input"
      />
    </div>
    <div className="slider-slidebar-container">
      <RcSlider
        min={min}
        max={max}
        value={current}
        tabIndex={-1}
        onChange={(value) => {
          if (onChange) {
            onChange(value);
          }
        }}
      />
    </div>
    <div className="slider-minmax-container">
      <span className="slider-minmax-label">
        {`${amountPrefix || ""} ${min}`}
      </span>
      <span className="slider-minmax-label">
        {`${amountPrefix || ""} ${max}`}
      </span>
    </div>
  </div>
);

Slider.defaultProps = {
  amountPrefix: null,
};

export default Slider;
