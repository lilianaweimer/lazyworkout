import "./Options.scss";

const Options = () => {
  return (
    <section className="page_section" id="options">
      <h2>Options</h2>
      <form>
        <fieldset>
          <legend>Target Area(s)</legend>
          <div className="checkbox_container">
            <input
              type="checkbox"
              id="legs"
              name="legs"
              value="checked"
              className="options_checkbox"
              checked
            />
            <label className="options_label" htmlFor="legs">
              Legs
            </label>
          </div>
          <br />
          <div className="checkbox_container">
            <input
              type="checkbox"
              id="core"
              name="core"
              value="checked"
              className="options_checkbox"
              checked
            />
            <label className="options_label" htmlFor="core">
              Core
            </label>
          </div>
          <br />
          <div className="checkbox_container">
            <input
              type="checkbox"
              id="arms"
              name="arms"
              value="checked"
              className="options_checkbox"
              checked
            />
            <label className="options_label" htmlFor="arms">
              Arms
            </label>
          </div>
          <br />
          <div className="checkbox_container">
            <input
              type="checkbox"
              id="yoga"
              name="yoga"
              value="checked"
              className="options_checkbox"
              checked
            />
            <label className="options_label" htmlFor="yoga">
              Yoga
            </label>
          </div>
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
