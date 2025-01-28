$(document).ready(function () {
    // Apply smooth fade-in animation to dashboard cards
    $(".card").css({ opacity: 0, transform: "translateY(50px)" }).each(function (index) {
        $(this).delay(index * 200).animate({ opacity: 1, transform: "translateY(0)" }, 800);
    });

    // Optional: Add hover effects for better UI experience
    $(".card").hover(
        function () {
            $(this).addClass("shadow-lg").css("cursor", "pointer");
        },
        function () {
            $(this).removeClass("shadow-lg");
        }
    );

    // Optional: Simple frontend validation (checks for empty fields before submission)
    $("#appointmentForm").submit(function (e) {
        const date = $("#appointmentDate").val();
        const time = $("#appointmentTime").val();
        const issue = $("#healthIssue").val();

        if (!date || !time || !issue) {
            e.preventDefault(); // Prevent form submission if fields are empty
            alert("Please fill out all fields before booking an appointment.");
        }
    });
});
