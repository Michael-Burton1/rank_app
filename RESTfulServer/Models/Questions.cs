using System.ComponentModel.DataAnnotations;

namespace RESTfulServer.Models
{
  public class Question
  {
    public int QuestionId {get; set;}
    [Required]
    public string Prompt {get; set;}
    // [Required]
  }
}