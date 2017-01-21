$('.li-drop ul').hide();
$('#projekt_menu_1').hide();
$('#testy').hide();
$('#team').hide();
$('#message').hide();
$('#profil').hide();
$('.boxToChange').hide();

function resize_content() {
    var widthContent = $(window).width() - 210;
    $('.wrapper-content').css('width', widthContent);
    $('.container').css('width', widthContent);
}

resize_content();
$(window).resize(function(event) {
    resize_content();
});

$(document).ready(function() {

    var value1 = 0;
    $('.suites h1:first-child').html(0);
    setInterval(function() {
        if (value1 < 360) {
            $('.suites h1:first-child').html(++value1);
        }
    }, 3);

    var value2 = 0;
    $('.tests h1:first-child').html(0);
    setInterval(function() {
        if (value2 < 675) {
            $('.tests h1:first-child').html(++value2);
        }
    }, 1);

    var value3 = 0;
    $('.failed h1:first-child').html(0);
    setInterval(function() {
        if (value3 < 4) {
            $('.failed h1:first-child').html(++value3);
        }
    }, 100);

    var value4 = 0;
    $('.success h1:first-child').html(0);
    setInterval(function() {
        if (value4 < 421) {
            $('.success h1:first-child').html(++value4);
        }
    }, 1);

    $('button[name=change]').on('click', (arguments) => {
        $('.boxToChange').show();
        $('button[name=change]').hide();
    });

    $('button[name=upDataInProfil]').on('click', (arguments) => {

        var valueInput = $('input[name=IMIE]').val();
        var valueSelect = $('select[name=change]').val();

        if (valueInput != "") {
            $('.' + valueSelect).children().eq(1).text(valueInput);
            $('#errorData').text("");

            $('.boxToChange').hide();
            $('button[name=change]').show();
        } else {
            $('#errorData').text("Wpisz jakieś dane !!!");
        }

    });

    value1 = 0;
    $('#projekt_menu_1 .suites h1:first-child').html(0);
    setInterval(function() {
        if (value1 < 20) {
            $('#projekt_menu_1 .suites h1:first-child').html(++value1);
        }
    }, 3);

    value3 = 0;
    $('#projekt1 .failed h1:first-child').html(0);
    setInterval(function() {
        if (value3 < 4) {
            $('#projekt_menu_1 .failed h1:first-child').html(++value3);
        }
    }, 100);

    value4 = 0;
    $('#projekt_menu_1 .success h1:first-child').html(0);
    setInterval(function() {
        if (value4 < 14) {
            $('#projekt_menu_1 .success h1:first-child').html(++value4);
        }
    }, 1);

    $('#dodajNameTest').on('click', (arguments) => {

        if ($('#idTest').val() == "") {
            $('#errorAddTest').remove();
            $('.addTest').css('height', '150px');
            $('.addTest').append('<h3 style="color:red;" id="errorAddTest"> Podaj nazwe testu !!! </h3>');
        } else {

            $('#errorAddTest').remove();
            $('.addTest').css('height', '100px');
            var textValLastThInTable = parseInt($('#testy tbody tr').last().children().eq(0).text());
            ++textValLastThInTable;
            var valInput = $('#idTest').val();
            console.log(textValLastThInTable);

            $('#testy tbody').append('<tr class="bg-info"><th scope="row">' + textValLastThInTable + '</th><td>' + valInput + '</td></tr>');
            $('#idTest').val("");
        }
    });

    $('.li-drop #listProject').on('click', (arguments) => {
        $('.li-drop ul').toggle(function() {
            $('.li-drop ul li').each(function(index, el) {
                $(this).delay(100 * index).slideUp('fast');
            });
        }, function() {
            $('.li-drop ul li').each(function(index, el) {
                if (index > 1) {
                    $(this).slideDown('fast');
                } else {
                    $(this).delay(100 * index).slideDown('fast');
                }
            });
        });
    });

    $('.menu_item ul li').eq(0).on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#home').show();
    });

    $('.user').on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#profil').show();
    });

    $('.menu_item ul li').eq(6).on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#testy').show();
    });

    $('.menu_item ul li').eq(8).on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#message').show();
    });

    $('.menu_item ul li').eq(9).on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#profil').show();
    });

    $('.menu_item ul li').eq(7).on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#team').show();
    });

    $('.li-drop ul li').eq(0).on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#projekt_menu_1').show();

        var value5 = 0;
        $('#projekt_menu_1 .suites h1:first-child').html(0);
        setInterval(function() {
            if (value5 < 20) {
                $('#projekt_menu_1 .suites h1:first-child').html(++value5);
            }
        }, 3);

        var value6 = 0;
        $('#projekt1 .failed h1:first-child').html(0);
        setInterval(function() {
            if (value6 < 4) {
                $('#projekt_menu_1 .failed h1:first-child').html(++value6);
            }
        }, 100);

        var value7 = 0;
        $('#projekt_menu_1 .success h1:first-child').html(0);
        setInterval(function() {
            if (value7 < 14) {
                $('#projekt_menu_1 .success h1:first-child').html(++value7);
            }
        }, 1);

    });

    $('#showDetails').eq(0).on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#projekt_menu_1').show();

        var value5 = 0;
        $('#projekt_menu_1 .suites h1:first-child').html(0);
        setInterval(function() {
            if (value5 < 20) {
                $('#projekt_menu_1 .suites h1:first-child').html(++value5);
            }
        }, 3);

        var value6 = 0;
        $('#projekt1 .failed h1:first-child').html(0);
        setInterval(function() {
            if (value6 < 4) {
                $('#projekt_menu_1 .failed h1:first-child').html(++value6);
            }
        }, 100);

        var value7 = 0;
        $('#projekt_menu_1 .success h1:first-child').html(0);
        setInterval(function() {
            if (value7 < 14) {
                $('#projekt_menu_1 .success h1:first-child').html(++value7);
            }
        }, 1);

    });

    $('#goToProjekt1').eq(0).on('click', (arguments) => {
        $('section').eq(1).children().hide();
        $('#projekt_menu_1').show();

        var value5 = 0;
        $('#projekt_menu_1 .suites h1:first-child').html(0);
        setInterval(function() {
            if (value5 < 20) {
                $('#projekt_menu_1 .suites h1:first-child').html(++value5);
            }
        }, 3);

        var value6 = 0;
        $('#projekt1 .failed h1:first-child').html(0);
        setInterval(function() {
            if (value6 < 4) {
                $('#projekt_menu_1 .failed h1:first-child').html(++value6);
            }
        }, 100);

        var value7 = 0;
        $('#projekt_menu_1 .success h1:first-child').html(0);
        setInterval(function() {
            if (value7 < 14) {
                $('#projekt_menu_1 .success h1:first-child').html(++value7);
            }
        }, 1);

    });

    // $('')

    $(function() {
        Highcharts.chart('wykres_slupkowy', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'PODGLĄD TESTOW'
            },
            xAxis: {
                categories: [
                    'PROJEKT 1', 'PROJEKT 2', 'PROJEKT 3', 'PROJEKT 4', 'PROJEKT 5'
                ],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Ilośc',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            // tooltip: {
            //     valueSuffix: ''
            // },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'ZAKOŃCZONYCH',
                    data: [60, 4, 3, 47, 12]
                }, {
                    name: 'NIEUDANYCH',
                    data: [20, 12, 17, 36, 0]
                }, {
                    name: 'ZAPLANOWANYCH',
                    data: [40, 3, 3, 7, 12]
                }
            ]
        });
    });

    $(function() {
        Highcharts.chart('wykres_kolowy', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: 'CZAS POŚWIĘCONY NA TESTY (%)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [
                {
                    type: 'pie',
                    name: 'Procentowy udział',
                    data: [
                        [
                            'PROJEKT 1', 45.0
                        ],
                        [
                            'PROJKET 2', 26.8
                        ], {
                            name: 'PROJEKT 2',
                            y: 14.8,
                            sliced: true,
                            selected: true
                        },
                        [
                            'PROJEKT 3', 8.5
                        ],
                        [
                            'PROJKET 4', 6.2
                        ],
                        ['PROJKET 5', 0.7]
                    ]
                }
            ]
        });
    });

    var bar = new ProgressBar.Circle(projekt1, {
        color: '#1A237E',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'bounce',
        duration: 2400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 8
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(0.9); // Number from 0.0 to 1.0

    var bar1 = new ProgressBar.Circle(projekt2, {
        color: '#1A237E',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'bounce',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 8
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });
    bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar1.text.style.fontSize = '2rem';

    bar1.animate(0.8); // Number from 0.0 to 1.0

    var bar3 = new ProgressBar.Circle(projekt3, {
        color: '#1A237E',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'bounce',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 8
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });
    bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar3.text.style.fontSize = '2rem';

    bar3.animate(0.2); // Number from 0.0 to 1.0

    var bar4 = new ProgressBar.Circle(projekt4, {
        color: '#1A237E',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'bounce',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 8
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });
    bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar4.text.style.fontSize = '2rem';

    bar4.animate(0.99); // Number from 0.0 to 1.0

    var bar5 = new ProgressBar.Circle(projekt5, {
        color: '#1A237E',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 2,
        easing: 'bounce',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 8
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });
    bar5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar5.text.style.fontSize = '2rem';

    bar5.animate(0.42); // Number from 0.0 to 1.0

    //     $(function () {
    //
    //     // Make monochrome colors and set them as default for all pies
    //     Highcharts.getOptions().plotOptions.pie.colors = (function () {
    //         var colors = [],
    //             base = Highcharts.getOptions().colors[0],
    //             i;
    //
    //         for (i = 0; i < 10; i += 1) {
    //             // Start out with a darkened base color (negative brighten), and end
    //             // up with a much brighter color
    //             colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    //         }
    //         return colors;
    //     }());
    //
    //     // Build the chart
    //     Highcharts.chart('test', {
    //         chart: {
    //             plotBackgroundColor: null,
    //             plotBorderWidth: null,
    //             plotShadow: false,
    //             type: 'pie'
    //         },
    //         title: {
    //             text: 'Browser market shares at a specific website, 2014'
    //         },
    //         tooltip: {
    //             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //         },
    //         plotOptions: {
    //             pie: {
    //                 allowPointSelect: true,
    //                 cursor: 'pointer',
    //                 dataLabels: {
    //                     enabled: true,
    //                     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
    //                     style: {
    //                         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
    //                     }
    //                 }
    //             }
    //         },
    //         series: [{
    //             name: 'Brands',
    //             data: [
    //                 { name: 'Microsoft Internet Explorer', y: 56.33 },
    //                 { name: 'Chrome', y: 24.03 },
    //                 { name: 'Firefox', y: 10.38 },
    //                 { name: 'Safari', y: 4.77 },
    //                 { name: 'Opera', y: 0.91 },
    //                 { name: 'Proprietary or Undetectable', y: 0.2 }
    //             ]
    //         }]
    //     });
    // });
});

Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Dosis:400,600',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: [
        '#7cb5ec',
        '#f7a35c',
        '#90ee7e',
        '#7798BF',
        '#aaeeee',
        '#ff0066',
        '#eeaaee',
        '#55BF3B',
        '#DF5353',
        '#7798BF',
        '#aaeeee'
    ],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Dosis, sans-serif'
        }
    },
    title: {
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    },
    tooltip: {
        borderWidth: 0,
        backgroundColor: 'rgba(219,219,216,0.8)',
        shadow: false
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        gridLineWidth: 1,
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        minorTickInterval: 'auto',
        title: {
            style: {
                textTransform: 'uppercase'
            }
        },
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    plotOptions: {
        candlestick: {
            lineColor: '#404048'
        }
    },

    // General
    background2: '#F0F0EA'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

$('#darekMessage input').on('click', function(event) {
    event.preventDefault();
    var idForm = $(this).parent().attr('id');

    var h1Form = $(this).parent().siblings();

    sendMessageToPhp(idForm, h1Form);

});

$('#ryszardMessage input').on('click', function(event) {
    event.preventDefault();
    var idForm = $(this).parent().attr('id');

    var h1Form = $(this).parent().siblings();

    sendMessageToPhp(idForm, h1Form);

});

$('#maciekMessage input').on('click', function(event) {
    event.preventDefault();
    var idForm = $(this).parent().attr('id');

    var h1Form = $(this).parent().siblings();

    sendMessageToPhp(idForm, h1Form);

});

$('#jubaMessage input').on('click', function(event) {
    event.preventDefault();
    var idForm = $(this).parent().attr('id');

    var h1Form = $(this).parent().siblings();

    sendMessageToPhp(idForm, h1Form);

});

$('#DarekStMessage input').on('click', function(event) {
    event.preventDefault();
    var idForm = $(this).parent().attr('id');

    var h1Form = $(this).parent().siblings();

    sendMessageToPhp(idForm, h1Form);

});

function sendMessageToPhp(idForm, h1Form) {
    // body...

    this.idForm = idForm;
    this.h1Form = h1Form;

    var data = $(idForm).serialize();

    $.ajax({
        type: 'POST',
        url: '../php/messagePhpAjax.php',
        data: data,

        success: function(response) {

            if (response == "OK") {
                $(h1form).html('Wiadomość wysłana :)');
            } else {
                $(h1form).html('Coś poszło nie tak :(');
            }
        }
    });

}
