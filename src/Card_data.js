import React from "react";
import Card from "./Card";
import "./commons/styles/Card.css";

export default function Card_data() {
  const data = [
    {
      name: "SPARX",
      image:
        "https://static.langimg.com/thumb/93963975/online-sparx-sneakers-for-men-93963975.jpg?imgsize=40520&width=540&height=405&resizemode=75",
    },
    {
      name: "NIKE",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "ADIDAS",
      image:
        "	https://5.imimg.com/data5/ANDROID/Default/2021/6/UH/ZG/GC/120280019/img-20210624-wa0351-jpg.jpg",
    },
    {
      name: "PUMA",
      image:
        "	https://rukminim1.flixcart.com/image/850/1000/xif0q/shoe/n/x/x/-original-imaggcb5yzbk6zpw.jpeg?q=20",
    },
    {
      name: "BATA",
      image:
        "		https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-85320690/85320690.jpg",
    },
    {
      name: "WOODLAND",
      image:
        "https://i0.wp.com/1ststepin.com/wp-content/uploads/2021/04/woodland-shoe-g-40777cma-7.jpg?fit=1043%2C786&ssl=1",
    },
  ];

  return (
    <div className="cardtemplate">
      {data.map((ele) => (
        // console.log(ele.name)
        <Card apple={ele.name} mango={ele.image} />
      ))}
    </div>
  );
}
