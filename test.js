const startValue = '3.2';
const Values = [
  '1.677', '3.230', '3.444', '4.15', '9.999', '3', '3.2', '3.477', '3.333', '2.222'
];
Values.push( startValue );

const findWidestGap = ( Arr ) => {
  const length = Arr.length;
  Arr.sort();

  let low = -1, high = -1;
  for ( let i = 0; i < length-1; i++ )
  {
    if ( Arr[i+1] - Arr[i] >= high - low )
    {
      if ( Arr[i+1] - Arr[i] == high - low )
      {
        if ( Math.random() <= 0.5 )
        {
          high = Arr[i+1];
          low = Arr[i];
        }
      }
      else
      {
        high = Arr[i+1];
        low = Arr[i];
      }
    }
  }

  console.log( `%cBottom: ${low}`, 'color: #a4f644; background-color: #000;' );
  console.log( `Top: ${high}` );
  console.log( `My answer: ${(Number(low)+Number(high))/2}` );
} 

findWidestGap( Values );