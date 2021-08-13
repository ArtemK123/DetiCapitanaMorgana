using System.Collections.Generic;

namespace WebApi.Repositories.Access.Dto
{
    public class UserDatabaseDto
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public IReadOnlyCollection<string> IngredientExceptionSettings { get; set; }
    }
}