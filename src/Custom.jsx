const useControl = (props) => {
  console.log("props", props);
  var neww;
  function update(newww) {
    neww = newww;
    const forr = () => {
      console.log(neww, "neww");
    };
  }
  return [neww, update(props)];
};

export default useControl;
