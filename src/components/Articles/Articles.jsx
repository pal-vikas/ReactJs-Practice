import React from 'react'
import { data, useSearchParams } from "react-router-dom";


const electronics = [
  { id: 1, title: "Smartphone", price: 700, category: "Electronics" }, // updated
  { id: 2, title: "Laptop", price: 1200, category: "Electronics" },    // updated
  { id: 3, title: "Bluetooth Headphones", price: 150, category: "Audio" },
  { id: 4, title: "Smartwatch", price: 250, category: "Electronics" }, // updated
  { id: 5, title: "4K TV", price: 900, category: "Television" },
  { id: 6, title: "Gaming Console", price: 500, category: "Electronics" }, // updated
  { id: 7, title: "Wireless Mouse", price: 30, category: "Accessories" },
  { id: 8, title: "External Hard Drive", price: 90, category: "Storage" },
  { id: 9, title: "Digital Camera", price: 600, category: "Electronics" }, // updated
  { id: 10, title: "Tablet", price: 350, category: "Mobile" }
];


function Articles() {

  const [searchParam, setSearchParam]= useSearchParams();
  const sortBy = searchParam.get("sortBy");
  const catogry = searchParam.get("catogry");
  //   const name = searchParam.get("name");
  // const age = searchParam.get("age");
  let filterData = electronics;


  const filterHandler =()=>{
        setSearchParam({
          sortBy:"true",
          catogry:"Electronics",
        })
  }

if(catogry){
filterData = filterData.filter((data)=> data.category === catogry);
}

if(sortBy==="true")
{
  filterData = [...filterData].sort((a, b) => a.price - b.price);
}
  
  return (
    <div>
            <h2>
                Article
                <p>SortBy :{sortBy} </p>
                <p>Catogry: {catogry}</p>
            </h2>

    <button onClick={filterHandler}>Sort By Price</button>
<ul>
  {
    filterData.map((data) => (
      <li key={data.id}>
       Title: {data.title} Price: {data.price}, Catagory: {data.category}
      </li>
    ))
  }
</ul>

    </div>
  )
}

export default Articles
