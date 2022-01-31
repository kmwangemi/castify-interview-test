
export const fetchData = async () => {
   const url = "https://cdn.castify.ai/files/app/1643621628720.json";
   try {
      let res = await fetch(url);
      return await res.json();
   } catch (error) {
      console.log(error);
   }
}