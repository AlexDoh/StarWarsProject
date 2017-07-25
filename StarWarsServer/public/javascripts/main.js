let mask = document.getElementById('mask');
let close = document.getElementById('close');
let table = document.getElementsByClassName('table')[0];
if ($.cookie('modal_shown') !== null) {

}
$(document).ready(function() {
    if ($.cookie('modal_shown') !== null) {
        $.cookie('modal_shown', 'yes', { expires: 3, path: '/' });
        close.click();
    }
});
$(close).click(function () {
    $(mask).hide();
});
$(window).click(function (event) {
    if ($(event.target).is(mask)) {
        $(mask).hide();
    }
});

let id = 1;
getJson(id);

function addJsonToPage(id, json) {
    $(table).find('td:nth-child(1)').html(id);
    $(table).find('td:nth-child(2)').html(json.name);
    $(table).find('td:nth-child(3)').html(json.height);
    $(table).find('td:nth-child(4)').html(json.mass);
    $(table).find('td:nth-child(5)').html(json.hair_color);
    $(table).find('td:nth-child(6)').html(json.eye_color);
    $(table).find('td:nth-child(7)').html(json.birth_year);
    $(table).find('td:nth-child(8)').html(json.gender);
}

function getJson(id) {
    let urlForJSON = "http://localhost:8080/heroes?id=" + id;
    console.log(urlForJSON);

    $.ajax({
        method: "GET",
        dataType: "json",
        url: urlForJSON,
        async: true,
        processData: false,
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert(JSON.stringify(jqXHR));
            alert("AJAX error: " + textStatus + ' : ' + errorThrown);
        },
        success: function (json) {
            addJsonToPage(id, json);
        }

    });

}

$('#next').click(function () {
    id++;
    if (id > 88) {
        id--;
        return false;
    } else if (id === 17) {
        getJson(++id);
    } else {
        getJson(id);
    }
});

$('#previous').click(function () {
    id--;
    if (id < 1) {
        id++;
        return false;
    } else if (id === 17) {
        getJson(--id);
    } else {
        getJson(id);
    }
});