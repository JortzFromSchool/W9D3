import FollowToggle from "./follow_toggle";

document.addEventListener("DOMContentLoaded", function() {
    $('button.follow-toggle').each(function() {
        const test = new FollowToggle(this);
    });
});