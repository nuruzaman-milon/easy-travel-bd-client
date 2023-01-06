// email and password save user
export const saveUsers = async (usersInfo) => {
  const url = `https://easy-travel-bd-server.vercel.app/users`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(usersInfo),
  });

  const data = await res.json();
  return data;
};

// google save user
export const updateUser = async (usersInfo) => {
  const url = `https://easy-travel-bd-server.vercel.app/users/${usersInfo?.email}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(usersInfo),
  });

  const data = await res.json();
  return data;
};
