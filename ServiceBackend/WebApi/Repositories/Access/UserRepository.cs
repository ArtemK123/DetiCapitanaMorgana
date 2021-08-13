using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using WebApi.Repositories.Access.Dto;

namespace WebApi.Repositories.Access
{
    public class UserRepository : IUserRepository
    {
        private const string DatabaseResourceName = "/DatabaseMock/Users.json";
        private readonly List<UserDatabaseDto> users;

        public UserRepository()
        {
            users = JsonSerializer.Deserialize<List<UserDatabaseDto>>(ReadDatabaseFile());
        }

        public UserDatabaseDto GetUser(int userId)
        {
            return users.First(user => user.Id == userId);
        }

        public UserDatabaseDto GetUserByCredentials(string login, string password)
        {
            return users.FirstOrDefault(user => user.Login == login && user.Password == password);
        }

        public void AddUser(UserDatabaseDto userDatabaseDto)
        {
            users.Add(userDatabaseDto);
            WriteDatabaseFile();
        }

        private string ReadDatabaseFile()
        {
            using (var resourceStreamReader = new StreamReader(File.OpenRead(Directory.GetCurrentDirectory() + DatabaseResourceName)))
            {
                return resourceStreamReader.ReadToEnd();
            }
        }

        private void WriteDatabaseFile()
        {
            using (var resourceStreamReader = new StreamWriter(File.OpenWrite(Directory.GetCurrentDirectory() + DatabaseResourceName)))
            {
                resourceStreamReader.Write(JsonSerializer.Serialize(users));
            }
        }
    }
}