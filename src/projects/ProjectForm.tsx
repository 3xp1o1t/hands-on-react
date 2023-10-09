function ProjectForm() {
  return (
    <div className="p-4 h-[32rem]">
      <form className="w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-md font-bold">
          Project Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          className="text-md font-semibold text-black"
        />
        <label
          htmlFor="description"
          className="text-md font-bold"
          placeholder="enter description"
        >
          Project description
        </label>
        <textarea
          name="description"
          cols={10}
          rows={5}
          value="test"
          className="text-md font-semibold text-black"
        />
        <label htmlFor="budget" className="text-md font-bold">
          Project budget
        </label>
        <input
          type="number"
          name="budget"
          placeholder="enter budget"
          className="text-md font-semibold text-black"
        />
        <label htmlFor="isActive" className="text-md font-bold">
          Active?
        </label>
        <input
          type="checkbox"
          name="isActive"
          className="text-lg font-extrabold h-5 w-5 cursor-pointer"
        />
        <div className="flex flex-row items-center justify-start gap-4 mt-4">
          <button className="bg-slate-900 text-white h-16 w-20 font-bold hover:bg-slate-200 hover:text-black rounded">
            Save
          </button>
          <button className="bg-rose-600 text-white h-16 w-20 font-bold hover:bg-slate-200 hover:text-black rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
