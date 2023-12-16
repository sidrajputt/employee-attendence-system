import axios from "axios";
import { resetAuthState } from '../../redux-toolkit/slice/authSlice';
// import { resetRestaurantState } from "../../redux-toolkit/slice/restaurantSlice"

async function logout() {
  try {
    const response = await axios.get(
      "/api/v1/auth/logout",
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        Credential: "include",
      }
    );
    return response;
    // console.log("Logged out successfully ", response);
  } catch (error) {
    console.error("Error logging out:", error);
  }
}

async function isToken() {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/v1/user/userdetail`,

    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      Credential: "include",
    }
  );
  // console.log(response);
  return response;
}

const sessionExpiryMiddleware = store => next => async action => {
  if (action.type === 'CHECK_SESSION_EXPIRY') {
    // console.log('CHECK_SESSION_EXPIRY');
    try {
      const response = await isToken();
      // console.log('CHECK_SESSION_EXPIRY', response);
  
      if (!response.status === 401) {
        // console.log("logout reason :", response);
        store.dispatch(resetAuthState());
        // store.dispatch(resetRestaurantState());
        await logout(); // Make sure to await the logout function here
      }
    } catch (error) {
      console.log('CHECK_SESSION_EXPIRY error',error);

      store.dispatch(resetAuthState());
      // store.dispatch(resetRestaurantState());
      await logout(); 
    }
  
  }

  return next(action);
};

export default sessionExpiryMiddleware;
