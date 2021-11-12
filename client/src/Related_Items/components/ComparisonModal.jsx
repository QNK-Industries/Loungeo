/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { ModalContainer, ModalContent } from '../RelatedItemsStyles.js';

const ComparisonModal = ({ product, compare, modalOff, modal }) => {
  const [turningOff, setTurningOff] = useState(false);

  function comparisonModel(left, middle, right) {
    return (
      <div className="comparison-container">
        <span className="compare-left">{left}</span>
        <span className="compare-middle">{middle}</span>
        <span className="compare-right">{right}</span>
      </div>
    );
  }
  function generateComparisons() {
    const matchedFeatures = {};
    const matchedFeatureKeys = [];
    const productFeatures = {};
    const productFeatureKeys = [];
    const compareFeatures = {};
    const compareFeatureKeys = [];
    const resultDisplay = [];
    // Sort the comparisons into bins based on type
    for (let i = 0; i < compare.features.length; i += 1) {
      compareFeatures[compare.features[i].feature] = compare.features[i].value;
      compareFeatureKeys.push(compare.features[i].feature);
    }
    for (let i = 0; i < product.features.length; i += 1) {
      const { feature, value } = product.features[i];
      if (compareFeatures[feature]) {
        matchedFeatures[feature] = [value, compareFeatures[feature]];
        matchedFeatureKeys.push(feature);
        compareFeatureKeys.splice(compareFeatureKeys.indexOf(feature), 1);
        delete compareFeatures[feature];
      } else {
        productFeatures[feature] = value;
        productFeatureKeys.push(feature);
      }
    }
    // Build out the comparisons from bins
    for (let i = 0; i < matchedFeatureKeys.length; i += 1) {
      resultDisplay.push(comparisonModel(matchedFeatures[matchedFeatureKeys[i]][0],
        matchedFeatureKeys[i],
        matchedFeatures[matchedFeatureKeys[i]][1]));
    }
    for (let i = 0; i < productFeatureKeys.length; i += 1) {
      resultDisplay.push(comparisonModel(productFeatures[productFeatureKeys[i]], productFeatureKeys[i], ''));
    }
    for (let i = 0; i < compareFeatureKeys.length; i += 1) {
      resultDisplay.push(comparisonModel('', compareFeatureKeys[i], compareFeatures[compareFeatureKeys[i]]));
    }
    return resultDisplay;
  }

  function turningOffAnimation() {
    setTurningOff(true);
    setTimeout( () => {
      modalOff();
      setTurningOff(false);
    }, 500);
  }

  if (compare) {
    return (
      <ModalContainer
        onClick={() => turningOffAnimation()}
        className={`${(modal && !turningOff ? 'modal-container' : '')} ${turningOff ? 'modal-container close' : ''}`}
      >
        <div className="modal-background">
          <ModalContent className="modal">
            <span>COMPARING</span>
            <div className="compare-label">
              <h2>
                {product.name}
              </h2>
              <h2>
                {compare.name}
              </h2>
            </div>
            {generateComparisons()}
          </ModalContent>
        </div>
      </ModalContainer>
    );
  }
  return (
    <ModalContainer
      onClick={() => turningOffAnimation()}
      className={`${(modal && !turningOff ? 'modal-container' : '')} ${turningOff ? 'close' : ''}`}
    >
      <div className="modal-background">
        <ModalContent>
          <h2>
            Loading...
          </h2>
        </ModalContent>
      </div>
    </ModalContainer>
  );
};

export default ComparisonModal;
