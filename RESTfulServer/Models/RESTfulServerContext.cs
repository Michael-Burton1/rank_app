using Microsoft.EntityFrameworkCore;

namespace RESTfulServer.Models
{
  public class RESTfulServerContext : DbContext
  {
    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Question>()
          .HasData(
            new Question { QuestionId = 1, Prompt="What is my favorite food?" },
            new Question { QuestionId = 2, Prompt="Who is my favorite band/musician?" }
              
          );
    }
    public RESTfulServerContext(DbContextOptions<RESTfulServerContext> options)
      : base(options)
    {
    }

    public DbSet<Question> Questions { get; set; }
  }
}