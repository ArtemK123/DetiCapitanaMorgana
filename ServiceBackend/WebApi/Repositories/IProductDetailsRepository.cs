using WebApi.Repositories.Dto;

namespace WebApi.Repositories
{
    public interface IProductDetailsRepository
    {
        ProductDetailsDatabaseDto GetProductDetails(string guidIdentifier);
    }
}