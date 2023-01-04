import React, {
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import ReactDOM from "react-dom";
import { SketchPicker } from "react-color";
import "../../sass/color-picker.scss";
import rgb2hex from "rgb2hex";

const ColorPicker = (props) => {
  const colorPickerContainer = useRef(null);
  const containerRef = useRef(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [colorPreview, setColorPreview] = useState("#ffffff");
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    if (showColorPicker === true) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showColorPicker]);

  const onClick = () => {
    setShowColorPicker(!showColorPicker);
    if (containerRef !== null && containerRef.current !== null) {
      //@ts-ignore
      const el = containerRef.current.getBoundingClientRect();
      setPosX(el.x);
      if(props.checkForScroll) {
        if (el.y + 215 > window.innerHeight) {
          setPosY(el.y - 341 - 5 + document.documentElement.scrollTop);
        } else {
          setPosY(el.y + document.documentElement.scrollTop);
        }
      } else {
        if (el.y + 362 > window.innerHeight) {
          setPosY(el.y - 341 - 5);
        } else {
          setPosY(el.y);
        }
      }
    }
  };

  const handleClickOutside = (e) => {
    if (
      colorPickerContainer.current &&
      containerRef.current &&
      !colorPickerContainer.current.contains(e.target) &&
      !containerRef.current.contains(e.target)
    ) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    if (props.color) {
      setColor(props.color);
      setColorPreview(
        `${
          rgb2hex(
            `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`
          ).hex
        }`
      );
    }
  }, [props.color]);

  const onChange = (color) => {
    setColor(color.rgb);
    if (props.onChange) props.onChange(props.name, color.rgb);
  };

  const onChangeComplete = (color) => {
    setColor(color.rgb);
    setColorPreview(color.hex);
    if (props.onChangeComplete) props.onChangeComplete(props.name, color.rgb);
  };

  const bodyNode = document.body;

  return (
    <>
      <span ref={containerRef} style={{ position: "relative" }}>
        <button type="button" className="color-picker-btn" onClick={onClick}>
          <div className="color-picker-container">
            <span
              className="color-preview"
              style={{
                backgroundColor: `rgb(${color.r},${color.g},${color.b},${color.a})`,
              }}
            ></span>
            <span className="color-hex-preview">{colorPreview}</span>
          </div>
        </button>
        {showColorPicker === true &&
          ReactDOM.createPortal(
            <div
              ref={colorPickerContainer}
              style={{
                position: "absolute",
                zIndex: 1001,
                left: posX,
                top: posY + 21,
              }}
            >
              <SketchPicker
                color={color}
                onChange={onChange}
                onChangeComplete={onChangeComplete}
              />
            </div>,
            bodyNode
          )}
      </span>
    </>
  );
};

export default ColorPicker;
