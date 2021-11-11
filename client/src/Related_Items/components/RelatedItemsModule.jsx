/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { CarousolHeader, CarousolText } from '../RelatedItemsStyles.js';
import utils from '../../Shared/serverUtils.js';
import Carousel from './Carousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedItems = (props) => {
  const [data, setData] = useState([]);
  const [mainProduct, setMainProduct] = useState(props.mainProduct);
  const [modal, setModal] = useState(false);
  const [currentCompare, setCurrentCompare] = useState(null);
  const [outfit, setOutfit] = useState({ ids: [], bucket: {} });

  useEffect(() => {
    utils.getRelatedProducts(mainProduct.id).then((newData) => setData(newData.data));
    utils.getItemDetails(mainProduct.id).then((mainDetails) => {
      utils.getRating(mainProduct.id).then((newData) => {
        const newProduct = { ...mainDetails.data };
        newProduct.ratings = newData.data.ratings;
        setMainProduct(newProduct);
      });
    });
    utils.getCurrentOutfit().then((storedOutfit) => {
      const outfitBucket = {
        bucket: storedOutfit.data,
      };
      if (storedOutfit.data[mainProduct.id]) {
        outfitBucket.ids = Object.keys(storedOutfit.data);
      } else {
        outfitBucket.ids = [...Object.keys(storedOutfit.data), 'ADD TO OUTFIT'];
      }
      setOutfit(outfitBucket);
    });
  }, []);

  function addOutfit() {
    if (outfit.ids.indexOf(mainProduct.id) === -1) {
      const newBucket = { ...outfit.bucket };
      newBucket[mainProduct.id] = mainProduct;
      utils.addItemToOutfit(mainProduct);
      setOutfit({
        ids: [...outfit.ids.slice(0, -1), mainProduct.id],
        bucket: newBucket,
      });
    }
  }

  function removeOutfit({ id }) {
    const outfitBucketCopy = { ...outfit.bucket };
    utils.deleteItemFromOutfit(id);
    delete outfitBucketCopy[id];
    const idCopy = Object.keys(outfitBucketCopy);
    if (!outfitBucketCopy[mainProduct.id]) {
      idCopy.push('ADD TO OUTFIT');
    }
    setOutfit({
      ids: idCopy,
      bucket: outfitBucketCopy,
    });
  }

  function turnOnModal(product) {
    setModal(true);
    setCurrentCompare(product);
  }

  function turnOffModal() {
    setModal(false);
  }

  function displayModal() {
    if (modal) {
      return (
        <ComparisonModal
          product={mainProduct}
          compare={currentCompare}
          modalOff={() => turnOffModal()}
        />
      );
    }
    return undefined;
  }

  if (outfit) {
    return (
      <section id="related_products_and_comparison_module" data-testid="relateditems">
        <section>
          <CarousolHeader>
            <CarousolText>
              YOUR OUTFIT
            </CarousolText>
          </CarousolHeader>
          <Carousel
            type="OUTFIT"
            key="Carousel-OUTFIT"
            action={(selectedProduct) => removeOutfit(selectedProduct)}
            outfit={outfit.ids}
            outfitBucket={outfit.bucket}
            mainProduct={mainProduct}
            addOutfit={(addToOutfit) => addOutfit(addToOutfit)}
          />
        </section>
        <section>
          {displayModal()}
          <CarousolHeader>
            <CarousolText>
              WEAR IT WITH
            </CarousolText>
          </CarousolHeader>
          <Carousel
            type="RELATED"
            key="Carousel-RELATED"
            action={(selectedProduct) => turnOnModal(selectedProduct)}
            data={data}
          />
        </section>
      </section>
    );
  }
  return 'Loading...';
};

export default RelatedItems;
