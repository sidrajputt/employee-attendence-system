import React from 'react'

export const QuickView = () => {
  return (
   <>
       <div className='flex w-full bg-primary p-5 gap-x-5'>
    <article class="flex flex-col gap-4 rounded-lg w-full  border border-gray-100 bg-white p-6">
  <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
  </div>

  <div>
    <strong class="block text-sm font-medium text-gray-500"> Total No of  Employee  </strong>

    <p>
      <span class="text-2xl font-medium text-gray-900"> 15 </span>


    </p>
  </div>
</article>
<article class="flex flex-col gap-4 rounded-lg w-full  border border-gray-100 bg-white p-6">
  <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
   

    <span class="text-xs font-medium"> 67.81% </span>
  </div>

  <div>
    <strong class="block text-sm font-medium text-gray-500"> Total Present </strong>

    <p>
      <span class="text-2xl font-medium text-gray-900"> 15 </span>

      <span class="text-sm px-2 text-gray-500"> from 20 </span>
    </p>
  </div>
</article>

<article class="flex flex-col gap-4 rounded-lg border w-full border-gray-100 bg-white p-6">
  <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
    

    <span class="text-xs font-medium"> 67.81% </span>
  </div>

  <div>
    <strong class="block text-sm font-medium text-gray-500"> Total Absent </strong>

    <p>
      <span class="text-2xl font-medium text-gray-900"> 5 </span>

      <span class="text-sm px-2 text-gray-500"> from 20 </span>
    </p>
  </div>
</article>
    </div>
   
   </>
  )
}
