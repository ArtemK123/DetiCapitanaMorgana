using WebApi.Access.Dto;
using WebApi.Repositories.Access;
using WebApi.Repositories.Access.Dto;

namespace WebApi.Access
{
    public class UserAuthenticationProvider : IUserAuthenticationProvider
    {
        private readonly IUserRepository userRepository;
        private readonly IUserDtoConverter userDtoConverter;

        public UserAuthenticationProvider(IUserRepository userRepository, IUserDtoConverter userDtoConverter)
        {
            this.userRepository = userRepository;
            this.userDtoConverter = userDtoConverter;
        }

        public User GetUser(string login, string password)
        {
            UserDatabaseDto userDatabaseDto = userRepository.GetUserByCredentials(login, password);
            if (userDatabaseDto == null)
            {
                return null;
            }

            return userDtoConverter.ConvertToClientDtos(userDatabaseDto);
        }

        public void Register(User user)
        {
            userRepository.AddUser(userDtoConverter.ConvertToDatabaseDtos(user));
        }
    }
}