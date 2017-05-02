requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var io = new extIO({
            animation: function($expl, data){
                if (!data.ext || !data.ext.explanation) {
                    return;
                }
                var expl = data.ext.explanation;
                $expl.addClass('output').html(expl);
            },
            animationTemplateName: 'animation',
            multipleArguments: true,

            tryit: function(){
                var this_e = this;
                $tryit = $(this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')));

                var tryitDataInput = $tryit.find('.tryit-content');
                tryitDataInput.focus();

                $tryit.find('.bn-check').click(function (e) {
                    var password = passwordInput.val();
                    var tryitData = tryitDataInput.val();
                    this_e.extSendToConsoleCheckiO(tryitData);
                    e.stopPropagation();
                    return false;
                });
            },
            retConsole: function (ret) {
                $tryit.find('.checkio_result').html("Your result:<br>" + ret);
            },

            functions: {
                js: 'countWords',
                python: 'count_words'
            }
        });
        io.start();
    }
);
