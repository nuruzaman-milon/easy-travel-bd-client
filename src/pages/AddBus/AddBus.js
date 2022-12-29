import { Checkbox, FileInput, Label } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const AddBus = () => {
    const { user } = useSelector((state) => state.user);
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    const handleAddBus = data => {
        // setLoading(true);
        const {
            Blanket, Pillow, Snacks, Water, Wifi, TV, GPS, AC, Emergency_Exit,
            Reading_Light, Charging_Port, busName, busNumber, date, img, from, to,
            reportingTime, departureTime, fare, coachType, seatCapacity
        } = data;

        const Facilities = [Blanket, Pillow, Snacks, Water, Wifi, TV, GPS, AC, Emergency_Exit,
            Reading_Light, Charging_Port,]

        console.log(Facilities);
        // const imageHost = process.env.REACT_APP_imageHost;
        const image = img[0];
        const formData = new FormData();
        formData.append('image', image);
        // fetch(`https://api.imgbb.com/1/upload?key=2c4a26db09c691cf3052908828566aee`, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         if (imgData.success) {
        //             const bus = {
        //                 email: user?.email,
        //                 provider: user?.displayName,
        //                 BusName: busName,
        //                 Image: imgData.data.url,
        //                 BusNumber: busNumber,
        //                 Date: date,
        //                 DepartureTime: departureTime,
        //                 ReportingTime: reportingTime,
        //                 From: from,
        //                 To: to,
        //                 Fare: fare,
        //                 CoachType: coachType,
        //                 SeatCapacity: seatCapacity,
        //                 Facilities
        //             }

        // fetch(`https://resell-bikes-server.vercel.app/products`, {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json',
        //         authorization: `bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     body: JSON.stringify(bus)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.acknowledged) {
        //             toast.success(`Your Product added successfully`)
        //             setLoading(false);
        //             navigate('/dashboard/myproducts')
        //         }
        //     })
    }
    // })
    // }


    return (
        <form onSubmit={handleSubmit(handleAddBus)} className='border pt-2 pb-6 md:px-12 px-8 my-8 border-primary'>

            <h2 className='text-2xl text-center my-4 text-primary font-semibold'>Add Your Bus</h2>

            <div className="form-control w-full">

                {/* Bus Name */}
                <input type="text" placeholder='Bus Name'
                    {...register("busName",
                        { required: "Bus Name is required" })}
                    className="rounded-md w-full my-2 " />
                {errors.busName && <p className='text-red-600 text-sm'>{errors.busName?.message}</p>}

                {/* Bus Number */}
                <input type="text" placeholder='Bus Number'
                    {...register("busNumber",
                        { required: "Bus Number is required" })}
                    className="rounded-md w-full my-2 " />
                {errors.busNumber && <p className='text-red-600 text-sm'>{errors.busNumber?.message}</p>}

                {/* date */}
                <label className='text-gray-700'>Bus Available on</label>
                <input type="date" min="2022-12-20"
                    {...register("date",
                        { required: "Date is required" })}
                    className="rounded-md w-full mt-1 mb-2 " />
                {errors.date && <p className='text-red-600 text-sm'>{errors.date?.message}</p>}

                {/* From */}
                <input type="text" placeholder='Leaving from e.g. Dhaka'
                    {...register("from",
                        { required: "This field is required" })}
                    className="rounded-md w-full my-2 " />
                {errors.from && <p className='text-red-600 text-sm'>{errors.from?.message}</p>}

                {/* To */}
                <input type="text" placeholder='Destination e.g. Khulna'
                    {...register("to",
                        { required: "Destination is required" })}
                    className="rounded-md w-full my-2 " />
                {errors.to && <p className='text-red-600 text-sm'>{errors.to?.message}</p>}

                {/* Reporting time */}
                <input type="text" placeholder='Reporting time e.g. 11:00 pm'
                    {...register("reportingTime",
                        { required: "Reporting time is required" })}
                    className="rounded-md w-full my-2 " />
                {errors.reportingTime && <p className='text-red-600 text-sm'>{errors.reportingTime?.message}</p>}

                {/* Departure time */}
                <input type="text" placeholder='Departure time e.g. 11:30 pm'
                    {...register("departureTime",
                        { required: "Departure time is required" })}
                    className="rounded-md w-full my-2 " />
                {errors.departureTime && <p className='text-red-600 text-sm'>{errors.departureTime?.message}</p>}

                {/* Fare */}
                <input type="number" placeholder='Fare e.g. 1200'
                    {...register("fare",
                        {
                            required: "Fare is required",
                        }
                    )}
                    className="rounded-md w-full my-2 " />
                {errors.fare && <p className='text-red-600 text-sm'>{errors.fare?.message}</p>}

                {/* Coach Type */}
                <label className="label ">
                    <span className="label-text">Coach Type: </span>
                </label>
                <select
                    {...register("coachType",
                        {
                            required: "Coach Type is required",
                        }
                    )}
                    className="rounded-md w-full my-2 ">
                    <option value='AC'>AC</option>
                    <option value='Non AC'>Non AC</option>
                </select>
                {errors.coachType && <p role="alert" className='text-red-600 text-sm'>{errors.coachType?.message}</p>}

                {/* Seat Capacity */}
                <label className="label ">
                    <span className="label-text">Seat Capacity: </span>
                </label>
                <select
                    {...register("seatCapacity",
                        {
                            required: "Seat Capacity is required",
                        }
                    )}
                    className="rounded-md w-full my-2 ">
                    <option value='27'>27</option>
                    <option value='36'>36</option>
                </select>
                {errors.seatCapacity && <p role="alert" className='text-red-600 text-sm'>{errors.seatCapacity?.message}</p>}

                {/* Facilities */}
                <p className='mt-2 mb-1'>Facilities: </p>
                <div className="flex gap-4 mb-2 flex-wrap" id="checkbox">

                    <div className="flex items-center gap-2">
                        <Checkbox value='Blanket' {...register("Blanket")} id="Blanket" />
                        <Label htmlFor="Blanket">Blanket</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='Snacks' {...register("Snacks")} id="Snacks" />
                        <Label htmlFor="Snacks">Snacks</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='Water'  {...register("Water")} id="Water" />
                        <Label htmlFor="Water">Water</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='Wifi' {...register("Wifi")} id="Wifi" />
                        <Label htmlFor="Wifi">Wifi</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='TV' {...register("TV")} id="TV" />
                        <Label htmlFor="TV">TV</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='GPS' {...register("GPS")} id="GPS" />
                        <Label htmlFor="GPS">GPS</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='Air Conditioner' {...register("AC")} id="AC" />
                        <Label htmlFor="AC">Air Conditioner</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='Emergency Exit' {...register("Emergency_Exit")} id="Emergency-Exit" />
                        <Label htmlFor="Emergency-Exit">Emergency Exit</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='Reading Light' {...register("Reading_Light")} id="Reading-Light" />
                        <Label htmlFor="Reading-Light">Reading Light</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='Charging Port' {...register("Charging_Port")} id="Charging-Port" />
                        <Label htmlFor="Charging-Port">Charging Port</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox value='Pillow' {...register("Pillow")} id="Pillow" />
                        <Label htmlFor="Pillow">Pillow</Label>
                    </div>

                </div>

                {/* Bus Image */}
                <div id="fileUpload">
                    <div className="mb-2 block ">
                        <Label
                            htmlFor="file"
                            value="Upload Bus Image"
                        />
                    </div>
                    <FileInput
                        id="file"
                        {...register("img",
                            { required: "Bus Image is required" })} />
                    {errors.img && <p role="alert" className='text-red-600 text-sm'>{errors.img?.message}</p>}
                </div>
            </div>
            <input className='bg-primary mt-4 w-full py-2 rounded-lg cursor-pointer' type="submit" value={'Submit'} />
        </form>
    );
};

export default AddBus;