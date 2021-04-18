function multiplyBy(arr, number) 
{
  for (i = 0; i < arr.length; i++)
  {
    arr[i] *= number; 
  }

  return arr;
};

module.exports = multiplyBy;
