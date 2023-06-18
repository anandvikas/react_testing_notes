export const Application = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              id="terms"
            />{" "}
            I agree to the terms and conditions
          </label>
        </div>
        <div>
          <label htmlFor="job-location">
            I agree to the terms and conditions
          </label>
          <select id="tnc-select">
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
