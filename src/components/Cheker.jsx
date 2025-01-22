export const Checker = ({ inputFields, inputValues, setErrors, setPage }) => {
  const handleSubmit = () => {
    const formErrors = {};
    let isValid = true;

    inputFields.forEach(({ id, label }) => {
      if (!inputValues[id]) {
        formErrors[id] = `${label} is required!`;
        isValid = false;
      }
    });

    setErrors(formErrors);

    if (isValid) {
      alert("Form submitted successfully!");
      setPage(2); // Use setPage to navigate to the next page (PageTwo)
    } else {
      alert("Please fill all the fields!");
    }
  };

  return (
    <div className="w-[100%] flex flex-col items-center">
      <button
        onClick={handleSubmit}
        className="w-[100%] h-[44px] bg-[black] py-[10px] px-[12px] rounded-[8px] flex justify-center cursor-pointer"
      >
        <h1 className="text-[white] text-[16px] font-[500]">Continue</h1>
      </button>
      <p className="text-gray-600 mt-4 text-sm">
        Make sure all fields are completed accurately!
      </p>
    </div>
  );
};
 