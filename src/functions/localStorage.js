const localStorageData = (newData) => {
  const existingData = JSON.parse(localStorage.getItem("data")) || [];
  const updatedData = [...existingData, newData];
  localStorage.setItem("data", JSON.stringify(updatedData));
};
export default localStorageData;
