import "./Options.scss";

interface CheckboxProps {
  equip: string;
  checked: boolean;
  handleEquipmentCheckboxClick: any;
}

const EquipmentCheckbox: React.FC<CheckboxProps> = ({
  equip,
  checked,
  handleEquipmentCheckboxClick,
}) => {
  return (
    <div className="checkbox_container">
      <input
        type="checkbox"
        id={equip}
        name={equip}
        checked={checked}
        className="options_checkbox"
        onChange={(e) => handleEquipmentCheckboxClick(equip, checked)}
      />
      <label className="options_label" htmlFor={equip}>
        {equip[0].toUpperCase() + equip.substring(1)}
      </label>
    </div>
  );
};

export default EquipmentCheckbox;
