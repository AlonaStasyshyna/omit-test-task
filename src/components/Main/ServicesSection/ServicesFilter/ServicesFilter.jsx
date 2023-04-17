export const ServicesFilter = ({ changeQuery, changeType, changeOccupation }) => {
  return (
    <form>
      <input type="text" placeholder="Search" onChange={changeQuery} />

      <div>
        <p>Type</p>
        <button type="button" aria-label="Open button"></button>

        <label>
          <input
            type="radio"
            name="type"
            value=""
            onChange={changeType}
            defaultChecked
          />
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="gold"
            onChange={changeType}
          />
        </label>
        <label>
          <input type="radio" name="type" value="green" onChange={changeType} />
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="greenStroke"
            onChange={changeType}
          />
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="grayStroke"
            onChange={changeType}
          />
        </label>

        <button type="button" aria-label="Close button"></button>
      </div>

      <div>
        <p>Occupation</p>
        <button type="button"></button>
        <button type="button" aria-label="Open list button"></button>

        <label>
          All
          <input
            type="radio"
            name="occupation"
            value=""
            onChange={changeOccupation}
            defaultChecked
          />
        </label>
        <label>
          Instructional Design
          <input
            type="radio"
            name="occupation"
            value="Instructional Design"
            onChange={changeOccupation}
          />
        </label>
        <label>
          Elearning Development
          <input
            type="radio"
            name="occupation"
            value="Elearning Development"
            onChange={changeOccupation}
          />
        </label>
        <label>
          Mobile Learning
          <input
            type="radio"
            name="occupation"
            value="Mobile Learning"
            onChange={changeOccupation}
          />
        </label>
        <label>
          Instructor-led Training
          <input
            type="radio"
            name="occupation"
            value="Instructor-led Training"
            onChange={changeOccupation}
          />
        </label>

        <button type="button" aria-label="Close list button"></button>
      </div>
    </form>
  );
};
