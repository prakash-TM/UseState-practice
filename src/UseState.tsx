import { useEffect, useState } from "react";

const FuncComp = () => {
  useEffect(() => {
    console.log("Use effect rendered");
  }, []);

  const [count, setCount] = useState(0);
  /**
   * 1 - Default value
   * 2 - Getter - Only to read data
   * 3 - Setter - Only to set/write data
   */
  const [name, setName] = useState("Arun");
  const [age, setAge] = useState(22);
  const [inCity, setInCity] = useState(0);
  const [hobbies, setHobbies] = useState(["biking", "music", "food"]);
  const [profile, setProfile] = useState({
    name: "Arun",
    city: "Morena",
    state: "MP",
    isActive: true,
    isActive2: false,
  });
  console.log("Re-Render: ", profile);

  /**
   *
   * @param e
   * @description {Handle dynamic checkbox}
   * Step 1- Check if the checked key is a valid key
   * Step 2- We need to get the checked value from the profile obj
   * Step 3- Toggle the current value & save it with the obj
   *
   */

  useEffect(() => {
    console.log("Name is changed: ", name);
  }, [name, age]);

  const _handleInputChange = (e: any) => {
    let { name, value, type } = e.target;
    console.log({ name, value, type });

    if (type === "checkbox") {
      value = !profile[name];
    }

    const _newObj = { ...profile, [name]: value };

    setName(value);
    setProfile(_newObj);
  };

  return (
    <>
      <input
        value={profile.name}
        name="name"
        type="text"
        placeholder="Enter here"
        onChange={_handleInputChange}
      />
      <input
        value={profile.city}
        name="city"
        type="text"
        placeholder="Enter here"
        onChange={_handleInputChange}
      />
      <input
        value={profile.state}
        name="state"
        type="text"
        placeholder="Enter here"
        onChange={_handleInputChange}
      />
      <input
        checked={profile.isActive}
        name="isActive"
        type="checkbox"
        onChange={_handleInputChange}
      />
      <input
        checked={profile.isActive2}
        name="isActive2"
        type="checkbox"
        onChange={_handleInputChange}
      />
    </>
  );
};

export default FuncComp;
