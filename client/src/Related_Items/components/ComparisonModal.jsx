import React from 'react';
import styled from 'styled-components';

const StyleModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fefefe;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid yellow;
  width: 600px;

  & .compare-label, .comparison-container {
    display: flex;
    justify-content: space-between;
  }

  & .comparison-container span {
    width: 33.33%;
  }

  & .comparison-container .compare-middle {
    text-align: center;
  }

  & .comparison-container .compare-right {
    text-align: right;
  }
`;

const ComparisonModal = ({ product, compare, modalOff }) => {
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

  return (
    <StyleModal onClick={modalOff}>
      <ModalContent>
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
    </StyleModal>
  );
};

export default ComparisonModal;
