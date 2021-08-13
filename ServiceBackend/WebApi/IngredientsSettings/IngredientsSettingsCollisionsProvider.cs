using System.Collections.Generic;
using System.Linq;
using WebApi.Repositories;
using WebApi.Repositories.Access;
using WebApi.Repositories.Access.Dto;
using WebApi.Repositories.Dto;

namespace WebApi.IngredientsSettings
{
    public class IngredientsSettingsCollisionsProvider : IIngredientsSettingsCollisionsProvider
    {
        private readonly IUserRepository userRepository;
        private readonly IProductDetailsRepository productDetailsRepository;

        public IngredientsSettingsCollisionsProvider(IUserRepository userRepository, IProductDetailsRepository productDetailsRepository)
        {
            this.userRepository = userRepository;
            this.productDetailsRepository = productDetailsRepository;
        }

        public IReadOnlyCollection<string> GetCollidingIngredients(int userId, string productGuidIdentifier)
        {
            UserDatabaseDto user = userRepository.GetUser(userId);
            ProductDetailsDatabaseDto productDetails = productDetailsRepository.GetProductDetails(productGuidIdentifier);

            return user.IngredientExceptionSettings.Intersect(productDetails.Ingredients).ToList();
        }
    }
}