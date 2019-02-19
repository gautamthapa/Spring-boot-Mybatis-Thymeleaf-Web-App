function okkk() {
//    alert('sfdsf');
    $('#example').DataTable();
}



// DataTable Buttons
var slectedRowArray = [];
var selectedCheckboxArray = [];
var selectedCheckboxArrayNew = [];
var buttonLen = 0;
var buttons = [];
var tablelist = $('#datatable').DataTable();
function loadDTButtons(buttonsParam) {

    slectedRowArray = [];
    selectedCheckboxArray = [];
    selectedCheckboxArrayNew = [];
    buttonLen = 0;
    buttons = [];
    switch (buttonsParam.add.value) {
        case 'Add':
            break;
        default :
        {
            if (buttonsParam.add.link !== "")
            {
                buttons.push({
                    text: '<i class=\"fa fa-lg fa-plus\"></i> ' + buttonsParam.add.name,
                    titleAttr: 'Add New Record',
                    action: function (e, dt, node, config) {
                        if (typeof (buttonsParam.add.displayName) !== "undefined" && buttonsParam.add.displayName !== "") {
                            $(".header_name").html('<i class=\"fa fa-lg fa-plus-square\"></i> ' + buttonsParam.add.displayName);
                        } else {
                            if (buttonsParam.add.name == 'Add') {
                                $(".header_name").html('<i class="fa fa-plus-square"></i> ' + buttonsParam.add.name + " " + $("#headerText").text());
                            } else {
                                $(".header_name").html('<i class=\"fa fa-lg fa-plus-square\"></i> ' + buttonsParam.add.name);
                            }
                        }

                        $("#contentcontent").removeClass("hide");
                        $("#formcontent").load(buttonsParam.add.link);
                    }
                });


            }
        }
    }
    switch (buttonsParam.edit.value) {

    }
    switch (buttonsParam.delete.value) {

    }
    switch (buttonsParam.expression.value) {

    }
    tablelist = $('#datatable').DataTable({
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        "columnDefs": [{
                "searchable": false,
                "orderable": false,
                "targets": 0
            }],
        //         "lengthMenu": [[2, 5, 50, -1], [2, 25, 50, "All"]],
        "oLanguage": {
            "sSearch": "<span'>Filter records:</span>",
            "sLengthMenu": "<span'>Display _MENU_ records per page</span>",
            "sInfo": "<span'>_START_ - _END_ of _TOTAL_</span>"
        },
        "fnDrawCallback": function (oSettings) {
//            commonFileCount();
        }

    });

    setTimeout(
            function () {
                new $.fn.dataTable.Buttons(tablelist, {
                    buttons: buttons
                });
                $('#button_wrapper').append(tablelist.buttons(0, null).container());

            }, 100);

    $('#datatable tbody').on('click', 'tr', function (event) {

        var id = this.id;
        if (id != "") {
            var index = $.inArray(id, slectedRowArray);
            if (index === -1) {
                slectedRowArray.push(id);
            } else {
                slectedRowArray.splice(index, 1);
            }
            $(this).toggleClass('active');
        }
    });
}