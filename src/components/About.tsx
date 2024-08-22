import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          voluptates quaerat, aspernatur perferendis omnis architecto porro
          facilis voluptatum veritatis consequuntur exercitationem atque
          nesciunt deleniti libero ex suscipit molestias provident obcaecati vel
          maiores fuga? Explicabo vero, sed nam optio excepturi, aperiam, natus
          quibusdam aspernatur ad at beatae ipsam sunt error eveniet.
        </p>
        <br />

        <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae inventore accusamus ratione soluta voluptates voluptas id illum, laudantium modi, similique cum esse ab eum expedita quia consequatur mollitia. Quas, eaque quia repudiandae similique possimus nostrum illo sequi error dolore libero enim? Ipsa vitae suscipit neque, repellat velit nisi omnis dolore!
        </p>
      </div>
    </div>
  );
};

export default About;
