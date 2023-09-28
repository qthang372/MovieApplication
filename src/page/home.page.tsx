import { Container } from "@/component/container";
import { Banner } from "@/component/banner";
import { Navbar } from "@/component/navbar";
import PosterFilm from "@/component/posterFilm"
import { FC } from "react";

import imageFilm from "../asset/imageMovie/blue_beetle_ver3.jpg"
import imageFilm1 from "../asset/imageMovie/puan.jpg"
import imageFilm2 from "../asset/imageMovie/strays_ver3.jpg"


export const HomePage: FC = () => {
  return (
    <main className="flex flex-col bg-black">
      <Banner />
      <Navbar />
      <Container>
        <div className="flex gap-5 items-center justify-center relative">
          <input className="bg-gray-300 font-semibold text-lg text-black rounded-3xl w-3/4 h-11 pl-5 my-7 placeholder-black" placeholder="Search for a Movie" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-60 w-5 h-5 text-black cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <select className="text-center bg-gray-300 font-semibold text-lg text-black h-11 rounded-3xl px-1 my-7">
            <option value="" selected>Genre</option>
            <option value="" >Action</option>
            <option value="" >Adventure</option>
            <option value="" >Science Fiction</option>
            <option value="" >Romantic</option>
            <option value="" >Comedy</option>
            <option value="" >Thriller</option>
            <option value="" >Detective</option>
          </select>
        </div>

        <text className="font-semibold text-3xl text-green-600">Popular</text>
        <hr className="full-width-underline mb-3" />
        <div className="flex ml-5">
          <PosterFilm image={imageFilm} name="Blue Beetle" rating={9.1} />
          <PosterFilm image={imageFilm} name="Blue Beetle" rating={9.1} />
          <PosterFilm image={imageFilm} name="Blue Beetle" rating={9.1} />
          <PosterFilm image={imageFilm} name="Blue Beetle" rating={9.1} />
          <PosterFilm image={imageFilm} name="Blue Beetle" rating={9.1} />
          <PosterFilm image={imageFilm} name="Blue Beetle" rating={9.1} />
        </div>

        <text className="font-semibold text-3xl text-green-600">Recently  Added</text>
        <hr className="full-width-underline mb-3" />
        <div className="flex ml-5">
          <PosterFilm image={imageFilm1} name="Puan" rating={7.7} />
          <PosterFilm image={imageFilm1} name="Puan" rating={7.7} />
          <PosterFilm image={imageFilm1} name="Puan" rating={7.7} />
          <PosterFilm image={imageFilm1} name="Puan" rating={7.7} />
          <PosterFilm image={imageFilm1} name="Puan" rating={7.7} />
          <PosterFilm image={imageFilm1} name="Puan" rating={7.7} />
        </div>
        
        <text className="font-semibold text-3xl text-green-600">Recomendations</text>
        <hr className="full-width-underline mb-3" />
        <div className="flex ml-5 mb-10">
          <PosterFilm image={imageFilm2} name="Strays" rating={8.5} />
          <PosterFilm image={imageFilm2} name="Strays" rating={8.5} />
          <PosterFilm image={imageFilm2} name="Strays" rating={8.5} />
          <PosterFilm image={imageFilm2} name="Strays" rating={8.5} />
          <PosterFilm image={imageFilm2} name="Strays" rating={8.5} />
          <PosterFilm image={imageFilm2} name="Strays" rating={8.5} />
        </div>

      </Container>
    </main>
  )
} 