import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {

  const [list, setList] = useState([]);
  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/food/list`);
   
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  const removefood=async(foodID)=>{
    const response= await axios.post(`${url}/api/food/remove`,{id:foodID});
    await fetchlist();
    if(response.data.success){
        toast.success(response.data.message)
    }
    else{
        toast.error("Error")
    }
    
  }
  

  return (
    <div className="list add flex-col">
      <p className="list-title">List Of All Food Here</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Food Image</b>
          <b>Food Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removefood(item._id)} className="cross">x</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
