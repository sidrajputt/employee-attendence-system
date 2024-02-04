

export const formattedDate =(dateString)=>{

    const date = new Date(dateString);
    
    const options = {
        hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    };
    
    const formattedDate = date.toLocaleString('en-IN', options);
    // console.log(formattedDate);
    return formattedDate;
 
}



export const formattedDateOnly =(dateString)=>{

  const date = new Date(dateString);
  
 
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  };
  

  const formattedDate = date.toLocaleString('en-IN', options);
  // console.log(formattedDate);
  return formattedDate;

}