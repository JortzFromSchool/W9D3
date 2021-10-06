// const { Module } = require("webpack");
const APIUtil = require("./api_util")

class FollowToggle {
    constructor(el) {
        this.element = $(el)
        this.userID = this.element.data("user-id");
        debugger
        this.followState = this.element.data("initial-follow-state");
        this.render();
        this.element.on("click", this.handleClick.bind(this));
    }
    
    render () {
        if (this.followState === "unfollowed") {
            this.element.text("Follow!");
            this.element.prop("disabled", false);
        } else if (this.followState === "followed") {
            this.element.text("Unfollow!");
            this.element.prop("disabled", false);
        } else {
            this.element.prop("disabled", true);
        };
    }

    handleClick(e) {
        e.preventDefault();
        if(this.followState === "unfollowed"){
            APIUtil.followUser(this.userID)
                .then(() => {
                    this.followState = "followed";
                    this.render();
                });
            this.followState = "following";
            this.render();
        } else {
            APIUtil.unfollowUser(this.userID)
                .then(() => {
                    this.followState = "unfollowed";
                    this.render();
                });
            this.followState = "unfollowing";
            this.render();
        };
    }
}

export default FollowToggle;