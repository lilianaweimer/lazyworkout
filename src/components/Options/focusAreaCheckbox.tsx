import "./Options.scss";

interface CheckboxProps {
  area: string;
  checked: boolean;
  handleFocusAreaCheckboxClick: any;
}

const FocusAreaCheckbox: React.FC<CheckboxProps> = ({
  area,
  checked,
  handleFocusAreaCheckboxClick,
}) => {
  return (
    <div className="checkbox_container">
      <input
        type="checkbox"
        id={area}
        name={area}
        checked={checked}
        className="options_checkbox"
        onChange={(e) => handleFocusAreaCheckboxClick(area, checked)}
      />
      <label className="options_label" htmlFor={area}>
        {area[0].toUpperCase() + area.substring(1)}
      </label>
    </div>
  );
};

export default FocusAreaCheckbox;
