export const useFetch = async (url, gql) => {
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




// export const fetchPokemon = async (url, id) => {
//   const res = await fetch(`${url}${id + 0}`)
//   if (res.status === 404) {
//     return
//   }

//   const data = await res.json()
  

//   return data
// }

// export async function getStaticPaths() {
//     const slugsResponse = await fetch(
//   'https://graphql.datocms.com/preview',
//   {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Authorization': `Bearer ${import.meta.env.ASTRO_EXAMPLE_CMS_DATOCMS_API_TOKEN}`,
//     },
//     body: JSON.stringify(
//       {query: `{allPosts {
//     slug
//   }}`}
//     ),
//   }
// )
//   const parsedSlugResponse = await slugsResponse.json()
  
//   const pathsArray = []
//   for(const slug of parsedSlugResponse.data.allPosts){
//     pathsArray.push({params: slug})
//   }
//   return pathsArray;
// }