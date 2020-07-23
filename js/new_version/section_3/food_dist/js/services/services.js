  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      //НИЖЕ КОММЕНТАРИЙ ПОТОМУ ЧТО ЮЗАЕМ НЕ JSON
      headers: {
        'Content-type': 'application/json'
      },
      // body: JSON.stringify(object)
      body: data

      //FOR NOT JSON
      // body: formData
    });

    return await res.json();
  };

  // const getResource = async (url) => {
  //   const res = await fetch(url);

  //   if (!res.ok) {
  //     throw new Error(`Could not fatch ${url}, status: ${res.status}`);
  //   }

  //   return await res.json();
  // };

  async function getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fatch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }


  export {
    postData
  };

  export {
    getResource
  };