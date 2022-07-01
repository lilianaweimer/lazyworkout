import { useEffect, useState } from "react";

import FocusAreaCheckbox from "./focusAreaCheckbox";

import { Settings } from "../../App";
import { FocusAreas } from "../../resources/data";

import "./Options.scss";

interface OptionsProps {
  currentSettings: Settings;
  updateSettings: React.Dispatch<React.SetStateAction<Settings>>;
  focusAreas: FocusAreas[];
}

const Options: React.FC<OptionsProps> = ({
  currentSettings,
  updateSettings,
  focusAreas,
}) => {
  const handleCheckboxClick = (
    event: EventTarget,
    area: string,
    checked: boolean
  ) => {
    if (checked) {
      let focusAreas = currentSettings.currentFocusAreas.filter(
        (item) => item !== area
      );
      updateSettings((settings) => ({
        ...settings,
        currentFocusAreas: focusAreas,
      }));
    } else {
      updateSettings((settings) => ({
        ...settings,
        currentFocusAreas: [...settings.currentFocusAreas, area as FocusAreas],
      }));
    }
  };

  const focusAreaInputs = focusAreas.map((area) => {
    const isSelected = currentSettings.currentFocusAreas.includes(area);
    return (
      <FocusAreaCheckbox
        area={area}
        checked={isSelected}
        handleCheckboxClick={handleCheckboxClick}
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
          <div className="checkbox_container">
            <input
              type="checkbox"
              id="pilates_ring"
              name="pilates_ring"
              value=""
              className="options_checkbox"
            />
            <label className="options_label" htmlFor="pilates_ring">
              Pilates Ring
            </label>
          </div>
          <br />
          <div className="checkbox_container">
            <input
              type="checkbox"
              id="weights"
              name="weights"
              value=""
              className="options_checkbox"
            />
            <label className="options_label" htmlFor="weights">
              Weights
            </label>
          </div>
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
              value="1"
            />
            {/* <label className="options_label" htmlFor="intensity">
              Intensity
            </label> */}
          </div>
        </fieldset>
        <button>GO!</button>
      </form>
    </section>
  );
};

export default Options;
