'use client'
import { Input } from '@/components/form/controls/TextInput';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Product from '../../components/product/product'
import { useSearchParams } from 'next/navigation';

const SearchForm = () => {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const timeoutId = useRef(null);

  const searchHandler = (e) => {
    const params = new URLSearchParams(searchParams);
    const query = e.target.value;



    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(async () => {
      try {
        const response = await axios.get(`/api/products/search?title=${query}`);
        params.set('title', query);
        setProducts(response.data);
        //set the search query in the url
      } catch (error) {
        console.error(error);
      }
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <div className="relative  mx-auto w-[90%]  lg:w-[305px] mt-[25px] lg:mt-0 ">
      <FaSearch className="absolute top-[12px] left-[15px] text-[#223333ad]" />
      <Input
        type="text"
        className="pl-[40px] text-[#223333ad] rounded-[0px]"
        placeholder={'Pretraži proizvode...'}
        onChange={searchHandler}
      />
      {products.map((product, i) => (
          <Product
            title={product.title}
            description={product.description}
            energy={product.price}
            weight={product.weight}
            key={product.title + i}
          />
        ))} 
    </div>
  );
};

export default SearchForm;