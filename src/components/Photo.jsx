"use client";

export const Photo = ({}) => {
    const [formValue, setFormValue] = useState({
        profilePicture: null,
        DayBirth: "",
      });
      const imageOnchange = (e) => {
        setFormValue({ ...formValue, profilePicture: e.target.files[0] });
        if (!formValue.profilePicture) {
          setErrors((prev) => ({ ...prev, image: "" }));
        }
      };    

      if (!formValue.profilePicture) {
        setErrors((prev) => ({ ...prev, image: "Профайл зурагаа оруулна уу" }));
        isValid = false;
      } else {
        setErrors((prev) => ({ ...prev, image: "" }));
      }
  return (
    
    <>
      {/* <div className="w-[100%]">
        <input
          type="file"
          onchange="readURL(this);"
          className="h-[180px] bg-[#f8f8f8] w-[100%] rounded-[8px]"
        ></input>
      </div>
      <div className="flex gap-3 flex-col w-full mb-20">

          <input
            className="placeholder-gray-400 border border-gray-400 rounded-lg p-3 text-base hover:border-blue-500"
          />

    </div> */}
    <div className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[180px] border rounded-md border-soslid">
            {formValue.profilePicture ? (
              <>
                <img
                className="w-[416px] h-[180px] h-full rounded-md border-solid"
                src={URL.createObjectURL(formValue.profilePicture)}
              />
                 <button onClick={close} className="absolute  w-6 h-6 bg-[#202124] rounded-full ">
              <img className="close.png"/>
            </button></>
            
            ):
            (<>
              <input onChange={imageOnchange} type="file" name="profileImage" />
            </>)
            }
 
         
          </div>
          
    </>
  );
};
