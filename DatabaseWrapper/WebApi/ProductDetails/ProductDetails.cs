using System;
using System.Collections.Generic;

namespace WebApi.ProductDetails
{
    public class ProductDetails
    {
        public int Id { get; }

        public string GuidIdentifier { get; }

        public string ProductName { get; }

        public IReadOnlyCollection<string> Ingredients { get; }

        public DateTime ManufactureDate { get; }

        public DateTime 
    }
}