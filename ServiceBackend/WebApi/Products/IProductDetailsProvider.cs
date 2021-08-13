namespace WebApi.Products
{
    public interface IProductDetailsProvider
    {
        bool TryGetProductDetails(string guidIdentifier, out ProductDetails productDetails);
    }
}