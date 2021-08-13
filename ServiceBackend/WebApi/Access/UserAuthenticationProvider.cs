using WebApi.Access.Dto;
using WebApi.Repositories.Access;
using WebApi.Repositories.Access.Dto;

namespace WebApi.Access
{
    public class UserAuthenticationProvider : IUserAuthenticationProvider
    {
        private readonly IUserRepository userRepository;

        public UserAuthenticationProvider(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public User Login(string login, string password)
        {
            return ConvertToClientDtos(userRepository.GetUserByCredentials(login, password));
        }

        public void Register(User user)
        {
            userRepository.AddUser(ConvertToDatabaseDtos(user));
        }

        private User ConvertToClientDtos(UserDatabaseDto userDatabaseDto)
            => new User
            {
                Id = userDatabaseDto.Id,
                IngredientExceptionSettings = userDatabaseDto.IngredientExceptionSettings,
                Login = userDatabaseDto.Login,
                Name = userDatabaseDto.Name,
                Password = userDatabaseDto.Password,
                Surname = userDatabaseDto.Surname
            };

        private UserDatabaseDto ConvertToDatabaseDtos(User userDatabaseDto)
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