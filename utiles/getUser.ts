export const getUsers=async()=>{
    const res=await fetch("https://assinemen4.vercel.app/api/admin/users",{
        cache:"no-store",
        next:{"revalidate":3600}

    })
   if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}
