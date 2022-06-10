const Options = () => {
  return (
    <section>
      <h2>Options</h2>
      <form>
        <fieldset>
          <legend>Body parts?? (idk what to call this yet)</legend>
          <>
            <input
              type="checkbox"
              id="legs"
              name="legs"
              value="checked"
              className="options_checkbox"
              checked
            />
            <label htmlFor="legs">Legs</label>
          </>
          <>
            <input
              type="checkbox"
              id="core"
              name="core"
              value="checked"
              className="options_checkbox"
              checked
            />
            <label htmlFor="core">Core</label>
          </>
          <>
            <input
              type="checkbox"
              id="arms"
              name="arms"
              value="checked"
              className="options_checkbox"
              checked
            />
            <label htmlFor="arms">Arms</label>
          </>
          <>
            <input
              type="checkbox"
              id="yoga"
              name="yoga"
              value="checked"
              className="options_checkbox"
              checked
            />
            <label htmlFor="yoga">Yoga</label>
          </>
        </fieldset>
        <fieldset>
          <legend>Tools?</legend>
          <>
            <input
              type="checkbox"
              id="pilates_ring"
              name="pilates_ring"
              value=""
              className="options_checkbox"
            />
            <label htmlFor="pilates_ring">Pilates Ring</label>
          </>
          <>
            <input
              type="checkbox"
              id="weights"
              name="weights"
              value=""
              className="options_checkbox"
            />
            <label htmlFor="weights">Weights</label>
          </>
        </fieldset>
        <fieldset>
          <legend>Intensity</legend>
          <>
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
            <label htmlFor="intensity">Intensity</label>
          </>
        </fieldset>
      </form>
    </section>
  );
};

export default Options;
