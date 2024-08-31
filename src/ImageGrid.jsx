import Image1 from "./assets/images/banner.jpeg";
import Image2 from "./assets/images/chefimage.png";
import Image3 from "./assets/images/live.jpeg";
import Image4 from "./assets/images/recipes.jpeg";

function ImageGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap- pt-14">
      <img src={Image1} className="w-full h-40 object-fill" alt="Image 1" />
      <img src={Image2} className="w-full h-40 object-fill" alt="Image 2" />
      <img src={Image3} className="w-full h-40 object-fill" alt="Image 3" />
      <img src={Image4} className="w-full h-40 object-fill" alt="Image 4" />
    </div>
  );
}

export default ImageGrid;
