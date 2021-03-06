import React from "react";
import Image1 from "./Image/music.jpg";
import Image2 from "./Image/movie.jpg";
import Image3 from "./Image/book.jpg";
import Image4 from "./Image/zongyi.jpg";
const Recommand = function(props) {
  const datas = [
    {
      type: "music",
      itemName: "邓紫棋《光年之外》",
      itemImg: Image1
    },
    {
      type: "movie",
      itemName: "《调音师》",
      itemImg: Image2
    },
    {
      type: "book",
      itemName: "《javascript高级程序设计》",
      itemImg: Image3
    },
    {
      type: "zongyi",
      itemName: "《向往的生活》",
      itemImg: Image4
    }
  ];
  const recommandItems = datas.map(data => {
    // console.log(data)
    return (
      <div className={`recommand-item ${data.type}`} key={data.type}>
        <img src={data.itemImg} alt="haibao" />
        <span>{data.itemName}</span>
      </div>
    );
  });
  return (
    <div className="recommand aside-part">
      推荐板:最近音乐-电影-书-综艺
      <a href="more" className="more">
        more >
      </a>
      {recommandItems}
    </div>
  );
};

export default Recommand;
