
export default async function Pageserver(){
      const res = await fetch('/api');
      const data = await res.json();
      console.log(data);
    }
