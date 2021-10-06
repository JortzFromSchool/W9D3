// const { Module } = require("webpack");

class FollowToggle {
    constructor(el) {
        this.element = $(el)
        this.userID = this.element.data("user-id");
        this.followState = this.element.data("initial-follow-state");
        this.render();
        this.element.on("click", this.handleClick.bind(this));
    }
    
    render () {
        if (this.followState === "unfollowed") {
            this.element.text("Follow!");
        } else {
            this.element.text("Unfollow!");
        };
    }

    handleClick(e) {
        e.preventDefault();
        let request;
        debugger;
        if(this.followState === "unfollowed"){
            debugger;
            request = $.ajax({
                method: "POST",
                url: `/users/${this.userID}/follow`,
            }).then(function () {
                    debugger;
                    this.followState = "followed";
                    this.element.data("initial-follow-state", "followed");
            });
        } else {
            debugger;
            request = $.ajax({
                method: "DELETE",
                url: `/users/${this.userID}/follow`,
            }).then(function () {
                debugger;
                this.followState = "unfollowed";
                this.element.data("initial-follow-state", "unfollowed");
            });
        };
    }
}

export default FollowToggle;