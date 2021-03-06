using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pillar.Server.Models
{
    public class Player
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [MaxLength(20)]
        public string Surname { get; set; }
        [MaxLength(20)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(20)]
        public string KnownAs { get; set; }
        public string Mobile { get; set; }
        public string Email {get; set; }

        public string FullName 
        {
            get 
            {
                return string.Concat(this.FirstName, " ", this.Surname);
            }
        }    
    }
}