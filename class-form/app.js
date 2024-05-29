const submitForm = () => {
  const info = document.getElementById("Contact-Form");
  console.log(info);
  const formDatas = new FormData(info);
  for (const value of formDatas.values()) {
    console.log(value);
  }
};
