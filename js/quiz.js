$(document).ready(function () {
    $('.answer').click(function() {
        var isCorrect = $(this).data('correct');
        var currentQuestion = $(this).closest('.question-container');
        var nextQuestion = currentQuestion.next('.question-container');
        
        $('.answer').not(this).removeClass('correct incorrect');
        
        if(isCorrect) {
            $(this).addClass('correct');
            setTimeout(function() {
                if(nextQuestion.length > 0) {
                    currentQuestion.hide();
                    nextQuestion.show();
                } else {
                    window.location.href = 'envelope.html';
                }
            }, 3000);
        } else {
            $(this).addClass('incorrect');
        }
    });
});
