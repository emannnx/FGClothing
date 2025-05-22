import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

interface cloth {
    id :number;
    title: string;
    description: string;
    image :any
}

export const cloth_data : cloth[] = [
    {
      id: 1,
      title: "Summer Collection",
      description: "Light fabrics for warm days",
      image: image1
    },
    {
      id: 2,
      title: "Business Casual",
      description: "Office wear with style",
      image: image2
    },
    {
      id: 3,
      title: "Formal Wear",
      description: "Classic elegance for special occasions",
      image: image3
    },
    {
      id: 4,
      title: "Street Style",
      description: "Urban fashion for everyday",
      image: image4
    },
    {
      id: 5,
      title: "Winter Collection",
      description: "Warm layers for the cold season",
      image: image5
    },
    {
      id: 6,
      title: "Accessories",
      description: "Complete your look",
      image: image6
    },
    {
      id: 7,
      title: "Accessories",
      description: "Complete your look",
      image: image7
    }
  ];