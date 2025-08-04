const url = 'https://recruit.cskmitl.com/blog/list';


export const GET = async()=>{
    await new Promise ((resolve) => {setInterval(resolve,500)});
  const res = await fetch(url);
  const data = await res.json();
 return Response.json(data);
}




