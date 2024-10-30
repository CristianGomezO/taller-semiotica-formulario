$(document).ready(() => {
    $("#insertRow").click((event) => {
        event.preventDefault();
        const name = $("#name").val(),
            day = $("#day").val(),
            month = $("#month").val(),
            year = $("#year").val()
        date = `${day}/${month}/${year}`,
            age = new Date().getFullYear() - year;

        const newRow = `<tr>
                            <td>${name}</td>
                            <td>${date}</td>
                            <td>${age}</td>
                        </tr>`;

        $('#tableBody').append(newRow);

        $('#name').val('');
        $('#day').val('');
        $('#month').val('');
        $('#year').val('');
    });

    $("#generateStudent").click((event) => {
        event.preventDefault();

        const name = `Estudiante ${Math.round(Math.random() * 10 + 1)}`,
            day = Math.round(Math.random() * 30 + 1),
            month = Math.round(Math.random() * 12 + 1),
            personOptionsSelect = $('#personOptions').find(":selected").val();
        
        let maxYear = 2006, minYear = 2024;
        if (personOptionsSelect == "adult") {
            maxYear = 2006;
            minYear = 1980;
        }
            
        const year = Math.round(Math.random() * (maxYear - minYear + 1) + minYear);

        $('#name').val(name);
        $('#day').val(day);
        $('#month').val(month);
        $('#year').val(year);
    });

    $("#paintRow").click((event) => {
        event.preventDefault();

        $("#peopleTable tr:gt(0)").each(function (index, row) {
            $(row).find("td").each(function (columnIndex, celda) {
                if (columnIndex == 2) {
                    const edad = parseInt($(celda).text());
                    $(row).css("background-color", edad < 18 ? "red" : "blue");
                }
            });
        });
    });

    $('#personOptions').on('change', function () {
        const source = `assets/images/${this.value == "adult" ? "adultos" : "jovenes"}.png`
        $("#personImage").attr("src", source);
    });
});