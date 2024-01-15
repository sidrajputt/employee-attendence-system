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
    window.open(googleMapsUrl, '_blank');
  };

  const renderActivityCard = (data) => (
    <div
      key={data?._id}
      className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col gap-2"
    >
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold text-indigo-500">
            {data?.employee?.firstName} {data?.employee?.lastName}
          </h2>
          {/* <p className="text-gray-600">{data?.employee?.employeeId}</p> */}
          <p className="text-gray-600 text-sm">{data?.activityType}</p>
        </div>
        <button
          className="bg-indigo-500 text-white px-3 h-8 text-sm py-1 rounded-md"
          onClick={() => handleViewLocation(data?.location?.coordinates)}
        >
          View Location
        </button>
      </div>
      <div className="flex justify-between space-x-2 items-center">
        <p className="text-gray-700 text-sm">{formattedDate(data?.createdAt)}</p>
        <p className="text-gray-700 text-sm">{data?.description}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-screen-lg mx-auto mt-8 p-5">
      <h2 className="text-2xl font-bold text-indigo-500 mb-4">
        Employee Activity Logs
      </h2>
      <p className="text-gray-600 mb-8">Realtime Activity for employee</p>
      {activityData?.map((data) => renderActivityCard(data))}
    </div>
  );
};
