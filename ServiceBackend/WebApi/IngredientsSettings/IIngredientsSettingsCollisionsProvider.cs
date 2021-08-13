using System.Collections.Generic;

namespace WebApi.IngredientsSettings
{
    public interface IIngredientsSettingsCollisionsProvider
    {
        IReadOnlyCollection<string> GetCollidingIngredients(int userId, string productGuidIdentifier);
    }
}