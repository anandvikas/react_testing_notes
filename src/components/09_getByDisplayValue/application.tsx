export const Application = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value="vikas"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value="web developer"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value="India"
            onChange={() => {}}
          >
            <option value="">India</option>
            <option value="">Japan</option>
          </select>
        </div>
      </form>
    </>
  );
};
