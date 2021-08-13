using System;
using System.Collections.Generic;

namespace WebApi.Repositories.Dto
{
    public class ProductDetailsDatabaseDto
    {
        public int Id { get; set; }

        public string GuidIdentifier { get; set; }

        public string ProductName { get; set; }

        public IReadOnlyCollection<string> Ingredients { get; set; }

        public DateTime ManufactureDate { get; set; }

        public DateTime BestBeforeDate { get; set; }
    }
}