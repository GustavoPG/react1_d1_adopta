import { useState } from 'react';
import Header from "./Header";
import MyCard from "./MyCard";
import Footer from "./Footer";

function App() {

  return (
    <>
      <div className='text-center'>
        <Header title="Adopta un Perrito" />
      </div>

      <div className='container'>
        <div className='row justify-content-center gap-5'>
          <MyCard myCardSrc="./src/images/1.jpg"
            myCardName="Bolt"
            myCardDescription="Bolt es un cachorro juguetón y enérgico de raza Jack Russell Terrier, siempre listo para perseguir una pelota o dar largos paseos corriendo por el parque."
            textBadge="Jack Russell Terrier"
            colorBadge="success" />

          <MyCard myCardSrc="./src/images/2.jpg"
            myCardName="Luna"
            myCardDescription=" Luna, una adorable cachorra de raza Caniche, tiene una personalidad dulce y cariñosa. Le encanta acurrucarse en el regazo de su dueño y recibir mimos."
            textBadge="Caniche"
            colorBadge="success" />

          <MyCard myCardSrc="./src/images/3.jpg"
            myCardName="Rocky"
            myCardDescription="Con su pelaje esponjoso y ojos curiosos, un cachorro de Bichón Maltés, disfruta explorando el mundo que lo rodea y correr libremente por la naturaleza."
            textBadge="Bichón Maltés"
            colorBadge="primary" />

          <MyCard myCardSrc="./src/images/4.jpg"
            myCardName="Coco"
            myCardDescription="Coco, travieso cachorro de Dogo de Burdeos, siempre está listo para una aventura. Su naturaleza juguetona y su cola en constante movimiento llenan de alegría cualquier hogar."
            textBadge="Dogo de Burdeos"
            colorBadge="info" />

          <MyCard myCardSrc="./src/images/5.jpg"
            myCardName="Bella"
            myCardDescription="Bella, una cachorra de raza Labrador, es tan valiente como encantadora. A pesar de su tamaño, no hay obstáculo que pueda detener su determinación y curiosidad."
            textBadge="Labrador"
            colorBadge="success" />

          <MyCard myCardSrc="./src/images/6.jpg"
            myCardName="Max"
            myCardDescription="Max, un cachorro de Bulldog Inglés, es leal y protector desde una edad temprana. Su inteligencia y disposición para aprender hacen que sea un compañero ideal para toda la familia."
            textBadge="Bulldog Inglés"
            colorBadge="info" />

          <MyCard myCardSrc="./src/images/7.jpg"
            myCardName="Daisy"
            myCardDescription="Con su pelaje blanco como la nieve y ojos brillantes, Daisy, una cachorra de Bichón Maltés, es una bola de energía y alegría. Siempre lista para jugar y hacer nuevos amigos."
            textBadge="Bichón Maltés"
            colorBadge="primary" />

          <MyCard myCardSrc="./src/images/8.jpg"
            myCardName="Simba"
            myCardDescription="Simba, un hermoso y tierno cachorro, tiene una personalidad única y llena de carácter. Sus ronquidos son tan adorables como su naturaleza juguetona."
            textBadge="Corgi Galés"
            colorBadge="primary" />

          <MyCard myCardSrc="./src/images/9.jpg"
            myCardName="Milo"
            myCardDescription="Milo, un dulce cachorro mestizo, es una mezcla única de energía y ternura. Su amor incondicional y disposición para hacer feliz a todos los que lo rodean lo convierten en un compañero invaluable."
            textBadge="Mestizo"
            colorBadge="success" />
        </div>
      </div>

      <div className='text-center bg-success mt-5 py-3 text-white'>
        <Footer />
      </div>
    </>
  );
};

export default App;
