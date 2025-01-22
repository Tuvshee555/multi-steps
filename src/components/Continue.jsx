export const Continue = ({ inputFields = [], inputValues, setInputValues, errors }) => {
  return (
    <div className="flex gap-[12px] flex-col w-[100%]">
      {inputFields.map(({ id, label, placeholder }) => (
        <div key={id} className="flex flex-col gap-[8px]">
          <label htmlFor={id} className="text-[14px] font-[600] text-[#334155]">
            {label}
          </label>
          <input
            id={id}
            type="text"
            className="placeholder-gray-400 border border-gray-400 rounded-[8px] p-[12px] text-[16px] hover:border-blue-500"
            placeholder={placeholder}
            value={inputValues[id]}
            onChange={(e) => setInputValues(prev => ({ ...prev, [e.target.id]: e.target.value }))}
          />
          {errors[id] && <p className="text-red-500 text-sm">{errors[id]}</p>}
        </div>
      ))}
    </div>
  );
};
