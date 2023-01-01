// save bus provider information
export const saveBusProvider = async (busProviderInfo) => {
  const url = `https://easy-travel-bd-server.vercel.app/bus-provider`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(busProviderInfo),
  });

  const data = await res.json();
  return data;
};
