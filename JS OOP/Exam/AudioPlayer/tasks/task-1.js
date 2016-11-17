function solve() {
    var playerID = 0,
        playlistID = 0,
        playableID = 0;

    function isStringValid(value) {
        var typeStr = (typeof(value) === 'string');
        var minStr = (value.length >= 3);
        var maxStr = (value.length <= 25);
        if (!typeStr || !minStr || !maxStr) {
            throw 'The parameter is not valid';
        }
    }

    class Player {
        constructor(name) {
            isStringValid(name);
            this._name = name;
            this._player = [];
        }
        get name() {
            return this._name;
        }
        set name(value) {
            isStringValid(value);
            this._name = value;
        }
        addPlaylist(playlistToAdd) {
            if (!(playlistToAdd instanceof PlayList)) {
                throw new Error('The input item is not of type Playlist!');
            }
            this._player.push(playlistToAdd);
            return this;
        }
        getPlaylistById(id) {
            let search = null;
            for (let item of this._player) {
                if (item.id === id) {
                    search = item;
                    break;
                }
            }
            return search;
        }
        removePlaylist(obj) {
            obj = typeof obj === 'object' ? obj.id : obj;
            let itemToRemove = null;
            for (let i = 0; i < this._player.length; i += 1) {
                if (this._player[i].id === obj) {
                    itemToRemove = i;
                    break;
                }
                if (itemToRemove === null) {
                    throw "Playlist with the provided id is not contained in the player";
                }
                this._player.splice(itemToRemove, 1);
            }
            return this;
        }
        listPlaylists(page, size) {
            function compare(a, b) {
                if (a._title < b._title)
                    return -1;
                if (a._title > b._title)
                    return 1;
                return 0;
            }
            let sortPlayables = this._player.sort(compare);
            let pageArr = [];
            let startIndex = page * size;
            if (startIndex > sortPlayables.length) {
                throw "page*size > COUNT_OF_PLAYABLE_IN_PLAYLIST";
            }
            if (page < 0 || size <= 0) {
                throw "page < 0 ot size <= 0";
            }
            for (let i = 0; i < size; i += 1) {
                let index = startIndex + i;
                if (sortPlayables[index]) {
                    pageArr.push(sortPlayables[index]);
                } else {
                    break;
                }
            }
            return pageArr;
        }

    contains(playable, playlist){

    }
    search(pattern) {

    }
}
class PlayList {
    constructor(name) {
        this._id = ++playlistID;
        isStringValid(name);
        this._name = name;
        this._playables = [];
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        isStringValid(value);
        this._name = value;
    }
    addPlayable(playable) {
        this._playables.push(playable);
        return this;
    }
    getPlayableById(id) {
        let search = null;
        for (let item of this._playables) {
            if (item.id === id) {
                search = item;
                break;
            }
        }
        return search;
    }
    removePlayable(obj) {
        let itemToRemove = null;
        obj = typeof obj === 'object' ? obj.id : obj;
        for (let i = 0; i < this._playables.length; i += 1) {
            if (this._playables[i]._id === obj) {
                itemToRemove = i;
                break;
            }
        }
        if (itemToRemove === null) {
            throw "Playable with the provided id is not contained in the playlist";
        }
        this._playables.splice(itemToRemove, 1);
        //console.log(this._playables);
        return this;
    }
    listPlayables(page, size) {
        function compare(a, b) {
            if (a._title < b._title)
                return -1;
            if (a._title > b._title)
                return 1;
            return 0;
        }
        let sortPlayables = this._playables.sort(compare);
        let pageArr = [];
        let startIndex = page * size;
        if (startIndex > sortPlayables.length) {
            throw "page*size > COUNT_OF_PLAYABLE_IN_PLAYLIST";
        }
        if (page < 0 || size <= 0) {
            throw "page < 0 ot size <= 0";
        }
        for (let i = 0; i < size; i += 1) {
            let index = startIndex + i;
            if (sortPlayables[index]) {
                pageArr.push(sortPlayables[index]);
            } else {
                break;
            }
        }
        return pageArr;
    }

}
class Playable {
    constructor(title, author) {
        this._id = ++playableID;
        isStringValid(title);
        this._title = title;
        isStringValid(author);
        this._author = author;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        isStringValid(value);
        this._title = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        isStringValid(value);
        this._author = value;
    }
    play() {
        let result = '[' + this._id + ']' + '. ' + '[' + this._title + ']' + ' - ' + '[' + this._author + ']';
        return result;
    }
}
class Audio extends Playable {
    constructor(title, author, length) {
        super(title, author);
        this._length = length;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        if (isFinite(value)) {
            if (value <= 0) {
                throw "Length must be greater than 0";
            }
        } else {
            throw "Length must be a number";
        }
        this._length = value;
    }

    play() {
        let result = super.play() + ' - [' + this._length + ']';

        return result;
    }
}
class Video extends Playable {
    constructor(title, author, imdbRating) {
        super(title, author);
        this._imdbRating = imdbRating;
    }
    get imdbRating() {
        return this._imdbRating;
    }
    set imdbRating(value) {
        if (isFinite(value)) {
            if (value < 1 || value > 5) {
                throw "Rating must be between 1 and 5";
            }
        } else {
            throw "Rating must be a number";
        }
        this._imdbRating = value;
    }
    play() {
        let result = super.play() + ' - [' + this._imdbRating + ']';

        return result;
    }
}

return {
    getPlayer: function(name) {
        let player = new Player(name);
        return player;
    },
    getPlaylist: function(name) {
        let playlist = new PlayList(name);
        return playlist;
    },
    getAudio: function(title, author, length) {
        let audio = new Audio(title, author, length);
        return audio;
    },
    getVideo: function(title, author, imdbRating) {
        let video = new Video(title, author, imdbRating);
        return video;
    }
};
}

module.exports = solve;
//var opit = solve();
//var playable1 = opit.getAudio("To the Moon", 'Maikal Djekson', 3);
//var playable2 = opit.getAudio("Love", 'Lili Ivanova', 1);
//var playable3 = opit.getAudio("Sunrise", 'Vasil Naidenov', 8);
//var playable4 = opit.getAudio("Sunrise 0", 'Mimi Ivanova', 5);
//var playable5 = opit.getAudio("On the Way 1", 'Mimi Ivanova', 5);
//var playable6 = opit.getAudio("Sunrise 1", 'Mimi Ivanova', 5);
//var playable7 = opit.getAudio("On the Way 2", 'Mimi Ivanova', 5);
//var playable8 = opit.getAudio("Sunrise 3", 'Mimi Ivanova', 5);
//var playable9 = opit.getAudio("On the Way 3", 'Mimi Ivanova', 5);
//var playable10 = opit.getAudio("Sunrise 2", 'Mimi Ivanova', 5);
//console.log(playable1.play());
//console.log(playable2.play());
//console.log(playable3.play());
//console.log(playable4.play());
//var video1 = opit.getVideo("To the Moon", 'AnimationStudio', 6);
//var video2 = opit.getVideo("Love", 'BNT', 1);
//var video3 = opit.getVideo("Sunrise", 'BTV', 8);
//var video4 = opit.getVideo("On the Way", 'NOVA', 5);
//console.log(video1.play());
//console.log(video2.play());
//console.log(video3.play());
//console.log(video4.play());
//var playlist = opit.getPlaylist("First").addPlayable(playable1).addPlayable(playable2).addPlayable(playable3);
//playlist.addPlayable(playable5);
//playlist.addPlayable(playable6);
//playlist.addPlayable(playable7);
//playlist.addPlayable(playable8);
//playlist.addPlayable(playable9);
//playlist.addPlayable(playable10);
//console.log(playlist.getPlayableById(2));
//playlist.removePlayable(playable1);
//console.log(playlist.listPlayables(0, 3));