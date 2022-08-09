function bestFriend(friends) {
    let bigName = friends[0];
    for (let i = 1; i < friends.length; i++) {
        let friend = friends[i];
        if (bigName.length < friend.length) {
            bigName = friend;
        }
    }
    return bigName;
}


const myFriends = ['Rahim', 'Karim', 'Rashedul Chy', 'Rohul Amin Babu', 'Fahim', 'Rayhan', 'Shihab', 'priya', 'Mehesun', 'Esha', 'Abdus Sami',];

const bigFriend = bestFriend(myFriends);
console.log(bigFriend);
