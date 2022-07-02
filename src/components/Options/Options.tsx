import { useEffect, useState } from "react";

import FocusAreaCheckbox from "./FocusAreaCheckbox";
import EquipmentCheckbox from "./EquipmentCheckbox";

import { Equipment, Intensity, Settings } from "../../App";
import { FocusAreas } from "../../resources/data";

import "./Options.scss";

interface OptionsProps {
  currentSettings: Settings;
  updateSettings: React.Dispatch<React.SetStateAction<Settings>>;
  focusAreas: FocusAreas[];
  submitForm(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    formSettings: Settings
  ): void;
}

const Options: React.FC<OptionsProps> = ({
  currentSettings,
  updateSettings,
  focusAreas,
  submitForm,
}) => {
  const [formSettings, updateFormSettings] = useState(currentSettings);
  console.log("form intensity", formSettings.currentIntensity);

  const handleFocusAreaCheckboxClick = (area: string, checked: boolean) => {
    if (checked) {
      let focusAreas = formSettings.currentFocusAreas.filter(
        (item) => item !== area
      );
      updateFormSettings((settings) => ({
        ...settings,
        currentFocusAreas: focusAreas,
      }));
    } else {
      updateFormSettings((settings) => ({
        ...settings,
        currentFocusAreas: [...settings.currentFocusAreas, area as FocusAreas],
      }));
    }
  };

  const handleEquipmentCheckboxClick = (equip: string, checked: boolean) => {
    if (checked) {
      let newEquipment = formSettings.currentEquipment.filter(
        (item) => item !== equip
      );
      updateFormSettings((settings) => ({
        ...settings,
        currentEquipment: newEquipment,
      }));
    } else {
      updateFormSettings((settings) => ({
        ...settings,
        currentEquipment: [...settings.currentEquipment, equip as Equipment],
      }));
    }
  };

  const handleIntensitySliderChange = (target: string) => {
    updateFormSettings((settings) => ({
      ...settings,
      currentIntensity: target as Intensity,
    }));
  };

  // const submitForm = (e: Event, formSettings: Settings) => {
  //   e.preventDefault();
  //   console.log("form", formSettings);
  //   console.log("current", currentSettings);
  //   updateSettings((currentSettings) => {
  //     currentSettings.currentFocusAreas = formSettings.currentFocusAreas;
  //     currentSettings.currentEquipment = formSettings.currentEquipment;
  //     currentSettings.currentIntensity = formSettings.currentIntensity;
  //   });
  // };

  const focusAreaInputs = focusAreas.map((area) => {
    const isSelected = formSettings.currentFocusAreas.includes(area);
    return (
      <FocusAreaCheckbox
        area={area}
        checked={isSelected}
        handleFocusAreaCheckboxClick={handleFocusAreaCheckboxClick}
      />
    );
  });

  const equipment: Equipment[] = ["pilates ring", "weights"];
  const equipmentInputs = equipment.map((equip) => {
    const isSelected = formSettings.currentEquipment.includes(equip);
    return (
      <EquipmentCheckbox
        equip={equip}
        checked={isSelected}
        handleEquipmentCheckboxClick={handleEquipmentCheckboxClick}
      />
    );
  });
  return (
    <section className="page_section" id="options">
      <h2>Options</h2>
      <form>
        <fieldset className="focus_areas_form">
          <legend>Target Area(s)</legend>
          {focusAreaInputs}
        </fieldset>
        <fieldset>
          <legend>Equipment</legend>
          {equipmentInputs}
        </fieldset>
        <fieldset>
          <legend>Intensity</legend>
          <div className="checkbox_container">
            <input
              type="range"
              id="intensity"
              name="intensity"
              className="options_checkbox"
              min="1"
              max="3"
              step="1"
              value={formSettings.currentIntensity}
              onChange={(e) =>
                handleIntensitySliderChange(
                  (e.target as HTMLInputElement).value
                )
              }
            />
          </div>
        </fieldset>
        <button type="button" onClick={(e) => submitForm(e, formSettings)}>
          GO!
        </button>
      </form>
    </section>
  );
};

export default Options;
