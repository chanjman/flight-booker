$(document).on('turbolinks:load', function () {
  disableFirstDestination();
  $('.button-collapse').sideNav();
  $('select').material_select();

  // Changes flight selection class and checks radio button
  $('.select_flight').on('click', '.collection-item', function (e) {
    $(this).siblings('.collection-item').removeClass('active');
    this.classList.add('active');
    this.querySelector("input[name='flight_id']").checked = 'checked';
  });

  // Disables selected origin from destination
  $('#flight_origin').on('change', function () {

    var $thisValue = $(this).val();

    $('#flight_destination option[disabled]').attr('disabled', false);
    $('#flight_destination option[value=' + $thisValue + ']').attr('disabled', 'disabled');
    $('select').material_select();
  });

  // Show spinner on submit click
  $("input[type='submit']").on('click', function () {
    $('#spinner').css('visibility', 'visible');
  });
});

// Disables first destination option and selects second
function disableFirstDestination() {
  $('#flight_destination option:selected').attr('disabled', 'disabled');
  $('#flight_destination').prop('selectedIndex', 1);
  $('select').material_select();
}
