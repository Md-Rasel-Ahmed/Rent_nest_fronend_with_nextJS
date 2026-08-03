export const getProperties=async()=>{
    const res=await fetch("https://assinemen4.vercel.app/api/landlord/properties",{
        cache:"no-store",
        next:{"revalidate":3600}

    })
   if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}