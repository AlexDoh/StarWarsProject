let mask = document.getElementById('mask');
let close = document.getElementById('close');
let table = document.getElementsByClassName('table')[0];
let idForIterateHero = 1;

$(document).ready(function() {
    if ($.cookie('modal_shown') !== 'yes') {
        $.cookie('modal_shown', 'yes', { expires: 3, path: '/' });
    } else {
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

getJson(idForIterateHero);

function addJsonToPage(idForIterateHero, json) {
    $(table).find('td:nth-child(1)').html(idForIterateHero);
    $(table).find('td:nth-child(2)').html(json.name);
    $(table).find('td:nth-child(3)').html(json.height);
    $(table).find('td:nth-child(4)').html(json.mass);
    $(table).find('td:nth-child(5)').html(json.hair_color);
    $(table).find('td:nth-child(6)').html(json.eye_color);
    $(table).find('td:nth-child(7)').html(json.birth_year);
    $(table).find('td:nth-child(8)').html(json.gender);
}

function getJson(idForIterateHero) {
    let urlForJSON = "http://localhost:8080/heroes?id=" + idForIterateHero;
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
    idForIterateHero++;
    if (idForIterateHero > 88) {
        idForIterateHero--;
        return false;
    } else if (idForIterateHero === 17) {
        getJson(++idForIterateHero);
    } else {
        getJson(idForIterateHero);
    }
});

$('#previous').click(function () {
    idForIterateHero--;
    if (idForIterateHero < 1) {
        idForIterateHero++;
        return false;
    } else if (idForIterateHero === 17) {
        getJson(--idForIterateHero);
    } else {
        getJson(idForIterateHero);
    }
});