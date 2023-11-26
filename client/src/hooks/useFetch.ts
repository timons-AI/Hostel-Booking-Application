import { useEffect, useState } from "react";
import axios from "axios";

export type Data = {
  _id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos: string[];
  description: string;
  rating: number;
  rooms: string[];
  cheapestPrice: number;
  featured: boolean;
  __v: number;
};

export type Object = {
  success: boolean;
  data: Data[];
};

const useFetch = (url: string) => {
  const [datas, setData] = useState<Object | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err: any) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return { datas, loading, error, reFetch };
};

export default useFetch;

// {
//   "success": true,
//   "data": [
//     {
//       "_id": "65625acf9d7c95225282ae12",
//       "name": "All that is wrong with me ",
//       "type": "Hostel",
//       "city": "London",
//       "address": "2 Southampton Row",
//       "distance": "500",
//       "photos": [
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg",
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg",
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg"
//       ],
//       "description": "Hostel One Camden offers a variety of private rooms and shared dormitories. The property has a 24-hour reception with luggage storage.",
//       "rating": 4.5,
//       "rooms": [
//         "Mixed Dormitory Room",
//         "Bed in 4-Bed Mixed Dormitory Room",
//         "Bed in 6-Bed Mixed Dormitory Room",
//         "Bed in 8-Bed Mixed Dormitory Room",
//         "Bed in 10-Bed Mixed Dormitory Room",
//         "65632190f2892e6bde254abf",
//         "65632352b012f8062a2975a7"
//       ],
//       "cheapestPrice": 10,
//       "featured": true,
//       "__v": 0
//     },
//     {
//       "_id": "65634aaaecddf082ddb05264",
//       "name": "Coke LOLO",
//       "type": "Music",
//       "city": "Berlin",
//       "address": "2 Southampton Row",
//       "distance": "500",
//       "photos": [
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg",
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg",
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg"
//       ],
//       "description": "Hostel One Camden offers a variety of private rooms and shared dormitories. The property has a 24-hour reception with luggage storage.",
//       "rating": 4.5,
//       "rooms": [
//         "Mixed Dormitory Room",
//         "Bed in 4-Bed Mixed Dormitory Room",
//         "Bed in 6-Bed Mixed Dormitory Room",
//         "Bed in 8-Bed Mixed Dormitory Room",
//         "Bed in 10-Bed Mixed Dormitory Room"
//       ],
//       "cheapestPrice": 10,
//       "featured": true,
//       "__v": 0
//     },
//     {
//       "_id": "65634ad6ecddf082ddb05268",
//       "name": "You Camden",
//       "type": "Hostel",
//       "city": "Kampala",
//       "address": "2 Southampton Row",
//       "distance": "500",
//       "photos": [
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg",
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg",
//         "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg"
//       ],
//       "description": "Hostel One Camden offers a variety of private rooms and shared dormitories. The property has a 24-hour reception with luggage storage.",
//       "rating": 4.5,
//       "rooms": [
//         "Mixed Dormitory Room",
//         "Bed in 4-Bed Mixed Dormitory Room",
//         "Bed in 6-Bed Mixed Dormitory Room",
//         "Bed in 8-Bed Mixed Dormitory Room",
//         "Bed in 10-Bed Mixed Dormitory Room"
//       ],
//       "cheapestPrice": 10,
//       "featured": true,
//       "__v": 0
//     }
//   ]
// }
