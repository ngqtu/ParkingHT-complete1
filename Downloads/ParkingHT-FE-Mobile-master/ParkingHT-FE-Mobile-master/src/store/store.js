import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import vehicleSlice from './vehicleSlice';
import categorySlice from './categorySlice';
import reportSlice from './reportSlice';
import userSlice from './userSlice';
import bookingSlice from './bookingSlice';
import parkingslotSlice from './parkingslotSlice';
import paymentSlice from './paymentSlice';
import feedbackSlice from './feedbackSlice';
import otpSlice from './otpSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    vehicle: vehicleSlice,
    category: categorySlice,
    report: reportSlice,
    user: userSlice,
    booking: bookingSlice,
    parkingslot: parkingslotSlice,
    payment: paymentSlice,
    feedback: feedbackSlice,
    otp: otpSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});


export default store;