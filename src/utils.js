export const formatMDY = (date) => {
  var today = new Date(date);
  var output = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
  return output;
}
