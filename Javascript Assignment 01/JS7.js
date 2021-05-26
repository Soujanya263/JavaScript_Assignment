// 7_Write a JavaScript function to remove HTML/XML tags from string.
// Test Data:
//     console.log(strip_tags('<p><strong><em>SkillSanta
//     Assignments</em></strong></p>'));
// Output:
//     “SkillSanta Assignments”

//Function defination
function strip_tags(str, allow){
    
    allow = (((allow || '')).toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');    //Characters that are alphanumeric
   
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return str.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {    //Replace Special characters with empty string
    return allow.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 :'';
    });
   }
   
let string = '<p><strong><em>Skillsanta Assignment</em></strong></p>'    //Input
string = strip_tags(string);    //Function call
document.write(string);    
