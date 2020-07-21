
        function getAnswers(field)
         {
            console.log(field);
            let answer = document.getElementById(field);
            return answer.value;
        }

      

        function checkAnswers() {
        let answers = ["Earth", "Pink", "Calves", "8,Eight", "Duck"];
        
        for (let i = 0; i < 5; i++) {
                let } fieldId = i + 1;
                let answer = checkAnswers("a" + fieldId);

                gradeAnswer(fieldId, answer == answers[i]);
         }
        
{
         checkAnswers(field, isRight)
        { console.log(checkAnswers);
            let gradeClass = isRight ? "answer right" : "answer wrong";
            let gradeIcon = isRight ? '<i class="fas fa-check-circle"></i> : <i class="fas fa-skull-crossbones"></i></i>':
            document.getElementById(`a${field}`).className = gradeClass;
            document.getElementById("icon" + field).innerHTML = gradeIcon;
        
        
        function clearAnswers() 
             (let); i = 1; i < 6; i++;
                let field = document.getElementById("a" + i);
                field.value = null;
                field.className = null;
                document.getElementById("icon" + i).innerHTML = "null";
               }
            }