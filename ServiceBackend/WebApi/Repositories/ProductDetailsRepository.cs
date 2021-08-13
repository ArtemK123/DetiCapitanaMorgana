using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using WebApi.Repositories.Dto;

namespace WebApi.Repositories
{
    public class ProductDetailsRepository : IProductDetailsRepository
    {
        private const string DatabaseResourceName = "/DatabaseMock/ProductDetails.json";

        private readonly List<ProductDetailsDatabaseDto> productDetails;

        public ProductDetailsRepository()
        {
            productDetails = JsonSerializer.Deserialize<List<ProductDetailsDatabaseDto>>(ReadDatabaseFile());
        }

        public ProductDetailsDatabaseDto GetProductDetails(string guidIdentifier)
        {
            return productDetails.First(product => product.GuidIdentifier == guidIdentifier);
        }

        private string ReadDatabaseFile()
        {
            using (var resourceStreamReader = new StreamReader(File.OpenRead(Directory.GetCurrentDirectory() + DatabaseResourceName)))
            {
                return resourceStreamReader.ReadToEnd();
            }
        }
    }
}