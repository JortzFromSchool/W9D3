import FollowToggle from "./follow_toggle";

document.addEventListener("DOMContentLoaded", function() {
    debugger
    $('button.follow-toggle').each(function() {
        debugger
        const test = new FollowToggle(this);
        console.log(test);
    });
});