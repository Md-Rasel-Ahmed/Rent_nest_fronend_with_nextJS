export const getCategories=async()=>{
    const res=await fetch("/categories",{
        cache:"no-store",
        next:{"revalidate":3600}

    })
   if (!res.ok) {
    throw new Error('Failed to fetch categries');
  }

  return res.json();
}
