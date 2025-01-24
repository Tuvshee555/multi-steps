const Checker2 = ({ inputFields, inputValues, setErrors, setPage }) => {
    const handleSubmit = () => {
      const errors = {};
      let isValid = true;
  
      inputFields.forEach(({ id, label }) => {
        const value = inputValues[id];
  
        if (!value) {
          errors[id] = `${label} is required!`;
          isValid = false;
        } else if (
          (id === "Email" && (!value.includes("@") || !value.includes("."))) ||
          (id === "Phone number" && value.length !== 8) ||
          (id === "Password" && value.length < 6) ||
          (id === "Confirm password" && value !== inputValues["Password"])
        ) {
          errors[id] = `${label} is invalid!`;
          isValid = false;
        }
      });
  
      setErrors(errors);
      if (isValid) {
        setPage(3); // Navigate to the next page
      } else {
        alert("Please correct the errors and try again!");
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
  
  export default Checker2;
  