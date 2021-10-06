// const { Module } = require("webpack");

class FollowToggle {
    constructor(el) {
        this.element = $(el)
        this.userID = this.element.data("user-id");
        this.followState = this.element.data("initial-follow-state");
    } 
}

export default FollowToggle;