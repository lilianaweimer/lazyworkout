const Checkbox = () => {
  return (
    <>
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
    </>
  );
};

export default Checkbox;
