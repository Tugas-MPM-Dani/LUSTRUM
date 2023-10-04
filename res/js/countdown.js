$(".countdown-timer").countdown({
  date: "Oct 30, 2023 23:59:00",

  render: function (data) {
    $(".days .value").html(this.leadingZeros(data.days, 2));
    $(".hours .value").html(this.leadingZeros(data.hours, 2));
    $(".minutes .value").html(this.leadingZeros(data.min, 2));
    $(".seconds .value").html(this.leadingZeros(data.sec, 2));
  },
});
