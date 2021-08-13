using WebApi.Repositories;
using WebApi.Repositories.Dto;

namespace WebApi.Products
{
    public class ProductDetailsProvider : IProductDetailsProvider
    {
        private readonly IProductDetailsRepository productDetailsRepository;

        public ProductDetailsProvider(IProductDetailsRepository productDetailsRepository)
        {
            this.productDetailsRepository = productDetailsRepository;
        }

        public bool TryGetProductDetails(string guidIdentifier, out ProductDetails productDetails)
        {
            try
            {
                productDetails = ConvertDtos(productDetailsRepository.GetProductDetails(guidIdentifier));
            }
            catch
            {
                productDetails = null;
                return false;
            }

            return true;
        }

        private ProductDetails ConvertDtos(ProductDetailsDatabaseDto productDetailsDatabaseDto)
            => new ProductDetails(
                productDetailsDatabaseDto.Id,
                productDetailsDatabaseDto.GuidIdentifier,
                productDetailsDatabaseDto.Ingredients,
                productDetailsDatabaseDto.ProductName,
                productDetailsDatabaseDto.ManufactureDate,
                productDetailsDatabaseDto.BestBeforeDate);
    }
}