export const Application = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="bio">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
