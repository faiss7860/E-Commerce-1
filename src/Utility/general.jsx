export function inputValueUpdate(e , UpdateFunction){
  const Data = e.target.value;
  UpdateFunction(Data);
}