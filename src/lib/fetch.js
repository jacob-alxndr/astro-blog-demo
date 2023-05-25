const useFetch = async (url, gql) => {
    const res = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${import.meta.env.ASTRO_EXAMPLE_CMS_DATOCMS_API_TOKEN}`,
      },
      body: JSON.stringify(
        gql
      ),
    }
  )
  return res

}

export default useFetch; 