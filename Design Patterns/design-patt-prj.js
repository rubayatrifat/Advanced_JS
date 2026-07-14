class YoutubeChannel {
    constructor(channelName) {
        this.channelName = channelName
        this.channelSubscribers = []
    }
    subscribe(subscriber) {
        this.channelSubscribers.push(subscriber)
        this.noti(`${subscriber.userName} just subscribed your channel, ${this.channelName}!! Your subscribers is now ${this.channelSubscribers.length}`)
        subscriber.noti(`${subscriber.userName}, You just subscribed to ${this.channelName}!!`)
    }
    unsubscribe(unsubscriber) {
        this.channelSubscribers = this.channelSubscribers.filter(sub => sub.userName !== unsubscriber.userName)
        this.noti(`${unsubscriber.userName} unsubscribed your channel, ${this.channelName}!! Your subscribers is now ${this.channelSubscribers.length}`)
        unsubscriber.noti(`${unsubscriber.userName}, You just unsubscribed to ${this.channelName}!!`)
    }
    videoUploaded(vidTitle) {
        this.channelSubscribers.forEach(sub => sub.noti(`${sub.userName} A new video uploaded by ${this.channelName}, Check out the video "${vidTitle}"!!`))
    }
    noti(msg) {
        console.log(msg)
    }

}

class User {
    constructor(user) {
        this.userName = user
    }
    noti(msg) {
        console.log(msg)
    }
}

const user1 = new User("Timesh Tador")
const user2 = new User("Nicola Tesla")
const youtuber1 = new YoutubeChannel("Syntax Error")

youtuber1.subscribe(user1)
youtuber1.subscribe(user2)
youtuber1.videoUploaded("Crazy Project")
youtuber1.unsubscribe(user1)
youtuber1.videoUploaded("My last words")
