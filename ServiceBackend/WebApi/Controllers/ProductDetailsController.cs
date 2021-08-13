using Microsoft.AspNetCore.Mvc;
using WebApi.Products;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ProductDetailsController : Controller
    {
        private readonly IProductDetailsProvider productDetailsProvider;

        public ProductDetailsController(IProductDetailsProvider productDetailsProvider)
        {
            this.productDetailsProvider = productDetailsProvider;
        }

        [HttpGet]
        public IActionResult Get(string guidIdentifier)
        {
            if (productDetailsProvider.TryGetProductDetails(guidIdentifier, out ProductDetails productDetails))
            {
                return new JsonResult(productDetails);
            }

            return new BadRequestResult();
        }
    }
}