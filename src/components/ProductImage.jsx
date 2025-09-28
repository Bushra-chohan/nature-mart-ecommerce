import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';


import img1 from '../assets/tryq.jpg';

function ProductImage({img}) {
  return (
    <div className="w-[30rem] h-[25rem] flex justify-center mt-20">
      <InnerImageZoom
        src={img}
        zoomSrc={img}
        zoomType="hover"
        zoomPreload={true}
        zoomScale={1.5}
      />
    </div>
  );
}

export default ProductImage;
