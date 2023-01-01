import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import React from "react";
import { toast } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";

const AllBusProviderList = () => {
  const url = `https://easy-travel-bd-server.vercel.app/busProvider`;

  const {
    data: dbBusProvider = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["busProvider"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (id) => {
    fetch(`https://easy-travel-bd-server.vercel.app/busProvider/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.data?.modifiedCount > 0) {
          toast.success(" Verified successfully");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(dbBusProvider);

  return (
    <section className="my-7 md:my-16">
      <div className="mb-7 md:mb-12">
        <h1 className="text-center mt-5 font-bold text-primary text-3xl">
          All Bus Provider List
        </h1>
      </div>
      <div>
        <Table>
          <Table.Head>
            <Table.HeadCell>Bus Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>License Number</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {dbBusProvider.map((busProvider) => (
              <Table.Row
                key={busProvider._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {busProvider.busName}
                </Table.Cell>
                <Table.Cell>{busProvider.email}</Table.Cell>
                <Table.Cell>{busProvider.licenseNumber}</Table.Cell>
                <Table.Cell>
                  {busProvider?.isVerified !== true ? (
                    <>
                      <button
                        onClick={() => handleVerify(busProvider._id)}
                        className="bg-primary border-none px-3 py-1 hover:bg-blue-700 text-black hover:text-white rounded"
                      >
                        UnVerifed
                      </button>
                    </>
                  ) : (
                    <>
                      <p>Verify</p>
                    </>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

export default AllBusProviderList;
