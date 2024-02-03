import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivityData } from "../../../../redux-toolkit/slice/activitySlice";
import { formattedDate } from "../../../../utils/formatDate";
export const ActivityLog = () => {
  const activityData = useSelector((state) => state.activity.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivityData());
  }, [dispatch]);

  const handleViewLocation = (coordinates) => {
    const [latitude, longitude] = coordinates;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, "_blank");
  };

  const renderActivityCard = (data) => (
    <>
    
      <div
        key={data?._id}
        className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col gap-2"
      >
        <div className="flex justify-between">
            <h2 className="text-xl font-bold text-indigo-500">
              {data?.employee?.firstName} {data?.employee?.lastName}
            </h2>
          <button
            className="bg-indigo-500 text-white px-3 h-8 text-sm py-1 rounded-md"
            onClick={() => handleViewLocation(data?.location?.coordinates)}
          >
            View Location
          </button>
        </div>
        <div className="flex justify-between">
        <p className="text-gray-600 text-sm text-red-400 font-semibold">{data?.activityType}</p>
        <p className="text-gray-700 text-sm">
            {formattedDate(data?.createdAt)}
          </p>
        </div>
        <p className="text-gray-700 text-sm">
        <p className="text-gray-700 text-sm"><span className="font-bold">Description : </span> {data?.description}</p>
          </p>
     
      </div>


    </>
  );

  return (
    <div className=" mx-auto mt-8 px-10 p-5">
      <div className="flex justify-between">
      <h2 className="text-2xl font-bold text-indigo-500 mb-4">
        Employee Activity Logs
      </h2>
              <button
      onClick={()=>  dispatch(fetchActivityData())}
                class="p-3  bg-red-200 hover:bg-blue-400 rounded-full transition duration-100 "
              >
<svg fill="#000000" className="w-6 h-6 " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 383.748 383.748">
<g>
	<path d="M62.772,95.042C90.904,54.899,137.496,30,187.343,30c83.743,0,151.874,68.13,151.874,151.874h30
		C369.217,81.588,287.629,0,187.343,0c-35.038,0-69.061,9.989-98.391,28.888C70.368,40.862,54.245,56.032,41.221,73.593
		L2.081,34.641v113.365h113.91L62.772,95.042z"/>
	<path d="M381.667,235.742h-113.91l53.219,52.965c-28.132,40.142-74.724,65.042-124.571,65.042
		c-83.744,0-151.874-68.13-151.874-151.874h-30c0,100.286,81.588,181.874,181.874,181.874c35.038,0,69.062-9.989,98.391-28.888
		c18.584-11.975,34.707-27.145,47.731-44.706l39.139,38.952V235.742z"/>
</g>
</svg>
              </button>
              </div>
      <p className="text-gray-600 mb-8">Realtime Activity for employee</p>
      {activityData?.map((data) => renderActivityCard(data))}
    </div>
  );
};
