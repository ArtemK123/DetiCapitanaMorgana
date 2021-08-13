using System;
using System.Collections.Generic;

namespace WebApi.Products
{
    public class ProductDetails
    {
        public ProductDetails(
            int id,
            string guidIdentifier,
            IReadOnlyCollection<string> ingredients,
            string productName,
            DateTime manufactureDate,
            DateTime bestBeforeDate)
        {
            Id = id;
            GuidIdentifier = guidIdentifier;
            Ingredients = ingredients;
            ProductName = productName;
            ManufactureDate = manufactureDate;
            BestBeforeDate = bestBeforeDate;
        }

        public int Id { get; }

        public string GuidIdentifier { get; }

        public string ProductName { get; }

        public IReadOnlyCollection<string> Ingredients { get; }

        public DateTime ManufactureDate { get; }

        public DateTime BestBeforeDate { get; }
    }
}