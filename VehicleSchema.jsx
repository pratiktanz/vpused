import React from 'react';

/**
 * Renders Schema.org structured data for a Car and Offer
 * Placed inside the <Head> component of your Next.js VDP.
 */
const VehicleSchema = ({ carData }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": `${carData.year} ${carData.make} ${carData.model}`,
    "image": carData.mainImageUrl,
    "mileageFromOdometer": {
      "@type": "QuantitativeValue",
      "value": carData.mileage,
      "unitCode": "SMI" // Standard Miles
    },
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "engineType": carData.engineType
    },
    "itemCondition": "https://schema.org/UsedCondition",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": carData.price,
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "AutoDealer",
        "name": "AutoTrust Motors"
      },
      "warranty": {
        "@type": "WarrantyPromise",
        "durationOfWarranty": {
          "@type": "QuantitativeValue",
          "value": "1",
          "unitCode": "ANN" // 1 Year
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default VehicleSchema;
