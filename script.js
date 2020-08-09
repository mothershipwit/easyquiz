
        function getAnswer(field) {
            console.log(field);
            let answer = document.getElementById(field);
            return answer.value;
        }
        function checkAnswers() {
            let answers = ["Earth", "Pink", "Calves", "8,Eight", "Duck"];
           
            for (let i = 0; i < 5; i++) {
                let fieldId = i + 1;
                let answer = getAnswer("a" + fieldId);
            }
        }
         function gradeAnswers(field, isRight) {
             console.log(field, isRight);
            let gradeClass = isRight ? "answer right" : "answer wrong";
            let gradeIcon = isRight ? '<i class="fa fa-check right" aria-hidden="true"></i>' : '<i class="fa fa-thumbs-down wrong" aria-hidden="true"></i>';
            document.getElementById("a" + field).className = gradeClass;
            document.getElementById("icon" + field).innerHTML = gradeIcon;
         }
         function clearAnswers() {
             console.log();           
              for (let i = 1; i < 6; i++) {
                let field = document.getElementById("a" + i);
                field.value = null;
                field.className = null;
                document.getElementById("icon" + i).innerHTML = null;
            }
        }
