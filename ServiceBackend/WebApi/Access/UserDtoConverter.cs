using WebApi.Access.Dto;
using WebApi.Repositories.Access.Dto;

namespace WebApi.Access
{
    public class UserDtoConverter : IUserDtoConverter
    {
        public User ConvertToClientDtos(UserDatabaseDto userDatabaseDto)
            => new User
            {
                Id = userDatabaseDto.Id,
                IngredientExceptionSettings = userDatabaseDto.IngredientExceptionSettings,
                Login = userDatabaseDto.Login,
                Name = userDatabaseDto.Name,
                Password = userDatabaseDto.Password,
                Surname = userDatabaseDto.Surname
            };

        public UserDatabaseDto ConvertToDatabaseDtos(User userDatabaseDto)
            => new UserDatabaseDto
            {
                Id = userDatabaseDto.Id,
                IngredientExceptionSettings = userDatabaseDto.IngredientExceptionSettings,
                Login = userDatabaseDto.Login,
                Name = userDatabaseDto.Name,
                Password = userDatabaseDto.Password,
                Surname = userDatabaseDto.Surname
            };
    }
}