import { FileInput, Label } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddBus = () => {
  const [dbBusProvider, setBusProvider] = useState([]);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const { isVerified } = dbBusProvider;

  useEffect(() => {
    fetch(`https://easy-travel-bd-server.vercel.app/busProvider/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBusProvider(data));
  }, [user]);

  const handleAddBus = (data) => {
    // setLoading(true);
    const {
      busName,
      busNumber,
      date,
      img,
      from,
      to,
      reportingTime,
      departureTime,
      fare,
      coachType,
      seatCapacity,
    } = data;

    console.log(
      busName,
      busNumber,
      date,
      img,
      from,
      to,
      reportingTime,
      departureTime,
      fare,
      coachType
    );
    // const imageHost = process.env.REACT_APP_imageHost;
    const image = img[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=2c4a26db09c691cf3052908828566aee`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const bus = {
            email: user?.email,
            provider: user?.displayName,
            BusName: busName,
            // Image: imgData.data.url,
            BusNumber: busNumber,
            Date: date,
            DepartureTime: departureTime,
            ReportingTime: reportingTime,
            From: from,
            To: to,
            Fare: fare,
            CoachType: coachType,
            SeatCapacity: seatCapacity,
          };

          fetch(`https://easy-travel-bd-server.vercel.app/available-bus`, {
              method: "POST",
              headers: {
                  'content-type': 'application/json',
                  // authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(bus)
          })
              .then(res => res.json())
              .then(data => {
                  if (data.acknowledged) {
                      toast.success(`Bus added successfully`)
                      // setLoading(false);
                      navigate('/')
                  }
              })
        }
      });
  };

  return (
    <>
      {isVerified === true ? (
        <>
          <form
            onSubmit={handleSubmit(handleAddBus)}
            className="border pt-2 pb-6 md:px-12 px-8 my-8 border-primary"
          >
            <h2 className="text-2xl text-center my-4 text-primary font-semibold">
              Add Your Bus
            </h2>

            <div className="form-control w-full">
              {/* Bus Name */}
              <input
                type="text"
                placeholder="Bus Name"
                {...register("busName", { required: "Bus Name is required" })}
                className="rounded-md w-full my-2 "
              />
              {errors.busName && (
                <p className="text-red-600 text-sm">
                  {errors.busName?.message}
                </p>
              )}

              {/* Bus Number */}
              <input
                type="text"
                placeholder="Bus Number"
                {...register("busNumber", {
                  required: "Bus Number is required",
                })}
                className="rounded-md w-full my-2 "
              />
              {errors.busNumber && (
                <p className="text-red-600 text-sm">
                  {errors.busNumber?.message}
                </p>
              )}

              {/* date */}
              <label className="text-gray-700">Bus Available on</label>
              <input
                type="date"
                min="2022-12-20"
                {...register("date", { required: "Date is required" })}
                className="rounded-md w-full mt-1 mb-2 "
              />
              {errors.date && (
                <p className="text-red-600 text-sm">{errors.date?.message}</p>
              )}

              {/* From */}
              <input
                type="text"
                placeholder="Leaving from e.g. Dhaka"
                {...register("from", { required: "This field is required" })}
                className="rounded-md w-full my-2 "
              />
              {errors.from && (
                <p className="text-red-600 text-sm">{errors.from?.message}</p>
              )}

              {/* To */}
              <input
                type="text"
                placeholder="Destination e.g. Khulna"
                {...register("to", { required: "Destination is required" })}
                className="rounded-md w-full my-2 "
              />
              {errors.to && (
                <p className="text-red-600 text-sm">{errors.to?.message}</p>
              )}

              {/* Reporting time */}
              <input
                type="text"
                placeholder="Reporting time e.g. 11:00 pm"
                {...register("reportingTime", {
                  required: "Reporting time is required",
                })}
                className="rounded-md w-full my-2 "
              />
              {errors.reportingTime && (
                <p className="text-red-600 text-sm">
                  {errors.reportingTime?.message}
                </p>
              )}

              {/* Departure time */}
              <input
                type="text"
                placeholder="Departure time e.g. 11:30 pm"
                {...register("departureTime", {
                  required: "Departure time is required",
                })}
                className="rounded-md w-full my-2 "
              />
              {errors.departureTime && (
                <p className="text-red-600 text-sm">
                  {errors.departureTime?.message}
                </p>
              )}

              {/* Fare */}
              <input
                type="number"
                placeholder="Fare e.g. 1200"
                {...register("fare", {
                  required: "Fare is required",
                })}
                className="rounded-md w-full my-2 "
              />
              {errors.fare && (
                <p className="text-red-600 text-sm">{errors.fare?.message}</p>
              )}

              {/* Coach Type */}
              <label className="label ">
                <span className="label-text">Coach Type: </span>
              </label>
              <select
                {...register("coachType", {
                  required: "Coach Type is required",
                })}
                className="rounded-md w-full my-2 "
              >
                <option value="AC">AC</option>
                <option value="Non AC">Non AC</option>
              </select>
              {errors.coachType && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.coachType?.message}
                </p>
              )}

              {/* Seat Capacity */}
              <label className="label ">
                <span className="label-text">Seat Capacity: </span>
              </label>
              <select
                {...register("seatCapacity", {
                  required: "Seat Capacity is required",
                })}
                className="rounded-md w-full my-2 "
              >
                <option value="27">27</option>
                <option value="36">36</option>
              </select>
              {errors.seatCapacity && (
                <p role="alert" className="text-red-600 text-sm">
                  {errors.seatCapacity?.message}
                </p>
              )}

              {/* <div id="fileUpload">
                <div className="mb-2 block ">
                  <Label htmlFor="file" value="Upload Bus Image" />
                </div>
                <FileInput
                  id="file"
                />
                
              </div> */}
            </div>
            <input
              className="bg-primary mt-4 w-full py-2 rounded-lg cursor-pointer"
              type="submit"
              value={"Submit"}
            />
          </form>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-screen">
            <p>Your Request is Processing</p>
          </div>
        </>
      )}
    </>
  );
};

export default AddBus;
